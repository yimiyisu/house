package com.yimiyisu.house.controller;

import com.google.gson.JsonObject;
import com.zen.ZenController;
import com.zen.ZenData;
import com.zen.ZenResult;
import com.zen.annotation.AccessRole;
import com.zen.enums.ZenRole;
import com.zen.kit.ConfigKit;
import com.zen.kit.JsonKit;

import java.util.Map;

@AccessRole(ZenRole.SIGNATURE)
public class Setting extends ZenController {

    private static final String TYPE_BASIC = "Type";
    private static final String PREFIX = "cfg_";

    // 设置类型
    public ZenResult setType(ZenData data) {
        String active = data.get("active"); // 类型
        ConfigKit.self(PREFIX + active + TYPE_BASIC, data.getOrigin());
        return ZenResult.success("设置成功");
    }

    // 获取类型
    public ZenResult getType(ZenData data) {
        String active = data.get("active"); // 类型
        JsonObject jsonObject = ConfigKit.self(PREFIX + active + TYPE_BASIC);
        return ZenResult.success().setData(jsonObject);
    }
}
