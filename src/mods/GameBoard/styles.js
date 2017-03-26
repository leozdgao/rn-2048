import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 32,
    borderRadius: 6,
    padding: 15,
    backgroundColor: '#bbada0'
  },
  cell: {
    backgroundColor: 'rgba(238, 228, 218, 0.35)',
    borderRadius: 4
  },
  cellGutterRight: {
    marginRight: 15
  },
  cellGutterBottom: {
    marginBottom: 15
  },
  tile: {
    position: 'absolute'
  }
});
