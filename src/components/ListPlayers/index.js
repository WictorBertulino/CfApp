/* Core */
import React, { Component } from 'react';
/* Presentational */
import { View,Text } from 'react-native';
import Header from './../Header';
import Playerv from './Players';
// import Product from './Product';
// import styles from './styles';
export default class ListPlayers extends Component {
  state = {
    Players: [
      {
        id: 1,
        Gamertag:'João Wictor "Bertzk1" Oliveira',
        Kd:'1.1',
        Position:"Fragger / Intermediário",
         img:'https://scontent.fcgb2-1.fna.fbcdn.net/v/t1.0-9/s960x960/67084461_2324393221007444_6311226859744919552_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=tWZUT1slEiQAX8m9nPm&_nc_ht=scontent.fcgb2-1.fna&_nc_tp=7&oh=36d77f098b5ea51fafa3cffb6ee31553&oe=5E8E3F69',
        // PartidasJogadas:'5',
        // TotalMortes:'215',
        // TotalBaixas:'189',
      },
      {
        id: 2,
        Gamertag:'Matheus "Fastcatum" Assis',
        Kd:'1.2',
        Position:"Suporte",
         img:'https://scontent.fcgb2-1.fna.fbcdn.net/v/t1.0-9/s960x960/89042727_2931349686922172_8537558621171482624_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=qh_EN6jaa2IAX8Q4glS&_nc_ht=scontent.fcgb2-1.fna&_nc_tp=7&oh=3dc224cf31432a12bb22ebc3942abf5f&oe=5E91A0D3',
        // PartidasJogadas:'5',
        // TotalMortes:'215',
        // TotalBaixas:'189',
      },
      {
        id: 3,
        Gamertag:'Asafe "Asafezk" Santiago',
        Kd:'1.3',
        Position:"Intermediário",
         img:'https://scontent.fcgb2-1.fna.fbcdn.net/v/t1.0-9/62465706_627187227747357_1266327659336433664_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=fVHLotm-EI4AX8iwMAK&_nc_ht=scontent.fcgb2-1.fna&oh=f4624566db0982d47c6227f5cc50f971&oe=5E91957F',
        // PartidasJogadas:'5',
        // TotalMortes:'215',
        // TotalBaixas:'189',
      },
    ],
  };
  render() {
    return (
      <View>
        <Header />
         {this.state.Players.map(pl => <Playerv key={pl.id} pl={pl}/>)} 
      </View>
    );
  }
}
