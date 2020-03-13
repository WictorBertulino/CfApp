/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';



class Tabs extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>

          <Icon name="users" onPress={() => { console.log(this.props.navigator.navigate('ListPlayers')) }} size={16} style={styles.mainIcon} />

        </View>
      </View>
    )
  }
}
// const Tabs = () => (
//   <View style={styles.container}>
//     <View style={styles.main}>

//       <Icon name="users" onPress = {()=>{console.log(this.props)}}  size={16} style={styles.mainIcon} />

//     </View>
//   </View>
// );

export default Tabs;
