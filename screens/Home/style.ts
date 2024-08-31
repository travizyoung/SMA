import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#E5E7EB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 12,
    right: 10,
  },
  messageNumber: {
    color: '#fff',
    fontFamily: getFontFamily('Inter', '24pt', '600'),
    fontSize: 6,
  },

  userStoriesContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },

  userPostContainer: {
    marginHorizontal: 24,
  },
});

export default style;
