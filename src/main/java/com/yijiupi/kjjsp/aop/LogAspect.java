package com.yijiupi.kjjsp.aop;

import com.yijiupi.kjjsp.controller.UserController;
import com.yijiupi.kjjsp.utile.IpUtil;
import com.yijiupi.kjjsp.utile.SessionUtil;
import org.apache.http.HttpRequest;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Method;

/**
 * 日志切面类
 *
 * @author caohao 2018-03-29
 */
@Aspect
@Component
public class LogAspect {
    private static final Logger LOGGER = LoggerFactory.getLogger(LogAspect.class);

    /**
     * @Pointcut放在方法头上定义一个可被别的方法引用的切入点表达式。
     */
    @Pointcut("@annotation(com.yijiupi.kjjsp.aop.Log)")
    public void annotationPointCut() {
    }

    @Before("annotationPointCut()")
    public void before(JoinPoint joinPoint) {
        Signature signature = joinPoint.getSignature();
        //如果要获取Session信息的话，可以这样写：
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = (HttpServletRequest) requestAttributes.resolveReference(RequestAttributes.REFERENCE_REQUEST);
        HttpSession session = (HttpSession) requestAttributes.resolveReference(RequestAttributes.REFERENCE_SESSION);
        //代理的是哪一个方法
        LOGGER.info("进入到方法:{},uid:{},ip:{}", signature.getName(), SessionUtil.getUid(session), IpUtil.getIpFromRequest(request));
    }
}
