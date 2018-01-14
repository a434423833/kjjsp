package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.FriendPO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FriendMapper {
    List listGetFriend(@Param("uid") Integer uid, @Param("begin") Integer begin, @Param("pageSizeStr") Integer pageSizeStr);

    Integer getCount(Integer uid);

    /**
     * 发送好友申请
     *
     * @param uid
     * @param friendId
     * @return
     */
    Integer insertFriendRequest(@Param("uid") Integer uid, @Param("fid") Integer friendId);

    /**
     * 判断添加用户与自身状态1,好友，0已经发送好友申请
     *
     * @param uid
     * @param friendId
     * @return
     */
    String getFriend(@Param("uid") Integer uid, @Param("fid") Integer friendId);

    List listByFid(Integer fid);

    void updateStatus(FriendPO friendPO);

    void insertByFriendPO(FriendPO friendPO);

    void deleteFriend(FriendPO friendPO);

    String getStatusByFriendPO(FriendPO friendPO);

    void updateStatusByFidAndUid(FriendPO friendPO);
}