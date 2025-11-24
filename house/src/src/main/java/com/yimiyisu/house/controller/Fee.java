package com.yimiyisu.house.controller;

import com.yimiyisu.house.service.FeeService;
import com.yimiyisu.house.service.domain.CarDO;
import com.yimiyisu.house.service.domain.FeePlainDO;
import com.zen.ZenController;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.AccessRole;
import com.zen.annotation.Inject;
import com.zen.enums.ZenRole;
import com.zen.kit.DateKit;
import com.zen.kit.StringKit;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;

@AccessRole(ZenRole.SIGNATURE)
public class Fee extends ZenController {

    @Inject
    private ZenEngine zenEngine;

    @Inject
    private FeeService feeService;

    // 将时间戳转为日期直接加上月份
    private static long addMonthsToTimestamp(long timestamp, int monthsToAdd) {
        ZonedDateTime dateTime = Instant.ofEpochSecond(timestamp)
                .atZone(ZoneOffset.UTC);
        ZonedDateTime newDateTime = dateTime.plusMonths(monthsToAdd);
        return newDateTime.toEpochSecond();
    }

    // 新增水/电费管理记录
    public ZenResult addWaterLog(ZenData data) {
        String feeId = data.get("feeId"); // 费率配置id
        String type = data.get("type"); // 类型
        double number = Double.parseDouble(data.get("number")); // 本次用量

        // 查询设备信息
        ZenResult equipmentResult = zenEngine.execute("get/equipment", ZenData.create("number", data.get("equipment")));
        if (equipmentResult.isEmpty()) return ZenResult.fail("请输入正确的设备编号");
        int equipmentType = equipmentResult.getInt("type");


        // 查询费率配置
        FeePlainDO.FeeConfig feeConfig = feeService.getFeePlain(feeId, type); // 费率配置
        if (feeConfig == null) return ZenResult.fail("没有此费率标准");

        // 计算金额
        long price = feeConfig.getPrice(); // 单价
        long cash = (long) (price * number);

        if (equipmentType == 4) {
            zenEngine.execute("put/water_log", data.put("cash", cash));
        } else if (equipmentType == 5) {
            zenEngine.execute("put/electric_log", data.put("cash", cash));
        }

        return ZenResult.success();
    }

    // 新增车位缴费记录
    public ZenResult addParkingFee(ZenData data) {
        int month = Integer.valueOf(data.get("month")); // 租赁时长(月)
        String carId = data.get("carId"); // 车辆id

        // 车辆信息
        ZenResult carResult = zenEngine.execute("get/car", ZenData.create("id", carId));
        CarDO car = carResult.asEntity(CarDO.class);
        String parkingId = car.getParkingId(); // 车位id
        String fee = car.getFee(); // 费率id
        long endTime = car.getEndTime(); // 车位到期时间

        // 查询缴费标准
        ZenResult feeResult = zenEngine.execute("get/fee_plain", ZenData.create().put("id", fee));
        if (feeResult.isEmpty()) return ZenResult.fail("无此收费标准");
        FeePlainDO feePlain = feeResult.asEntity(FeePlainDO.class);
        if (feePlain.getStatus() == 0 || feePlain.getStartTime() > DateKit.now())
            return ZenResult.fail("该收费标准无效，请重新选择");
        List<FeePlainDO.FeeConfig> feeConfigs = feePlain.getConfigs();

        // 查询车位信息
        ZenResult parkingResult = zenEngine.execute("get/parking", ZenData.create(data).put("id", parkingId));
        if (parkingResult.isEmpty()) return ZenResult.success();
        String parkingType = parkingResult.get("type"); // 车位类型

        // 找出该车位类型缴费标准
        boolean flag = false;
        FeePlainDO.FeeConfig feeConfig = new FeePlainDO.FeeConfig();
        for (FeePlainDO.FeeConfig item : feeConfigs) {
            if (StringKit.equals(item.getTitle(), parkingType)) {
                feeConfig = item;
                flag = true;
            }
        }
        if (!flag) return ZenResult.fail("该车位类型无收费标准");

        // 计算金额
        long cash = feeConfig.getPrice() * month;
        long newEndTime = 0;
        // 计算到期时间
        if (endTime == 0) {
            newEndTime = addMonthsToTimestamp(DateKit.now(), month);
        } else {
            newEndTime = addMonthsToTimestamp(endTime, month);
        }

        // 插入车位缴费记录
        zenEngine.execute("put/car_log", ZenData.create(data)
                .put("cash", cash).put("parkingId", car.getParkingId()).put("month", month).put("carId", carId).put("validTime", newEndTime));
        // 更新车辆信息中的车位到期时间以及状态
        int status;
        if (newEndTime > DateKit.now()) status = 1; // 缴费后 到期时间 > 当前时间 - 未过期
        else status = 3; // 缴费后 到期时间 <= 当前时间 - 仍过期
        zenEngine.execute("patch/car_status", ZenData.create(data).put("status", status).put("endTime", newEndTime).put("id", carId));

        return ZenResult.success();
    }
}
