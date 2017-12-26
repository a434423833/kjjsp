package com.yijiupi.kjjsp.mapper;


import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Description: 与数据库交互
 * @author: caohao
 * @date: 2017/11/16 14:34
 */
public interface ChatFriendMapper {

    /**
     * 从数据库获得聊天信息
     *
     * @param friendName
     * @param userName
     * @return
     */
    List listGetChat(@Param("friendName") String friendName, @Param("userName") String userName);

    /**
     * 向数据库添加聊天记录
     *
     * @param friendName
     * @param username
     * @param infor
     * @return
     */
    int insertAddChat(@Param("friendName") String friendName, @Param("userName") String username, @Param("infor") String infor);
}