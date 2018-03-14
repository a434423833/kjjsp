package com.yijiupi.kjjsp.controller;

import com.yijiupi.kjjsp.pojo.Result;
import com.yijiupi.kjjsp.redis.RedisVO;
import com.yijiupi.kjjsp.redis.UserRedisDTO;
import com.yijiupi.kjjsp.service.RedisService;
import com.yijiupi.kjjsp.utile.GetObjectUtil;
import com.yijiupi.kjjsp.utile.ResultUtil;
import com.yijiupi.kjjsp.utile.SessionUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.ArrayList;
import java.util.List;

/**
 * redis controller
 *
 * @author caohao 2018/3/14
 */
@RestController
@RequestMapping("/")
@SessionAttributes(value = {"v_code", "user", "list1", "list2"})
public class RedisController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private RedisService redisService;

    @RequestMapping(value = "/setInfor", method = RequestMethod.POST)
    public Result set(Integer uid, Integer fid, String infor, ModelMap modelMap) {
        if (SessionUtil.checkSession(modelMap, uid)) {
            LOGGER.error(uid + "非法参数");
            return ResultUtil.error(200, "非法参数", uid);
        }
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
        return ResultUtil.success();
    }

    @RequestMapping(value = "/getInfor", method = RequestMethod.POST)
    public Result get(Integer uid, Integer fid, ModelMap modelMap) {
        if (SessionUtil.checkSession(modelMap, uid)) {
            LOGGER.error(uid + "非法参数");
            return ResultUtil.error(200, "非法参数", uid);
        }
        String key = fid.toString() + uid.toString();
        if (uid < fid) {
            key = uid.toString() + fid.toString();
        }
        UserRedisDTO userRedisDTO = redisService.get(key);
        return ResultUtil.success(userRedisDTO);
    }

}