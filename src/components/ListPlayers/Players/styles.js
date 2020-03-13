import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

// const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  full:{
  width:'100%',
  flexDirection: 'row', 
  },
  container: {
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
  },
  

  profileContainer: {
    flexDirection: 'row',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 34,
    marginRight: metrics.padding,
  },

  profileInfo: {
    flex: 1,
  },

  name: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5,
  },

  bio: {
    fontSize: fonts.regular,
    color: colors.regular,
    marginTop: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  firstButton: {
    marginRight: 10,
  },
}
);

export default styles;
