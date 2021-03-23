import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';
import { THEME_COLOUR } from '../../lib/constants';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  trackImage: {
    height: 200,
    width: '100%',
    marginRight: 16
  },
  trackName: {
    color: THEME_COLOUR,
    marginTop: 16,
    fontWeight: '500'
  },
  artistName: {
    color: THEME_COLOUR,
    marginTop: 16,
    fontWeight: '700'
  },
  htmlContainer: {
    marginTop: 4,
  },
  htmlContainerFont: {
    color: THEME_COLOUR,
  }
});

export default styles;
