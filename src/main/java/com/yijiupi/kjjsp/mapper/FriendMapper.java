package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.FriendPO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FriendMapper {
    List listGetFriend(@Param("uid") Integer uid, @Param("begin") Integer begin, @Param("pageSizeStr") Integer pageSizeStr);

    Integer getCount(Integer uid);

    Integer insertByFriendName(FriendPO friendPO);

    String getFriend(@Param("username") String username, @Param("friendName") String friendName);

    List listByFid(Integer fid);

    void updateStatus(FriendPO friendPO);

    void insertByFriendPO(FriendPO friendPO);

    void deleteFriend(FriendPO friendPO);

    String getStatusByFriendPO(FriendPO friendPO);

    void updateStatusByFidAndUid(FriendPO friendPO);
}