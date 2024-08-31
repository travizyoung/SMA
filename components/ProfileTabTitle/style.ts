import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../utils/scaling';

const style = StyleSheet.create({
  title: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '24pt', '400'),
    fontSize: scaleFontSize(14),
    paddingVertical: horizontalScale(10),
  },

  titleFocused: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '24pt', '500'),
  },
});

export default style;
