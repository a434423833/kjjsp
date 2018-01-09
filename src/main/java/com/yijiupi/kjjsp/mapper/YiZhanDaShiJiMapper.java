package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.YiZhanDaShiJiPO;

import java.util.List;

/**
 * 驿站大事记DB层
 * 
 * @author caohao 2018/1/9
 */
public interface YiZhanDaShiJiMapper {

    List<YiZhanDaShiJiPO> listYiZhanShiJi();

    Integer getMaxYear();

    Integer getMinYear();

    void addYiZhanDaShiJi(YiZhanDaShiJiPO yiZhanDaShiJiPO);
}