package com.yijiupi.kjjsp.mapper;

import java.util.List;

import com.yijiupi.kjjsp.pojo.TalkPO;
import org.apache.ibatis.annotations.Param;

public interface TalkMapper {

    List listUserTalk(String id);

    void insertInfor(TalkPO talkPO);
}