package com.yijiupi.kjjsp.exception;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

/**
 * 错误页面重写
 *
 * @author caohao 2018/1/5
 */
@Configuration
public class ErrorPage {
    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {
        return new EmbeddedServletContainerCustomizer() {
            @Override
            public void customize(ConfigurableEmbeddedServletContainer container) {
                container.addErrorPages(new org.springframework.boot.web.servlet.ErrorPage(HttpStatus.BAD_REQUEST, "/400"));
                container.addErrorPages(new org.springframework.boot.web.servlet.ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/500"));
                container.addErrorPages(new org.springframework.boot.web.servlet.ErrorPage(HttpStatus.NOT_FOUND, "/zhuti/error_404.jsp"));
            }
        };
    }

}
