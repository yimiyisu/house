package com.yimiyisu.house.hooks.carLog;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

@ZenHook("put/car_log")
public class PutHook implements IHook {
    @Inject
    private ZenEngine zenEngine;
    @Override
    public ZenResult before(ZenData data) {
        ZenData zenData = ZenData.create(data);
        ZenResult zenResult = zenEngine.execute("put/pay_log", zenData);
        data.put("payId",zenResult.get("id"));
        System.out.println(data);
        return IHook.super.before(data);
    }

}
