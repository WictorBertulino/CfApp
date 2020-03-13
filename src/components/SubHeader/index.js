/* Core */
import React from 'react';

/* Presentational */
import { View, Text, Image, Alert } from 'react-native';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';



const SubHeader =  async (data) => (
   


  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{ uri:data[0].link_foto}}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{data[0].nome} "{data[0].gamertag}" {data[0].sobrenome}  </Text>
        <Text style={styles.bio}><Icon name="ios-contact" size={30}  />  Posição : {data[0].posicao}</Text>
        <Text style={styles.name}><Icon name="logo-xbox" size={30}  /> Kills/Deaths: 1.1 </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}> <Icon size={18} name="ios-information-circle"/>  Ver Perfil</Button>
        </View>
      </View>
    </View>
  </View>
);

export default SubHeader;
