package com.yijiupi.kjjsp.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * 年份list
 *
 * @author caohao 2018/1/9
 */
public class YiZhanShiJiYearVO implements Serializable {
    private Integer year;
    private List<YiZhanShiJiMonthVO> listYear;

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public List<YiZhanShiJiMonthVO> getListYear() {
        return listYear;
    }

    public void setListYear(List<YiZhanShiJiMonthVO> listYear) {
        this.listYear = listYear;
    }
}
