import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#ffffff',
  },

  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: verticalScale(11),
    paddingVertical: verticalScale(10),
  },

  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
  },
});

export default style;
