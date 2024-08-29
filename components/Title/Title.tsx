import React from 'react';
import {Text} from 'react-native';
import style from './style';

const Title = (props: {title: string}) => {
  return <Text style={style.title}>{props.title}</Text>;
};

export default Title;
