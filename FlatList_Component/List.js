import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Sevda Deniz',
            },
            {
                id: 1,
                name: 'dsjsbfdha dhakljhf',
            },
            {
                id: 2,
                name: 'Radahdgfj jhdafa',
            },
            {
                id: 3,
                name: 'dkjakjdak ahdfshgs',
            }
        ]
    };
    alertItemName = (item) => {
        alert(item.name)
    };
    render() {

        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.alertItemName(item)}>
                            <Text style = {styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List;

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
});