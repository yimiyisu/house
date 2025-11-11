package com.yimiyisu.house.hooks.patrolDetail;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

@ZenHook("put/task_detail")
public class PutHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        ZenResult count = zenEngine.execute("count/task_detail", data);
        if (count.getLong() > 0) {
            return ZenResult.fail("该点位已打卡");
        }
        return IHook.super.before(data);
    }

}
