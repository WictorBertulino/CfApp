import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './../Header';
import SubHeader from './../SubHeader';
import ProductList from './../ProductList';
import Tabs from './../Tabs';


import AsyncStorage from '@react-native-community/async-storage';



export default class Home extends Component {

    render() {
        return (
    <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
               <Header navigator = {this.props.navigation} />
                <ScrollView>
                    <SubHeader />
                        <ProductList />
                </ScrollView>
                <Tabs navigator = {this.props.navigation}  />
    </View>




        );
    }


}
