package com.yimiyisu.house.hooks;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.enums.ZenAction;
import com.zen.interfaces.IHook;

import java.util.List;

@ZenHook("zenTenant")
public class ZenTenantHook implements IHook {

    @Inject
    private ZenEngine zenEngine;

    @Override
    public ZenResult before(ZenData data) {
        ZenResult tenantResult = zenEngine.execute("list/myCommunityManager", data);
        if (tenantResult.isEmpty()) return ZenResult.fail("找不到相关社区");
        List<String> list = tenantResult.asList().stream().
                map((element) -> element.get("communityId").getAsString()).toList();

        return ZenResult.success().
                put("list", list).
                put("depend", "community").
                setAction(ZenAction.END);
    }
}
