
package com.yijiupi.kjjsp.filter;

import com.yijiupi.kjjsp.pojo.LoginVO;
import com.yijiupi.kjjsp.utile.GetObjectUtil;
import com.yijiupi.kjjsp.utile.IpUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 主要过滤没有登录返回主页以及信息没有完善
 */
@WebFilter(filterName = "overAllFilter", urlPatterns = {"/zhuti/zhuye.jsp", "/zhuti/information.jsp", "/zhuti/friend.jsp"})
public class OverAllFilter implements Filter {
    private static final Logger LOGGER = LoggerFactory.getLogger(OverAllFilter.class);

    @Override
    public void destroy() {
        System.out.println("过滤器销毁");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        String ip = IpUtil.getIpFromRequest((HttpServletRequest) request);
        LOGGER.error(ip + "进入到全局过滤器");
        String url = ((HttpServletRequest) request).getRequestURI();
        HttpSession session = ((HttpServletRequest) request).getSession();
        Object object = session.getAttribute("user");
        if (object == null) {
            LOGGER.error(ip + " 没有登录发起请求");
            ((HttpServletResponse) response).sendRedirect("guangchang.jsp");
            return;
        }
        LoginVO loginVO = ((LoginVO) object);
        if (loginVO.getSex() == null && !url.endsWith("information.jsp")) {
            request.setAttribute("msg", "首先请完善下列信息");
            request.getRequestDispatcher("information.jsp").forward(request, response);
        }
        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

}


