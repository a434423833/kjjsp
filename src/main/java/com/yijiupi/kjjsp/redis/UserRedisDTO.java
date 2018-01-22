package com.yijiupi.kjjsp.redis;

import java.io.Serializable;
import java.util.List;

/**
 * @author caohao 2018/1/18
 */
public class UserRedisDTO implements Serializable {

    private static final long serialVersionUId = 1L;
    private List<RedisVO> list;

    public List<RedisVO> getList() {
        return list;
    }

    public void setList(List<RedisVO> list) {
        this.list = list;
    }

}
