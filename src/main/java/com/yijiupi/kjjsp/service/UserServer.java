
package com.yijiupi.kjjsp.service;

import com.yijiupi.kjjsp.pojo.*;

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
     * 判断是否有此人
     *
     * @param
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

    void updateUser(LoginVO tmp);

    /**
     * 信息完善
     *
     * @param loginVO
     */
    void updateUser1(LoginVO loginVO);

    /**
     * 修改个性签名
     *
     * @param loginVO
     */
    void updategq(LoginVO loginVO);

    /**
     * 获得广场留言
     *
     * @param page
     * @return
     */
    GuangChangLiuYanVO getGuangChangLiuYanVo(Page page);

    /**
     * 添加广场留言
     *
     * @param gcliuyanDTO
     */
    void addGuangChangLiuYan(GcliuyanDTO gcliuyanDTO);

    /**
     * 回复广场留言
     *
     * @param huifuGuangChangLiuYanDTO
     */
    void huifuGuangChangLiuYan(HuifuGuangChangLiuYanDTO huifuGuangChangLiuYanDTO);

    /**
     * 得到驿站大事记
     *
     * @return
     */
    List getYiZhanShiJi();

    /**
     * 添加驿站大事记
     *
     * @param infor
     */
    void addYiZhanShiJi(String infor);

    /**
     * 获得作者信息
     */
    LoginVO getFwInfor(Integer fwId);
}

