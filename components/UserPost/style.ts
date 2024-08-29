import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#EFF2F6',
  },
  user: {flexDirection: 'row', alignItems: 'center'},
  userContainer: {flex: 1, justifyContent: 'center', marginLeft: 10},
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '24pt', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '24pt', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default style;
