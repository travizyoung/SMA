import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: 'blue'}}>Go Back</Text>
      </TouchableOpacity>
      <Text>Welcome to Profile Page</Text>
    </SafeAreaView>
  );
};

export default Profile;
