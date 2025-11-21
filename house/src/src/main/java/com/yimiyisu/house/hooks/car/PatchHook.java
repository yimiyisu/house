package com.yimiyisu.house.hooks.car;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

@ZenHook("patch/car")
public class PatchHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public void after(ZenData data, ZenResult result) {
        ZenData zenData = ZenData.create(data);
        if (data.get("parkingId") != null) {
            zenData.put("id", data.get("parkingId"));
            ZenResult result1 = zenEngine.execute("get/parking", zenData);
            String status = result1.get("status");
            if (status.equals("1")) {
                zenData.put("status", "2");
                zenEngine.execute("patch/parking", zenData);
            }
        }
    }
}
