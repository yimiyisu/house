package com.yimiyisu.house.controller;

import com.yimiyisu.house.service.AreaService;
import com.yimiyisu.house.service.domain.AreaDo;
import com.zen.ZenController;
import com.zen.ZenData;
import com.zen.ZenResult;
import com.zen.annotation.AccessRole;
import com.zen.annotation.Inject;
import com.zen.annotation.MethodType;
import com.zen.enums.ZenMethod;
import com.zen.enums.ZenRole;

import java.util.List;

/**
 * @author Z-熙玉
 * @version 1.0
 * 区域controller
 */
@AccessRole(ZenRole.SIGNATURE)
public class Area extends ZenController {

    // 商业区树形结构数据缓存
    public static final String COMMERCE_AREA = "commerce_areas";
    // 住宅区树形结构数据缓存
    public static final String HOUSE_AREA = "house_areas";

    @Inject
    private AreaService areaService;

    /**
     * 日常管理-商业区管理
     * @param data communityId
     * @return 树形结构数据
     */
    @MethodType(ZenMethod.ALL)
    public ZenResult commerceAreaList(ZenData data) {
        String communityId = data.getTenant();
        List<AreaDo> list = areaService
                .areaList(communityId, "list/commercial_area_all", COMMERCE_AREA + communityId, "1");
        return ZenResult.success().setData(list);
    }

    /**
     * 日常管理-住宅区管理
     * @param data communityId
     * @return 树形结构数据
     */
    @MethodType(ZenMethod.ALL)
    public ZenResult houseAreaList(ZenData data) {
        String communityId = data.getTenant();
        List<AreaDo> list = areaService
                .areaList(communityId, "list/house_area_all", HOUSE_AREA + communityId, "0");
        return ZenResult.success().setData(list);
    }

    /**
     * 删除 Area 缓存
     * @param data 缓存key
     * @return success
     */
    @MethodType(ZenMethod.ALL)
    public ZenResult cleanCache(ZenData data) {
        String key = data.get("key");
        areaService.cleanCache(key, COMMERCE_AREA, HOUSE_AREA, data);
        return ZenResult.success();
    }
}
