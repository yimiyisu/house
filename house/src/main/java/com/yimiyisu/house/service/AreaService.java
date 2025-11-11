package com.yimiyisu.house.service;

import com.yimiyisu.house.service.domain.AreaDo;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Component;
import com.zen.annotation.Inject;
import com.zen.kit.CacheKit;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @author Z-熙玉
 * @version 1.0
 */

@Component
public class AreaService {

    @Inject
    private ZenEngine zenEngine;

    /**
     * 查询区域并构建树形结构，附带缓存操作
     * @param communityId 社区id
     * @param path 请求路径
     * @param key 缓存key
     * @return 区域树形结构数据
     */
    public List<AreaDo> areaList(String communityId, String path, String key, String isCommercial) {
        if (key == null) {
            ZenData queryData = ZenData.create("communityId", communityId);
            ZenResult commerceAreas = zenEngine.execute(path, queryData);
            List<AreaDo> areaDoList = commerceAreas.asList(AreaDo.class);
            return buildTree(areaDoList);
        }

        // 1.查询缓存，如果有直接返回
        if (CacheKit.get(key) != null) {
            return CacheKit.get(key, List.class);
        }

        // 2.缓存未命中，查询数据库，并构造树形结构放入缓存
        ZenData queryData = ZenData.create("communityId", communityId);
        queryData.put("isCommercial", isCommercial);
        ZenResult commerceAreas = zenEngine.execute(path, queryData);
        if(commerceAreas.isEmpty()) {
            return new ArrayList<>();
        }
        List<AreaDo> areaDoList = commerceAreas.asList(AreaDo.class);
        List<AreaDo> tree = buildTree(areaDoList);
        CacheKit.set(key, tree,120);
        return tree;
    }

    public void cleanCache(String data, String commerce, String house, ZenData zenData) {
        String communityId = zenData.getTenant();
        if (commerce.contains(data)) {
            CacheKit.remove(commerce + communityId);
        } else if (house.contains(data)) {
            CacheKit.remove(house + communityId);
        }
    }

    /**
     * 构建树形结构
     * @param areaDos 区域集合
     * @return 树形结构
     */
    private List<AreaDo> buildTree(List<AreaDo> areaDos) {
        Map<String, AreaDo> areaMap = areaDos.stream()
                .collect(Collectors.toMap(AreaDo::getId, Function.identity()));
        List<AreaDo> roots = new ArrayList<>();

        for (AreaDo areaDo : areaDos) {
            if (areaDo.getParentId().equals("0")) {
                roots.add(areaDo);
            } else {
                Optional.ofNullable(areaMap.get(areaDo.getParentId())).ifPresent(parent -> parent.getChildren().add(areaDo));
            }
        }
        return roots;
    }

}
