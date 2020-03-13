/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Button from './../../Button';
import styles from './styles';

const PlayerF = ({ pl: {Gamertag,Kd,Position,img,id} }) => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
    <Image
        style={styles.avatar}
        source={{ uri: img }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{Gamertag} </Text>
<Text style={styles.bio}><Icon name="ios-contact" size={30}  />  Posição : {Position}</Text>
        <Text style={styles.name}><Icon name="logo-xbox" size={30}  /> Kills/Deaths: {Kd} </Text>


        <Text><Icon name="ios-barcode" size={30}  /> Partidas Disputadas: 80 </Text>
        <Text><Icon name="ios-trophy" size={30}  /> Ranking: {id}º </Text>

        <View style={styles.buttonContainer}>
        </View>
      </View>
    </View>
  </View>
);

export default PlayerF;
