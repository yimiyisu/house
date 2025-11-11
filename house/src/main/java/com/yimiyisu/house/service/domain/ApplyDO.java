package com.yimiyisu.house.service.domain;

import lombok.Data;

@Data
public class ApplyDO {
    private String id;
    private String creator;
    private long createGmt;
    private long updateGmt;
    private String title;
    private String telephone;

    /**
     * 状态
     */
    private int status;
    private String communityId;

    /**
     * 与邀请人关系
     */
    private Integer type;

    /**
     * 邀请人id
     */
    private String landlordId;
    private String openId;
    private String houseId;
    private String idcard;
}
