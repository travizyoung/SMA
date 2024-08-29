import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const UserProfileImage = ({
  profileImage,
  imageDimensions,
}: {
  profileImage: any;
  imageDimensions: number;
}) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={profileImage}
        style={{
          width: imageDimensions,
          height: imageDimensions,
          borderRadius: imageDimensions,
        }}
      />
    </View>
  );
};

export default UserProfileImage;
