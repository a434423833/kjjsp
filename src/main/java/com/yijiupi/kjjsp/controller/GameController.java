package com.yijiupi.kjjsp.controller;

import com.yijiupi.kjjsp.game.twoZeroFourEight.OnChange;
import com.yijiupi.kjjsp.pojo.Result;
import com.yijiupi.kjjsp.pojo.Value2048DTO;
import com.yijiupi.kjjsp.utile.ResultUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * 游戏控制层
 *
 * @author caohao 2018/3/13
 */
@RestController
@RequestMapping("/game")
public class GameController {
    private static final Logger LOGGER = LoggerFactory.getLogger(GameController.class);

    @RequestMapping(value = "/2048/initialization", method = RequestMethod.POST)
    public Result initialization() {
        OnChange onChange = new OnChange();
        return ResultUtil.success(converStr(onChange.str));
    }

    @RequestMapping(value = "/2048/getKey", method = RequestMethod.POST)
    public Result getKey(@RequestBody Value2048DTO value2048DTO) {
        OnChange onChange = new OnChange(converList(value2048DTO.getStr()));
        onChange.pressKey(value2048DTO.getKey());
        return ResultUtil.success(converStr(onChange.str));
    }

    private static List<Integer> converStr(int[][] str) {
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < str.length; i++) {
            for (int j = 0; j < str[i].length; j++) {
                list.add(str[i][j]);
            }
        }
        return list;
    }

    private static int[][] converList(List<Integer> list) {
        int[][] str = new int[4][4];
        for (int i = 0; i < list.size(); i++) {
            str[i / 4][i % 4] = list.get(i);
        }
        return str;
    }

}
