/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,Animated,Dimensions} from 'react-native';
import Enemy from './components/enemy';
type Props = {};
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        movePlayerVal: new Animated.Value(40),
        playerSide: 'left',
        points: 0,
        moveEnemyVal: new Animated.Value(0),
        enemyStartPosX: 0,
        enemySide: 'left',
        enemySpeed: 4200,
        gameOver: false,
    };
  }

  render() {
    return (
      <ImageBackground source={require('./image/road.jpg')} style={styles.container}>

        <View style={{
            flex:1,
            alignItems: 'center',
            marginTop: 60
        }}>

           <View style={styles.points}>
                <Text style={{fontWeight: 'bold', fontSize:40}}>{this.state.points} </Text>
           </View>
        </View>

          <Animated.Image source={require('./image/car.png')}
                          style={{
                              height: 150,
                              width: 150,
                              position: 'absolute',
                              zIndex: 1,
                              bottom:50,
                              resizeMode: 'stretch',
                              transform:[
                                  {translateX: this.state.movePlayerVal}
                              ]
                          }}>

          </Animated.Image>

        <Enemy enemyImg={require('./image/enemy2.jpg')}
        enemyStartPosX={this.state.enemyStartPosX}
               moveEnemyVal={this.state.moveEnemyVal}
        />

        <View style={styles.controls}>
            <Text style={styles.left} onPress={ () => this.movePlayerVal('left') }>{'< '}</Text>
            <Text style={styles.right} onPress={ () => this.movePlayerVal('right') }>{' >'}</Text>

        </View>

      </ImageBackground>
    );
  }

  movePlayerVal(direction){
    //Move player right
      if (direction == 'right'){
        this.setState({playerSide:'right'});
        Animated.spring(
            this.state.movePlayerVal,
            {
              toValue: Dimensions.get('window').width - 140,
                tension:120,
            }
        ).start();
      }
      else if(direction == 'left'){
          this.setState({playerSide:'left'});
          Animated.spring(
              this.state.movePlayerVal,
              {
                  toValue: 40,
                  tension:120,
              }
          ).start();
      }

  }

  componentDidMount(){
    this.animateEnemy();
  }

  animateEnemy(){
     this.state.moveEnemyVal.setValue(-100);
     var windowH = Dimensions.get('window').height;

     var r = Math.floor(Math.random() * 2) +1;


     if (r == 2){
          r = 40;
          this.setState({ enemySide: 'left'});
     }
     else{
         r = Dimensions.get('window').width -140;
         this.setState({ enemySide: 'right'});
     }
     this.setState({ enemyStartPosX : r});
     var refreshIntervalId;
     refreshIntervalId = setInterval( () => {

         if (this.state.moveEnemyVal._value > windowH -280
           && this.state.moveEnemyVal._value < windowH -180
           && this.state.playerSide == this.state.enemySide){

             clearInterval(refreshIntervalId)
             this.setState({ gameOver : true});
             this.gameOver();

         }
     }, 50 );

     setInterval( () => {
         this.setState({ enemySpeed:this.state.enemySpeed -50})
     }, 20000);

     Animated.timing(
         this.state.moveEnemyVal,
         {
             toValue:Dimensions.get('window').height,
             duration: this.state.enemySpeed,
         }
     ).start(event => {
         if(event.finished && this.state.gameOver == false) {
             clearInterval(refreshIntervalId);
             this.setState({points: ++this.state.points});
             this.animateEnemy();
         }
     });

  }
  gameOver(){
      alert('Oyunu kaybettiniz...')
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        position:'relative',
        resizeMode: 'cover',
        width: 370,
        height: 800
    },
    points :{
        width:80,
        height:80,
        backgroundColor: '#fff',
        borderRadius:100,
        alignItems:'center',
        justifyContent: 'center'
    },
    controls:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    left:{
      flex:1,
        color:'#fff',
        fontSize:60,
        fontWeight: 'bold',
        textAlign: 'right'


    },
    right:{
        flex:1,
        color:'#fff',
        margin:0,
        fontSize:60,
        fontWeight: 'bold',
        textAlign: 'left'

    }

});
