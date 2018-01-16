package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.LoginVO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FriendMapper {

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

    /**
     * 获取自己好友申请总数
     *
     * @param uid
     * @return
     */
    Integer getAddFriendCount(@Param("uid") Integer uid);

    /**
     * 获取自己好友申请列表
     *
     * @param uid
     * @return
     */
    List<LoginVO> getAddFriendList(@Param("uid") Integer uid);

    /**
     * 删除双方好友记录
     *
     * @param uid
     * @param fid
     * @return
     */
    void deleteFriendStatus(@Param("uid")Integer uid, @Param("fid")Integer fid);

    /**
     * 添加好友
     *
     * @param uid
     * @param fid
     */
    void insertFriend(@Param("uid")Integer uid, @Param("fid")Integer fid);

    /**
     * 删除申请状态
     *
     * @param uid
     * @param fid
     */
    void deleteAgreeAddFriend(@Param("uid")Integer uid,@Param("fid") Integer fid);
}