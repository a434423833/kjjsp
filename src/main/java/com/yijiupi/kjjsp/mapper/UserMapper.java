package com.yijiupi.kjjsp.mapper;

import com.yijiupi.kjjsp.pojo.UserPO;
import org.springframework.stereotype.Service;

@Service
public interface UserMapper {

    UserPO getUser(UserPO userPO);

    UserPO getUserByFriendName(String friendName);

    void updateUser(UserPO userPO);

    void updateUser1(UserPO userPO);

    void updategq(UserPO userPO);
}