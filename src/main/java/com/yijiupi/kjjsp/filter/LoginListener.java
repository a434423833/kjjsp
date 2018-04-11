package com.yijiupi.kjjsp.filter;

import com.yijiupi.kjjsp.controller.UserController;
import com.yijiupi.kjjsp.pojo.LoginVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.List;

/**
 * session监听
 *
 * @author caohao 2018/1/11
 */

/*
启动类配置@ServletComponentScan不然无法扫描到
 */
@WebListener
public class LoginListener implements HttpSessionListener {

    private static final Logger LOGGER = LoggerFactory.getLogger(OverAllFilter.class);

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {

    }

    /**
     * session销毁时执行
     */
    @Override
    public void sessionDestroyed(HttpSessionEvent event) {
        Object obj = event.getSession().getAttribute("user");
        if (obj != null) {
            LoginVO loginVO = (LoginVO) obj;
            List<LoginVO> loginList = UserController.LOGIN_ACCOUNTS;
            //session销毁时 从list中remove登录状态
            for (int i = 0; i < loginList.size(); i++) {
                if (loginVO.getUid() .equals( loginList.get(i).getUid())) {
                    LOGGER.error(loginVO.getAccount() + "的session销毁");
                    LOGGER.info(loginVO.getAccount() + "的session销毁");
                    loginList.remove(i);
                }
            }
        }
    }
}
