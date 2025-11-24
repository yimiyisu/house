package com.yimiyisu.house.controller;

import com.zen.ZenController;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.AccessRole;
import com.zen.annotation.Inject;
import com.zen.enums.ZenRole;
import com.zen.kit.ConfigKit;
import com.zen.kit.StringKit;
import com.zen.kit.UserKit;

@AccessRole(ZenRole.ANONYMITY)
public class Home extends ZenController {

    @Inject
    private ZenEngine zenEngine;

    public ZenResult status() {
        return ZenResult.success();
    }

    // 房屋明细水电表
    public ZenResult hydropower(ZenData data) {
        String water = data.get("water");
        String electricity = data.get("electricity");
        String houseId = data.get("houseId");

        if (water != null) {
            ZenResult waterEquipment = zenEngine.execute("get/equipment", ZenData.create("number", water));
            if (waterEquipment.getData() == null) {
                return ZenResult.fail("请输入正确的设备编号");
            }
            zenEngine.execute("patch/house", ZenData.create().put("water", water).put("id", houseId));
            zenEngine.execute("patch/equipment", ZenData.create().put("id", waterEquipment.get("id")).put("houseId", houseId));

        } else if (electricity != null) {
            ZenResult electricityEquipment = zenEngine.execute("get/equipment", ZenData.create("number", electricity));
            if (electricityEquipment.getData() == null) {
                return ZenResult.fail("请输入正确的设备编号");
            }
            zenEngine.execute("patch/house", ZenData.create().put("electricity", electricity).put("id", houseId));
            zenEngine.execute("patch/equipment", ZenData.create().put("id", electricityEquipment.get("id")).put("houseId", houseId));
        }

        return ZenResult.success();
    }


    // 生成物业人员入职链接
    public ZenResult makeLink(ZenData data) {
        String title = "入职申请";
        String url = ConfigKit.get("frontDomain");
        if (StringKit.isNotEmpty(title)) {
            title = StringKit.encrypt(title);
            url += url.contains("?")?"&_tl_=" + title:"?_tl_=" + title;
        }
        url += "#/register/index?code=" + StringKit.encrypt(data.get("id"));
        return ZenResult.success().setData(url);
    }

}
