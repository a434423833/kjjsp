package com.yijiupi.kjjsp.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerExceptionResolverComposite;

/**
 * @author CaoHao
 * @Description:全局异常处理类
 * @2017年11月8日 上午10:18:55
 * 不起作用 因为是ajax请求
 */
@ControllerAdvice
public class ExceptionHandle extends HandlerExceptionResolverComposite {

    private static final String ERROR_VIEW = "zhuti/error.jsp";
    private static final String MESSAGE = "服务器出了点错误，请重新尝试";
    private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionHandle.class);

    @ExceptionHandler(IllegalArgumentException.class)
    public ModelAndView IllegalArgumentException(Exception e) {
        LOGGER.error("异常拦截：" + e.getMessage(), e);
        ModelAndView mv = new ModelAndView();
        mv.addObject("msg", e.getMessage());
        mv.setViewName(ERROR_VIEW);
        return mv;
    }

    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(Exception e) {
        LOGGER.error("异常拦截：" + e.getMessage(), e);
        ModelAndView mv = new ModelAndView();
        mv.addObject("msg", MESSAGE);
        mv.setViewName(ERROR_VIEW);
        return mv;
    }

}
