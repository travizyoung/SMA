import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {verticalScale, horizontalScale} from '../../utils/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderColor: '#EFF2F6',
  },
  user: {flexDirection: 'row', alignItems: 'center'},
  userContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '24pt', '600'),
    fontSize: horizontalScale(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '24pt', '400'),
    fontSize: horizontalScale(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostImage: {
    width: '100%',
    borderRadius: horizontalScale(10),
  },
  userPostStats: {marginLeft: horizontalScale(10), flexDirection: 'row'},
  userPostStatButton: {
    flexDirection: 'row',
  },
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default style;
