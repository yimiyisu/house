package com.yimiyisu.house.hooks.parkingArea;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

/**
 * @author Z-熙玉
 * @version 1.0
 */
@ZenHook("delete/parking_area")
public class DeleteHook implements IHook {

    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        ZenResult houses = zenEngine.execute("count/parking_area", data);
        if (houses.getLong() > 0) {
            return ZenResult.fail("有关联区域不可删除");
        }
        ZenResult rooms = zenEngine.execute("count/parking", data);
        if (rooms.getLong() > 0) {
            return ZenResult.fail("有关联车位不可删除");
        }
        return IHook.super.before(data);
    }
}
