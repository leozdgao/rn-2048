import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: 'rgba(255, 255, 255, .3)'
  },
  innerWwrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    color: '#776e65',
    fontWeight: 'bold',
    marginBottom: 20
  }
});
