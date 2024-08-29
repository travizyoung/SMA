import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = (props: UserPost) => {
  const {firstName, lastName, location, image, likes, comments, bookmarks} =
    props;
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <UserProfileImage profileImage={image} imageDimensions={65} />
        <View style={style.userContainer}>
          <Text style={style.userName}>
            {firstName} {lastName}
          </Text>
          {location && <Text style={style.location}>{location}</Text>}
        </View>
        <FontAwesomeIcon icon={faEllipsis} color="#79869F" size={24} />
      </View>

      <View style={style.postImage}>
        <Image source={image} style={style.userPostImage} />
      </View>

      <View style={style.userPostStats}>
        <View style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.userPostStatText}>{likes}</Text>
        </View>

        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={style.userPostStatText}>{comments}</Text>
        </View>

        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.userPostStatText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
