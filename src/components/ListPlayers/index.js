/* Core */
import React, { Component } from 'react';
/* Presentational */
import { View,Text } from 'react-native';
import Header from './../Header';
import Playerv from './Players';
// import Product from './Product';
// import styles from './styles';
export default class ListPlayers extends Component {
  constructor(props) {
    super(props);
    state = {
      Players: [],
    };
  }
  componentDidMount() {
    fetch("http://jcrastreamentoveicular00.com.br:3000/GetUserFull")
    .then(res=> res.json())
    .then(res =>{
      console.log(res);
      
    })
  }

  render() {
    return (
      <View>
        <Header />
       
      </View>
    );
  }
}
