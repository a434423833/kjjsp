package com.yijiupi.kjjsp.conver.login;

import com.yijiupi.kjjsp.pojo.LoginVO;
import com.yijiupi.kjjsp.pojo.UserPO;
import com.yijiupi.kjjsp.utile.Md5;

/**
 * 转换类
 *
 * @author caohao 2018/1/5
 */

public class LoginConver {
    public static UserPO converTOLoginVO(LoginVO loginVO) {
        UserPO userPO = new UserPO();
        userPO.setUid(loginVO.getUid());
        userPO.setUsername(loginVO.getUsername());
        if (loginVO.getPassword() != null) {
            userPO.setPassword(Md5.getMD5(loginVO.getPassword()));
        }
        userPO.setSex(loginVO.getSex());
        userPO.setAge(loginVO.getAge());
        userPO.setPhone(loginVO.getPhone());
        userPO.setFile(loginVO.getFile());
        userPO.setAccount(loginVO.getAccount());
        userPO.setQianming(loginVO.getQianming());
        userPO.setAdmin(loginVO.getAdmin());

        return userPO;
    }

    public static LoginVO converVOUserPO(UserPO userPO) {
        if (null == userPO) {
            return null;
        }
        LoginVO loginVO = new LoginVO();
        loginVO.setUid(userPO.getUid());
        loginVO.setUsername(userPO.getUsername());
        loginVO.setPassword(userPO.getPassword());
        loginVO.setAccount(userPO.getAccount());
        loginVO.setAge(userPO.getAge());
        loginVO.setPhone(userPO.getPhone());
        loginVO.setFile(userPO.getFile());
        loginVO.setSex(userPO.getSex());
        loginVO.setAdmin(userPO.getAdmin());
        loginVO.setQianming(userPO.getQianming());
        return loginVO;
    }
}
