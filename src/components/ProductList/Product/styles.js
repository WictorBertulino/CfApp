import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

// const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  full:{
  width:'100%',
  flex: 1,
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  marginBottom: 10 ,
 
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    width: '45%',
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    
  },
  VS:{
    marginTop:'20%'
  },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius:300

  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },

  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
  },

  price: {
    textAlign: 'center',
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5,
  },
});

export default styles;
