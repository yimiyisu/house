package com.yimiyisu.house.hooks.patrolTask;

import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Inject;
import com.zen.annotation.ZenHook;
import com.zen.interfaces.IHook;

import java.util.List;
import java.util.Map;

@ZenHook("put/patrol_task")
public class PutHook implements IHook {
    @Inject
    private ZenEngine zenEngine;

    @Override
    public void after(ZenData data, ZenResult result) {
        ZenData zenData = ZenData.create();
        zenData.put("taskId", result.get("id"));
        data.put("id", data.get("routeId"));
        ZenResult point = zenEngine.execute("list/patrol_points", data);
        List<Map> list = point.asList(Map.class);
        for (Map map : list) {
            zenData.put("points_id", map.get("id"));
            zenEngine.execute("put/task_detail", zenData);
        }
    }
}
