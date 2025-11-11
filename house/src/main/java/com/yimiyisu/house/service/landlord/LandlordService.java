package com.yimiyisu.house.service.landlord;

import com.yimiyisu.house.service.domain.LandlordHouseRes;
import com.zen.ZenData;
import com.zen.ZenEngine;
import com.zen.ZenResult;
import com.zen.annotation.Component;
import com.zen.annotation.Inject;

import java.util.List;

@Component
public class LandlordService {
    @Inject
    private ZenEngine zenEngine;

    //判断是否有产权人
    public boolean extracted(int isOwner, String houseId) {
        ZenData zenData = ZenData.create("houseId", houseId);
        ZenResult landlordHouseCount = zenEngine.execute("count/landlord_house", zenData);
        if (landlordHouseCount.getLong() != 0) {
            ZenResult landlordHouseResult = zenEngine.execute("list/landlord_house", zenData);
            List<LandlordHouseRes> landlordHouselist = landlordHouseResult.asList(LandlordHouseRes.class);
            for (LandlordHouseRes landlordHouseRes : landlordHouselist) {
                if (landlordHouseRes.getIsOwner() == 1 && isOwner == 1) {
                    return true;
                }
            }
        }
        return false;
    }
}
