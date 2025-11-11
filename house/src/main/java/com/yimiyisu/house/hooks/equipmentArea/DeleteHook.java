package com.yimiyisu.house.hooks.equipmentArea;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;


@ZenHook("delete/equipment_area")
public class DeleteHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        ZenResult result = zenEngine.execute("count/equipment_area", data);
        if (result.getLong() > 0) {
            return ZenResult.fail("有关联区域不可删除");
        }
        return IHook.super.before(data);
    }
}
