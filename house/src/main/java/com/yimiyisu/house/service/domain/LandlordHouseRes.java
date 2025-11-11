package com.yimiyisu.house.service.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

//业主通用类
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LandlordHouseRes {
    private String houseId;
    private String landlordId;
    private int isOwner;
}
