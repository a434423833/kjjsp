package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.DianZanPO;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface DianZanMapper {

    int addDianZan(@Param("tid") String tid, @Param("username") String username);

    List ListGetDianZan(@Param("tid") String tid);

    int delectDianZan(@Param("tid") String tid, @Param("username") String username);
}