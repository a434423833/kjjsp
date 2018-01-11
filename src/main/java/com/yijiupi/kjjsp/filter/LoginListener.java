package com.yijiupi.kjjsp.filter;

import com.yijiupi.kjjsp.controller.UserController;
import com.yijiupi.kjjsp.pojo.LoginVO;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.List;

/**
 * session监听
 *
 * @author caohao 2018/1/11
 */
public class LoginListener implements HttpSessionListener {
    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {

    }

    /**
     * session销毁时执行
     */
    @Override
    public void sessionDestroyed(HttpSessionEvent event) {
        LoginVO loginVO = (LoginVO) event.getSession().getAttribute("user");
        List<LoginVO> loginList = UserController.LOGINACCOUNTS;
        //session销毁时 从list中remove登录状态
        for (int i = 0; i < loginList.size(); i++) {
            if (loginVO.getUid() == loginList.get(i).getUid()) {
                loginList.remove(i);
            }
        }
    }
}
