package com.yijiupi.kjjsp.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * 月份list
 *
 * @author caohao 2018/1/9
 */
public class YiZhanShiJiMonthVO implements Serializable {
    private Integer month;
    private List<YiZhanDaShiJiPO> list;

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public List<YiZhanDaShiJiPO> getList() {
        return list;
    }

    public void setList(List<YiZhanDaShiJiPO> list) {
        this.list = list;
    }
}
