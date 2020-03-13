import React, { Component } from 'react';
import { Text, View, StyleSheet,Image,TextInput,Button, TouchableOpacity, Alert } from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import AsyncStorage from '@react-native-community/async-storage';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       Loading: false, 
       gamertag:'',
       password:'' 
      };


  }
  SingIn = () => {
   
    //  this.state.Loading = true;
     this.setState(
       { 
        Loading: true
      });

      fetch("http://jcrastreamentoveicular00.com.br:3000/GetUser", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then(res=> res.json())
      .then(res =>{

        if (res.length) {
          AsyncStorage.setItem('dataLog', JSON.stringify(res));
          this.setState({ Loading: false });
          this.props.navigation.navigate('Home')
        }else{
          Alert.alert(
            'Atenção',
            'Usuário ou senha incorreta',
            [
              {text: 'Entendi', onPress: () => {             
                this.setState({ Loading: false })
              }
              },
            ]
          );
        }
      })
    // setTimeout(()=>{
    

    // },2000)
    }
  render() {
    return (
      <View style={style.container}>
       <Image
        source ={require('../img/log.jpeg')}
        style= {style.logo}
       />
       <TextInput style={style.input} onChangeText={(text) => this.setState({gamertag: text})} placeholder="Digite sua Gamertag"/>
       <TextInput
        style={style.input}
        onChangeText={(text) => this.setState({password: text})}
        placeholder="Digite sua senha"
        secureTextEntry={true}
         />
       <TouchableOpacity
       style= {style.botao}
       onPress = {() => { this.SingIn()}}
       >

        <Text
               style= {style.botaoText}
        >
          Entrar
          
        </Text>
        <OrientationLoadingOverlay
          visible={this.state.Loading}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          message="Aguarde..."
          />
       </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#2c3e50"
  },
  logo:{
    width:150,
    height:150,
    borderRadius:100
  },
  input:{
    marginTop : 10,
    padding:10,
    width: 300,
    backgroundColor:'#fff',
    fontSize:16,
    fontWeight:'bold',
    borderRadius:3
  },
  botao:{
    width: 300,
    height:42,
    backgroundColor:'#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 10,
  },
  botaoText:{
    fontSize:16,
    fontWeight:'bold',
    color:'#fff'
  }
});

