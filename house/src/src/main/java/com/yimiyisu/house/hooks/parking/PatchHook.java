package com.yimiyisu.house.hooks.parking;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

@ZenHook("patch/parking")
public class PatchHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data){
        if(!"2".equals(data.get("status"))){
            ZenData zenData = ZenData.create(data);
            zenData.put("parkingId",data.get("id"));
            ZenResult zenResult = zenEngine.execute("count/car", zenData);
            if (zenResult.getLong() != 0){
                return ZenResult.fail("该车位已出售，不能修改状态");
            }

        }
        return IHook.super.before(data);
    }
}
