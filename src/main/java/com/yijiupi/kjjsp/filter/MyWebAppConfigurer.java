package com.yijiupi.kjjsp.filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 拦截器配置
 */
@Configuration
public class MyWebAppConfigurer extends WebMvcConfigurerAdapter {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 多个拦截器组成一个拦截器链
        // addPathPatterns 用于添加拦截规则
        // excludePathPatterns 用户排除拦截
        InterceptorRegistration ir = registry.addInterceptor(new UserInterceptor());
        ir.excludePathPatterns("/getGuangChangLiuYanList");
        ir.excludePathPatterns("/imgPathActionDownLoad");
        ir.excludePathPatterns("/getCode");
        ir.excludePathPatterns("/error");
        ir.excludePathPatterns("/userLogin");
        ir.excludePathPatterns("/exit");
        ir.excludePathPatterns("/getYiZhanShiJi");
        ir.excludePathPatterns("/");
        ir.addPathPatterns("/*");
        //   registry.addInterceptor(new UserInterceptor()).addPathPatterns("/*");//  registry.addInterceptor(new UserInterceptor()).excludePathPatterns("/getGuangChangLiuYanList");
        //   registry.addInterceptor(new UserInterceptor()).excludePathPatterns("/getCode");
    }

}
