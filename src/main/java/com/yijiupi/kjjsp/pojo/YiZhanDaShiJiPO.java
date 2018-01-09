package com.yijiupi.kjjsp.pojo;

import java.io.Serializable;

/**
 * @author caohao 2018/1/9
 */
public class YiZhanDaShiJiPO implements Serializable {

    private String infor;
    private Integer year;
    private Integer month;
    private Integer day;

    public String getInfor() {
        return infor;
    }

    public void setInfor(String infor) {
        this.infor = infor;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }
}
