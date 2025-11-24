package com.yimiyisu.house.hooks.parking;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

@ZenHook("delete/parking")
public class DeleteHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        ZenData zenData = ZenData.create(data);
        zenData.put("parkingId",data.get("id"));
        ZenResult zenResult = zenEngine.execute("count/car", zenData);
        if (zenResult.getLong() != 0){
            return ZenResult.fail("该车位下有车辆信息，不能删除");
        }
        return IHook.super.before(data);
    }
}
