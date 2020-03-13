import React, { Component } from 'react';
import { Text, View, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import SubHeader from '../SubHeader';
import ProductList from '../ProductList';
import Tabs from '../Tabs';
export default class Home extends Component {




    render() {
        return (

    
                <View style={styles.container} >
                <Icon name="ios-arrow-back" onPress={() => { this.props.navigator.navigate('Login')}} size={30} style={styles.icon} />
                <Text style={styles.title}>Competitive Friends</Text>
                <Icon name="ios-person" size={30} style={styles.icon} />
                </View>
            




        );
    }


}
