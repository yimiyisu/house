package com.yimiyisu.house.hooks.landlordHose;

import com.yimiyisu.house.service.domain.LandlordHouseRes;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

import java.util.List;

@ZenHook("put/landlord_house")
public class PutHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        //设置是否是产权人字段
        if ("0".equals(data.get("houseType")) || "0".equals(data.get("commreceType"))) {
            data.put("isOwner", "1");
        }
        ZenResult count = zenEngine.execute("count/landlord_house", data);
        if (count.getLong() != 0){
            ZenResult landlordResult = zenEngine.execute("list/landlord_house", data);
            List<LandlordHouseRes> landlordList = landlordResult.asList(LandlordHouseRes.class);
            for (LandlordHouseRes landlordHouseRes : landlordList) {
                if (landlordHouseRes.getLandlordId().equals(data.get("landlordId"))){
                    return ZenResult.fail("该业主已存在，请勿再次添加");
                }
                if ("1".equals(landlordHouseRes.getIsOwner()) && "1".equals(data.get("isOwner"))){
                    return ZenResult.fail("该房子已有产权人，不可再添加");
                }
            }
        }
        return IHook.super.before(data);
    }


}
