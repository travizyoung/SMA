import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '24pt', '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 3,
    borderRadius: 65,
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default style;
