import React,{ Component } from 'react';
import{
    Text,
    View,
    Image,
    TouchableHeighLigh
}from 'react-native';

function require(s) {
    return undefined;
}

export default class HeaderComponent extends Component{
    render(){
        return (<View style ={{
            height: 98,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHeighLigh style={{ marginLeft: 10, marginTop: 20}}
             onPress={()=> {
                 const {navigate } = this.props.navigation;
                 navigate('DrawerOpen');
            }}>
            <Image
              style ={{ width:32, height:32 }}
              source = {require('../icons/menu2.png')}
            />
            </TouchableHeighLigh>
        </View> );
    }
}