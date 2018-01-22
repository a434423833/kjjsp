package com.yijiupi.kjjsp.service;

import com.yijiupi.kjjsp.redis.UserRedisDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class RedisService {
    @Autowired
    private StringRedisTemplate stringRedisTemplate;
    @Autowired
    private RedisTemplate<String, UserRedisDTO> redisTemplate;

    public void set(String key, UserRedisDTO user) {
        redisTemplate.opsForValue().set(key, user);
    }

    public UserRedisDTO get(String key) {
        return redisTemplate.boundValueOps(key).get();
    }

}