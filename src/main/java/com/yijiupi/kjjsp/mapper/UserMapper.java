package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.UserPO;
import org.springframework.stereotype.Service;

@Service
public interface UserMapper {

    UserPO getUser(UserPO userPO);

    UserPO getUserByFriendName(String friendName);
}