package com.yijiupi.kjjsp.redis;

import java.io.Serializable;

public class RedisVO implements Serializable {
    private Integer uid;
    private String userFile;
    private String infor;
    private String time;

    public RedisVO(String infor, String time, Integer uid, String userFile) {
        this.infor = infor;
        this.time = time;
        this.uid = uid;
        this.userFile = userFile;
        this.infor = infor;
    }

    public Integer getUid() {
        return this.uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getUserFile() {
        return this.userFile;
    }

    public void setUserFile(String userFile) {
        this.userFile = userFile;
    }

    public String getInfor() {
        return this.infor;
    }

    public void setInfor(String infor) {
        this.infor = infor;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
