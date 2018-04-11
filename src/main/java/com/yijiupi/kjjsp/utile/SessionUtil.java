package com.yijiupi.kjjsp.utile;

import com.yijiupi.kjjsp.pojo.LoginVO;
import org.apache.http.protocol.HTTP;
import org.springframework.ui.ModelMap;
import org.springframework.util.Assert;

import javax.servlet.http.HttpSession;

/**
 * 有关session的各种工具类
 */
public class SessionUtil {
    /**
     * 判断是否session存在
     */
    public static boolean getSessionExist(ModelMap modelMap) {
        return modelMap.get("user") == null ? false : true;
    }

    public static String getUid(HttpSession session) {
        return session.getAttribute("user") == null ? null : ((LoginVO) session.getAttribute("user")).getUid().toString();
    }

    /**
     * 返回session,null为不存在
     *
     * @param modelMap
     * @return
     */
    public static LoginVO getSession(ModelMap modelMap) {
        return modelMap.get("user") == null ? null : (LoginVO) modelMap.get("user");
    }

    /**
     * 检查session和传入id是否相同
     *
     * @param modelMap
     * @param checkId
     * @return
     */
    public static boolean checkSession(ModelMap modelMap, int checkId) {
        LoginVO tmp = SessionUtil.getSession(modelMap);
        Assert.notNull(tmp, "session为null");
        return tmp.getUid() != checkId;
    }
}
