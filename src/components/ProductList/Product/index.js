/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Button from './../../Button';
import styles from './styles';

const Product = ({ product: { Equipe1, Equipe2, rounds,nome,nomeEquipe1,nomeEquipe2 } }) => (
  <View style={styles.full}>
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={require('../../../img/log.jpeg')} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{nomeEquipe1}</Text>
      {/* <Text style={styles.description}>{description}</Text> */}
      <Text style={styles.price}>{rounds}</Text>
      <Button>Ver Escalação</Button>
    </View>
   
    </View>
    <View  style={styles.VS}>

      <Icon2 name="times"  />

    </View>
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: Equipe2 }} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{nomeEquipe2}</Text>
      {/* <Text style={styles.description}>{description}</Text> */}
      <Text style={styles.price}>{rounds}</Text>
      <Button>Ver Escalação</Button>
    </View>
    </View>
   
  </View>
);

export default Product;
