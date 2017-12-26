
package com.yijiupi.kjjsp.filter;

import com.yijiupi.kjjsp.service.UserServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "firstFilter", urlPatterns = "/zhuye.jsp")
public class FirsetFilter implements Filter {
    private static final Logger LOGGER = LoggerFactory.getLogger(FirsetFilter.class);
    @Autowired
    UserServer userServer;

    @Override
    public void destroy() {
        System.out.println("过滤器销毁");
    }


    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        LOGGER.info("进入到过滤器");
        String fw_id = request.getParameter("fw_id");
        if (fw_id == null) {
            chain.doFilter(request, response);
            return;
        }
        String fw_name = request.getParameter("fw_name");
        Object object = (((HttpServletRequest) request).getSession()).getAttribute("user");
        userServer.addVisitor(object, fw_id, fw_name);
        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }


}


