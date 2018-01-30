package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.LoginVO;
import com.yijiupi.kjjsp.pojo.UserPO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserMapper {
    /**
     * 根据账号密码获得用户
     *
     * @param loginVO
     * @return
     */
    LoginVO getUser(LoginVO loginVO);

    LoginVO getUserByFriendName(Integer uid, Integer friendId);

    /**
     * 修改用户头像
     *
     * @param loginVO
     */
    void updateUser(LoginVO loginVO);

    /**
     * 修改用戶簽名
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
     * 获得访问fwid信息
     *
     * @param fwId
     * @return
     */
    LoginVO getFwInfor(@Param("fwId") Integer fwId);

    /**
     * 得到会员信息
     *
     * @return
     */
    List<LoginVO> listUser();

    /**
     * 检查用户账号是否重复
     *
     * @param account
     * @return
     */
    Integer checkAccount(@Param("account") String account);

    /**
     * 注册用户
     *
     * @param loginVO
     */
    void inserUser(LoginVO loginVO);

    /**
     * 查找会员
     *
     * @param friendName
     * @param uid
     * @return
     */
    List<LoginVO> listUserByName(@Param("friendName") String friendName, @Param("uid") String uid);

    /**
     * 查找头像路径
     *
     * @param fid
     * @return
     */
    LoginVO getFriendFile(@Param("fid") String fid);
}