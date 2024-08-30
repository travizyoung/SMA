import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '24pt', '500'),
    fontSize: scaleFontSize(24),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default style;
