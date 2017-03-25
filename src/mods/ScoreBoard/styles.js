import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
    borderRadius: 4,
    backgroundColor: '#bbada0',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#eee4da'
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});
