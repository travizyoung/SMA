import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';

const UserStory = ({
  firstName,
  profileImage,
}: {
  firstName: string;
  profileImage: object;
}) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={profileImage} />
      </View>
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
