package com.yijiupi.kjjsp.pojo;

import java.io.Serializable;
import java.util.List;

/**
 * Created by caohao on 2018-04-20.
 */
public class Value2048DTO implements Serializable {
    /**
     * 键盘输入值
     */
    private Integer key;
    /**
     * 属性值
     */
    private List<Integer> str;

    /**
     * 获取 键盘输入值
     */
    public Integer getKey() {
        return this.key;
    }

    /**
     * 设置 键盘输入值
     */
    public void setKey(Integer key) {
        this.key = key;
    }

    /**
     * 获取 属性值
     */
    public List<Integer> getStr() {
        return this.str;
    }

    /**
     * 设置 属性值
     */
    public void setStr(List<Integer> str) {
        this.str = str;
    }
}
