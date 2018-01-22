package com.yijiupi.kjjsp.redis;

import java.io.Serializable;

/**
 * Created by caohao on 2018/1/18.
 */
public class RedisVO implements Serializable {
    private Integer uid;
    private Integer fid;
    private String infor;
    private String time;

    public RedisVO(String infor, String time, Integer uid, Integer fid) {
        this.infor = infor;
        this.time = time;
        this.uid = uid;
        this.fid = fid;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public String getInfor() {
        return infor;
    }

    public void setInfor(String infor) {
        this.infor = infor;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
