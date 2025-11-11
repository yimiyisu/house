package com.yimiyisu.house.controller;

import com.yimiyisu.house.service.domain.LandlordHouseRes;
import com.yimiyisu.house.service.landlord.LandlordService;
import com.zen.ZenController;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.AccessRole;
import com.zen.annotation.Inject;
import com.zen.annotation.MethodType;
import com.zen.domain.ZenUser;
import com.zen.enums.ZenMethod;
import com.zen.enums.ZenRole;
import com.zen.kit.UserKit;

import java.util.List;
import java.util.Map;

@AccessRole(ZenRole.ADMIN)
public class Landlord extends ZenController {
    private final static String APPLY_KEY = "houseApply";
    @Inject
    ZenEngine zenEngine;
    @Inject
    private LandlordService landlordService;

    public ZenResult landlord(ZenData data) {
        ZenResult execute = zenEngine.execute("get/landlord_house", data);
        String landlordId = execute.get("landlordId");
        if (landlordId == null) {
            return ZenResult.success();
        }
        ZenResult landlord = zenEngine.execute("get/landlord", ZenData.create("id", landlordId));
        return ZenResult.success().setData(landlord.getData());
    }

    public ZenResult handle(ZenData data) {
        if (data.isEmpty("telephone")) return ZenResult.fail("手机号不能为空");
        // 移除meta中的标记字段
        String uid = data.get("creator"); // 申请人id
        UserKit.removeMeta(uid, APPLY_KEY);
        String houseId = data.get("houseId");

        if ("0".equals(data.get("type")) || "0".equals(data.get("commreceType"))) {
            data.put("isOwner", "1");
            if(data.isEmpty("type"))data.put("commreceType",data.get("type"));
            else data.put("houseType",data.get("type"));
        }
        int isOwner = Integer.parseInt(data.get("isOwner"));

        //邀请表同意，修改和用户表数据,往业主表插入数据
        ZenUser zenUser = UserKit.get(uid);
        zenUser.setOpenId(data.get("openId"));
        zenUser.setUsername(data.get("title"));
        zenUser.setMobile(data.get("telephone"));

        // 查询业主表中是否有该业主
        ZenData zenData = ZenData.create(data);
        zenData.put("houseId", houseId);

        ZenResult landlordCount = zenEngine.execute("count/landlord_id", ZenData.create(data).put("id", uid));
        if (landlordCount.getLong() == 0) {
            //业主表没有该业主
            String applyId = data.get("id"); // 申请记录id
            data.put("id",uid);
            ZenResult landlordResult = zenEngine.execute("put/landlord", data);
            //通过houseId查询该房子下的业主
            if (landlordService.extracted(isOwner, houseId)) return ZenResult.fail("该房子已有产权人，不可再添加");
            data.put("landlordId", landlordResult.get("id"));
            zenEngine.execute("put/landlord_house", data);
            zenEngine.execute("patch/landlord_apply", ZenData.create(data).put("id", applyId).put("status", 1));
            // 添加为社区会员
            ZenResult memberResult = zenEngine.execute("get/member", ZenData.create().put("id", uid));
            if (memberResult.isEmpty()) {
                zenEngine.execute("put/member", ZenData.create().put("id", uid).put("communityId", data.getTenant()));
            }
            return ZenResult.success("邀请通过");
        }
        //业主表有该业主,查询该业主
        ZenResult landlordResult = zenEngine.execute("get/landlord", ZenData.create("id",uid));
        //通过houseId查询该房子下的业主是否有产权人
        if (landlordService.extracted(isOwner, houseId)) return ZenResult.fail("该房子已有产权人，不可再添加");
        data.put("landlordId", landlordResult.get("id"));
        zenEngine.execute("put/landlord_house", data);
        data.put("status", '1');
        zenEngine.execute("patch/landlord_apply", data);

        // 添加为社区会员
        ZenResult memberResult = zenEngine.execute("get/member", ZenData.create().put("id", uid));
        if (memberResult.isEmpty()) {
            zenEngine.execute("put/member", ZenData.create().put("id", uid).put("communityId", data.getTenant()));
        }
        return ZenResult.success("邀请通过");
    }

    @MethodType(ZenMethod.POST)
    public ZenResult close(ZenData data) {
        // 移除meta中的标记字段
        String uid = data.get("creator"); // 申请人id
        UserKit.removeMeta(uid, APPLY_KEY);
        data.put("status", '2');
        zenEngine.execute("patch/landlord_apply", data);
        return ZenResult.success("邀请未通过");
    }




}