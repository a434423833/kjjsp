package com.yijiupi.kjjsp.filter;

import com.yijiupi.kjjsp.pojo.LoginVO;
import com.yijiupi.kjjsp.utile.IpUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 拦截器 控制没有登录就发送请求的人
 */
public class UserInterceptor implements HandlerInterceptor {
    private static final Logger LOGGER = LoggerFactory.getLogger(OverAllFilter.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {

        //在请求处理之前进行调用,（Controller)方法调用之前, 只有返回true才会继续向下执行，返回false取消当前请求
        Object obj = request.getSession().getAttribute("user");
        if (obj != null) {
            return true;
        }
        String url = request.getRequestURI();
        LOGGER.error(IpUtil.getIpFromRequest(request) + "没有登录就访问资源!!!!!!!存在恶意攻击");
        LOGGER.error("请求url：" + url);
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        //请求处理之后进行调用，但是在视图被渲染之前（Controller方法调用之后）");
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
        //在整个请求结束之后被调用，也就是在DispatcherServlet 渲染了对应的视图之后执行（主要是用于进行资源清理工作）
    }
}
