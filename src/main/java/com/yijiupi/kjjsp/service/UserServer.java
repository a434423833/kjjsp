
package com.yijiupi.kjjsp.service;


import com.yijiupi.kjjsp.pojo.FriendVO;
import com.yijiupi.kjjsp.pojo.LoginVO;

import java.util.List;
import java.util.Map;

public interface UserServer {

    /**
     * 登陆
     *
     * @param loginVO
     * @return LoginVO
     */
    LoginVO userLogin(LoginVO loginVO);

    /**
     * 获得好友列表。分页
     *
     * @param pageIndexStr
     * @param object
     * @return Map
     */
    Map listGetFriend(String pageIndexStr, Object object);

    /**
     * 获取和好友的聊天信息
     *
     * @param friendName
     * @param object
     * @return List
     */
    List chatFriend(String friendName, Object object);

    /**
     * 添加聊天信息
     *
     * @param friendName
     * @param object
     * @param infor
     * @return int
     */
    int addChat(String friendName, Object object, String infor);

    /**
     * 获得说说
     *
     * @param id
     * @return
     */
    List listUserTalk(String id);

    /**
     * 点赞
     *
     * @param tid
     * @param username
     * @return
     */
    int clickDianZan(String tid, String username, String index);

    /**
     * 获得点赞人
     *
     * @param tid
     * @return
     */
    List getDianZan(String tid);

    /**
     * 判断是否有此人
     *
     * @param object
     * @param friendname
     * @return
     */
    boolean findUser(String friendname);

    /**
     * 添加好友申请
     *
     * @param object
     * @param friendName
     * @return
     */
    int addFriend(Object object, String friendName);

    /**
     * 显示当前好友申请信息
     *
     * @param user
     * @return
     */
    List showMessage(Object user);

    void friendApply(FriendVO friendVO, LoginVO loginVO, int index);

    List listByUidAndToday(String uid);

    List listByUidAndYesday(String uid);

    void addVisitor(Object object, String fw_id, String fw_name);

    void insertInfor(String infor, Object object);
}

