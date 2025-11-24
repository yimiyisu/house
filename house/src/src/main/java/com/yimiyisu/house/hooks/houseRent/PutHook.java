package com.yimiyisu.house.hooks.houseRent;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

import java.util.List;
import java.util.Map;

@ZenHook("put/house_rent")
public class PutHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        ZenData zenData = ZenData.create(data);
        zenData.put("houseType","4");
        zenData.put("houseId",data.get("houseId"));
        ZenResult landlordCount = zenEngine.execute("count/landlord", data);
        if (landlordCount.getLong() == 0){
            ZenResult landlordResult = zenEngine.execute("put/landlord", data);
            zenData.put("landlordId",landlordResult.get("id"));
            zenEngine.execute("put/landlord_house",zenData);
            return IHook.super.before(data);
        } else {
            ZenResult landlordResult = zenEngine.execute("list/landlord", data);
            List<Map> list = landlordResult.asList(Map.class);
            for (Map map : list) {
                zenData.put("landlordId",map.get("id"));
            }
            zenEngine.execute("put/landlord_house",zenData);
            return IHook.super.before(data);
        }
    }
}
