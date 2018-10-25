
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ImageBackground,
    Animated
    } from 'react-native';

export default class enemy extends  Component{
    render() {
        return (
            <Animated.Image source ={this.props.enemyImg}
                            style={{
                               height: 100,
                                width: 100,
                                position: 'absolute',
                                resizeMode: 'stretch',
                                left:this.props.enemyStartPosX,
                                transform:[
                                    { translateY: this.props.moveEnemyVal},
                                ]

                            }}>
            </Animated.Image>
        );
    }
}