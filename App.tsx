import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: '#000',
          fontSize: 50,
          fontFamily: getFontFamily('Inter', '24pt', '100'),
        }}>
        Hello World
      </Text>
    </SafeAreaView>
  );
};

export default App;
