
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
     * 模糊查找会员
     *
     * @param
     * @param friendName
     * @param uid        @return
     */
    List<LoginVO> listUserByName(String friendName, String uid);

    /**
     * 添加好友申请
     *
     * @param uid
     * @param friendId
     * @return
     */
    Integer addFriend(Integer uid, Integer friendId);

    /**
     * 修改头像
     *
     * @param tmp
     */
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
     * 获得访问主页信息
     */
    LoginVO getFwInfor(Integer fwId);

    /**
     * 得到会员信息
     *
     * @return
     */
    FriendInforVO listUser();

    /**
     * 用户注册
     *
     * @param loginVO
     * @return
     */
    LoginVO userReg(LoginVO loginVO);

    /**
     * 获取自己好友申请总数
     *
     * @param uid
     * @return
     */
    Integer getAddFriendCount(Integer uid);

    /**
     * 获取自己好友申请列表
     *
     * @param uid
     * @return
     */
    List<LoginVO> getAddFriendList(Integer uid);

    /**
     * 好友选择同意或者拒绝
     *
     * @param uid
     * @return
     */
    void friendSelect(Integer uid, Integer fid, Integer index);
}

