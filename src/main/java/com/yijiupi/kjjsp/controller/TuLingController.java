package com.yijiupi.kjjsp.controller;

import com.yijiupi.kjjsp.pojo.LoginVO;
import com.yijiupi.kjjsp.pojo.Result;
import com.yijiupi.kjjsp.utile.ConstantsUtil;
import com.yijiupi.kjjsp.utile.ResultUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

/**
 * 图灵机器人
 *
 * @author caohao 2018/3/13
 */
@RestController
@RequestMapping("/")
public class TuLingController {
    private static final Logger LOGGER = LoggerFactory.getLogger(TuLingController.class);

    @RequestMapping(value = "/sendTuLing", method = RequestMethod.POST)
    public String sendTuLing(String content) {
        return TuLingController.connectTuLing(content);
    }

    private static String connectTuLing(String content) {
        String APIKEY = "9533aa75678543c18173f27313b9f090";
        StringBuffer sb = new StringBuffer();
        try {
            //问题
            String INFO = URLEncoder.encode(content, "utf-8");
            String getURL = "http://www.tuling123.com/openapi/api?key=" + APIKEY + "&info=" + INFO;
            URL getUrl = new URL(getURL);
            HttpURLConnection connection = (HttpURLConnection) getUrl.openConnection();
            connection.connect();
            // 取得输入流，并使用Reader读取
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
            String line = "";
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            reader.close();
            // 断开连接
            connection.disconnect();
        } catch (UnsupportedEncodingException e) {
            LOGGER.error("图灵机器人连接出错");
            sb.append("{\"code\":100000,\"text\":\"小沫出问题了\"}");
        } catch (IOException e) {
            LOGGER.error("图灵机器人连接出错");
            sb.append("{\"code\":100000,\"text\":\"小沫出问题了\"}");
        }
        return sb.toString();
    }

}
