package com.yimiyisu.house.controller;


import com.zen.ZenController;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.AccessRole;
import com.zen.annotation.Inject;
import com.zen.enums.ZenRole;

import java.util.List;
import java.util.Map;

@AccessRole(ZenRole.ADMIN)
public class Patrol extends ZenController {
    @Inject
    private ZenEngine zenEngine;

    public ZenResult putTask(ZenData data){
        //查询巡检路线下的巡检点
        ZenResult pointsResult = zenEngine.execute("list/patrol_points", ZenData.create("routeId", data.get("routeId")));
        if (pointsResult.isEmpty())return ZenResult.fail("任务添加失败，巡检路线无巡检点");
        //添加巡检任务
        ZenResult execute = zenEngine.execute("put/patrol_task", data);
        ZenData zenData = ZenData.create(data);
        zenData.put("taskId",execute.get("id"));
        zenEngine.execute("put/task_user",zenData);
        //添加巡检详情
        List<Map> listMap = pointsResult.asList(Map.class);
        listMap.forEach(points ->{
            zenEngine.execute("put/task_detail",zenData.put("pointsId",points.get("id")));
        });
        return ZenResult.success();
    }
}
