/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    TextInput,
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import bgImage from './images/bg.jpg';
import logo from './images/logo.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH}=Dimensions.get('window')
export default class App extends Component {
    constructor(){
        super()
        this.state = {
            showPass : true,
            press: false
        }
    }

    showPass = () => {
        if(this.state.press == false){
            this.setState({showPass : false, press:true })
        }else{
            this.setState({showPass : true, press:false })
        }
    }



    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'envelope-open'} size={26} color={'black'} style={styles.inputIcon}/>
                    <TextInput
                        style={styles.input}
                        placeholder={'E-mail'}
                        placeholderTextColor={'#4f4f4f'}
                    />

                </View>


                <View style={styles.inputContainer}>
                    <Icon name={'lock'} size={26} color={'black'} style={styles.inputIcon}/>
                    <TextInput
                        style={styles.input}
                        placeholder={'Şifre'}

                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'#4f4f4f'}
                    />
                    <TouchableOpacity style={styles.btnEye} onPress = {this.showPass.bind(this)}>


                        <Icon name={this.state.press == false ?'eye' : 'eye-slash'}
                              size={26} color={'black'}/>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text}>Giriş </Text>
                </TouchableOpacity>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoContainer:{
        alignItems:'center',
        marginBottom: 50

    },
    logo:{
        width:120,
        height:120,
    },
    inputContainer:{
        marginTop:10,
        zIndex: -10
    },
    input:{
        width: WIDTH -55,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft: 45,
        backgroundColor:'#cfcfcf',
        color:'black',
        marginHorizontal:25
    },
    inputIcon:{
        position: 'absolute',
        top: 8,
        left: 37,
        zIndex: 5
    },
    btnEye:{
        position: 'absolute',
        top: 8,
        right: 37

    },
    btnLogin: {
        width: WIDTH -55,
        height:45,
        borderRadius: 25,
        backgroundColor: '#363636',
        justifyContent: 'center',
        marginTop: 20
    },
    text:{
        color:"white",
        fontSize:16,
        textAlign: 'center'
    },


});
