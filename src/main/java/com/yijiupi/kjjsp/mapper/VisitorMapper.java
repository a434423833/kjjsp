package com.yijiupi.kjjsp.mapper;


import com.yijiupi.kjjsp.pojo.VisitorPO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface VisitorMapper {

    List listByUidAndToday(@Param("uid") String uid);

    List listByUidAndYesday(@Param("uid") String uid);

    void insertVisitor(VisitorPO visitorPO);

    String getFwTime(VisitorPO visitorPO);

    void updateVisitor(VisitorPO visitorPO);
}