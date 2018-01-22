package com.yijiupi.kjjsp.controller;

import com.yijiupi.kjjsp.pojo.Result;
import com.yijiupi.kjjsp.redis.RedisVO;
import com.yijiupi.kjjsp.redis.UserRedisDTO;
import com.yijiupi.kjjsp.service.RedisService;
import com.yijiupi.kjjsp.utile.GetObjectUtil;
import com.yijiupi.kjjsp.utile.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by caohao on 2018/1/18.
 */
@RestController
@RequestMapping("/")
public class RedisController {
    @Autowired
    private RedisService redisService;

    @RequestMapping(value = "/setInfor", method = RequestMethod.POST)
    public void set(Integer uid, Integer fid, String infor) {
        String key = fid.toString() + uid.toString();
        if (uid < fid) {
            key = uid.toString() + fid.toString();
        }
        UserRedisDTO userRedisDTO = redisService.get(key);
        if (userRedisDTO == null) {
            userRedisDTO = new UserRedisDTO();
            List<RedisVO> list = new ArrayList<>();
            list.add(new RedisVO(infor, GetObjectUtil.getTime(), uid, fid));
            userRedisDTO.setList(list);
            redisService.set(key, userRedisDTO);
        } else {
            userRedisDTO.getList().add(new RedisVO(infor, GetObjectUtil.getTime(), uid, fid));
            redisService.set(key, userRedisDTO);
        }
    }

    @RequestMapping(value = "/getInfor", method = RequestMethod.POST)
    public Result get(Integer uid, Integer fid) {
        String key = fid.toString() + uid.toString();
        if (uid < fid) {
            key = uid.toString() + fid.toString();
        }
        UserRedisDTO userRedisDTO = redisService.get(key);
        return ResultUtil.success(userRedisDTO);
    }

}