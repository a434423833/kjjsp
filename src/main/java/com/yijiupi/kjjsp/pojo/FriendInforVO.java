package com.yijiupi.kjjsp.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * 获得会员信息以及在线会员
 *
 * @author caohao 2018/1/11
 */
public class FriendInforVO implements Serializable {
    private List<LoginVO> loginUserList;
    private List<LoginVO> adminUserList;
    private List<LoginVO> userList;
    private List<LoginVO> noFileUserList;

    public List<LoginVO> getUserList() {
        return userList;
    }

    public void setUserList(List<LoginVO> userList) {
        this.userList = userList;
    }

    public List<LoginVO> getLoginUserList() {
        return loginUserList;
    }

    public void setLoginUserList(List<LoginVO> loginUserList) {
        this.loginUserList = loginUserList;
    }

    public List<LoginVO> getAdminUserList() {
        return adminUserList;
    }

    public void setAdminUserList(List<LoginVO> adminUserList) {
        this.adminUserList = adminUserList;
    }

    public List<LoginVO> getNoFileUserList() {
        return noFileUserList;
    }

    public void setNoFileUserList(List<LoginVO> noFileUserList) {
        this.noFileUserList = noFileUserList;
    }

}
