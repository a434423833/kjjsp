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

    LoginVO getUserByFriendName(String friendName);

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

    LoginVO getFwInfor(@Param(("fwId")) Integer fwId);

    /**
     * 得到会员信息
     *
     * @return
     */
    List<LoginVO> listUser();
}