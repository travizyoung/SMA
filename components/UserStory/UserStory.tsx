import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = ({
  firstName,
  profileImage,
}: {
  firstName: string;
  profileImage: any;
}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
