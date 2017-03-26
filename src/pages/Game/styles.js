import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#faf8ef',
    // for statusbar
    paddingTop: 20,
    paddingHorizontal: 20
  },
  instruments: {
    flexDirection: 'row',
    marginTop: 12
  },
  instrumentsText: {
    flex: 1,
    color: '#776e65'
  }
});
