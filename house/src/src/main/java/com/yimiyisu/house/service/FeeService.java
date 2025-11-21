package com.yimiyisu.house.service;

import com.yimiyisu.house.service.domain.FeePlainDO;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Component;
import com.zen.annotation.Inject;
import com.zen.kit.StringKit;

import java.util.List;

@Component
public class FeeService {

    @Inject
    private ZenEngine zenEngine;

    // 根据id和类型查询费率配置
    public FeePlainDO.FeeConfig getFeePlain(String id, String type) {
        ZenResult feePlainResult = zenEngine.execute("get/fee_plain", ZenData.create("id", id));
        if (feePlainResult.isEmpty()) return null;
        FeePlainDO feePlain = feePlainResult.asEntity(FeePlainDO.class);
        List<FeePlainDO.FeeConfig> configs = feePlain.getConfigs();
        if (configs == null || configs.isEmpty()) {
            return null;
        }

        for (FeePlainDO.FeeConfig config : configs) {
            if (StringKit.equals(config.getTitle(), type)) return config;
        }

        return null;
    }
}
