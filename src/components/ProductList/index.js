/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        Equipe1: './../../img/log.png',
        Equipe2: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4379518/600/400/m2/fpnw/wm0/samurai-.jpg?1525078171&s=020172f51048629eac41c7095278da24',
        rounds: '3',
        nomeEquipe1:"Competitive Friends",
        nomeEquipe2:"Samurai Esports",
      },
      {
        id: 2,
        Equipe1: './../../img/log.png',
        Equipe2: 'https://liquipedia.net/commons/images/e/e5/BRK_e-Sports.png',
        rounds: '3',
        nomeEquipe1:"Competitive Friends",
        nomeEquipe2:"BRK ",
      },
      {
        id: 3,
        Equipe1: './../../img/log.png',
        Equipe2: 'https://gamepedia.cursecdn.com/gears_esports_gamepedia_en/thumb/5/5f/Elevatelogo_square.png/220px-Elevatelogo_square.png?version=11ad03e7e2763a16bb96195844c0403f',
        rounds: '3',
        nomeEquipe1:"Competitive Friends",
        nomeEquipe2:"Elevate",
      },
      {
        id: 4,
        Equipe1: './../../img/log.png',
        Equipe2: 'https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f4/Team_Liquidlogo_square.png',
        rounds: '3',
        nomeEquipe1:"Competitive Friends",
        nomeEquipe2:"Team Liquid",
      },
         
    
    ],
  };

  render() {
    return (
      <View>
         {this.state.products.map(product => <Product key={product.id} product={product}/>)} 
      </View>
    );
  }
}
