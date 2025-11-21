package com.yimiyisu.house.service.domain;

import lombok.Builder;
import lombok.Data;

/**
 * @author Z-熙玉
 * @version 1.0
 */

@Data
@Builder
public class AreaRes {

    private String id;
    private String communityId;
    private String title;

}
