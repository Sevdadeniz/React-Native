import React, {Component } from 'react';
import {Info} from '../screenNames';
import Button from 'react-native-button';

import{
    Text,
    View,
    Image,
    TouchableHeighLight
}from 'react-native';

import HeaderComponent from "./HeaderComponent";

const backgroundColor = 'red';
export default class TezgahDurumuComponent extends Component{
    static navigationOptions = ( {navigation}) => {
        let drawerLabel = 'TezgahDurumu';
        let drawerIcon = () => (
            <Image
                source = {require ('../icons/menu2.png')}
                style= {{ width:26, height:26, tintColor:backgroundColor}}
            />

        );

        return {drawerLabel, drawerIcon};
    };
    render(){
        return( <View style={{
            flex: 1,
            flexDirection: 'column',

        }}>
            <HeaderComponent {...this.props} />

            <View style={{
                flex: 1,
                backgroundColor : backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Text style={{ fontWeight: 'bold', fontSize: 22,
                    color: 'white'
                }}>
                    This is tezgahdurumu page
                </Text>

                <TouchableHeighLight style={{
                    margin: 20,
                    width: 280,
                    height: 45,
                    backgroundColor: 'darkviolet',
                    padding: 10,
                    alignItems: 'center',
                }}
                                     onPress={() =>{
                                         const { navigate } = this.props.navigation.goBack();
                                     }}>
                    <Text style={{color: 'white', fontSize: 18}}>
                        back to home
                    </Text>

                </TouchableHeighLight>



            </View>)



        </View>)
    }
}