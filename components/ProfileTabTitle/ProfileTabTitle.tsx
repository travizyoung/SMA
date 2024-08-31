import React from 'react';
import {Text} from 'react-native';
import style from './style';

const ProfileTabTitle = ({
  title,
  focused,
}: {
  title: string;
  focused: boolean;
}) => {
  return (
    <Text style={[style.title, focused && style.titleFocused]}>{title}</Text>
  );
};

export default ProfileTabTitle;
