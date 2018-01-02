package com.yijiupi.kjjsp.pojo;

import java.io.Serializable;

public class HuifuGuangChangLiuYanDTO implements Serializable {
    private Integer beforid;
    private Integer index;
    private String infor;
    private Integer uid;
    private String time;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getBeforid() {
        return beforid;
    }

    public void setBeforid(Integer beforid) {
        this.beforid = beforid;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getInfor() {
        return infor;
    }

    public void setInfor(String infor) {
        this.infor = infor;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }
}
