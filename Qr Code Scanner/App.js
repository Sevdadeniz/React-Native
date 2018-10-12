import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

import ImagePıcker from 'react-native-image-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';

const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle:'Fotoğraf Çek',
    chooseFromLibraryButtonTitle: 'Dosyalara Bak',
    cancelButtonTitle: 'İptal',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook'},
        { name: 'tt', title: 'Choose Photo from Twitter'},
    ],
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
};

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            modalVisible:false,
        }
    }

    btnClick() {
        ImagePıcker.showImagePicker(options, (response) => {
            console.log(' Response = ', response);

            if (response.didCancel) {
                alert('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePıcker Error', response.error);
            }
            else if (response.customButton) {
                if (response.customButton == 'fb') {
                    alert("Facebook için tıkladınız...")
                }
                else {
                    alert("Twitter için tıkladınız")
                }
            }
            else {
                let source = {url: response.url};
                let sourceData = {url: response.data};
                alert(sourceData);
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType = "slide"
                    transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose ={ ()=> {
                        alert ("Modal has not been closed");
                }}>

                 <View style={{marginTop: 22}}>
                     <View>
                         <Text>Hello World</Text>
                         <QRCodeScanner onRead={ (e) => alert(e.data)}/>
                     </View>
                 </View>
                </Modal>

                <View style={[styles.projectBlock,{backgroundColor:" green"}]}>
                    <Text style={styles.title}>#image-picker</Text>
                    <TouchableOpacity onPress={this.btnClick.bind()}>
                        <Text>Görsel Seç</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.projectBlock,{backgroundColor:" green"}]}>
                    <TouchableOpacity onPress={() => this.setState ( { modalVisible: true}) }>
                        <Text style={styles.title}>#react-native-qrcode-scanner</Text>
                    </TouchableOpacity>

                    <Text style={styles.desc}>*react-native-camera</Text>
                </View>
            </View>
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
    title:{
        color:'#000',
        fontSize:20,
        fontFamily: 'OpenSans-Bold',
    },
    desc:{
        color:'#000',
        fontSize:15,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center'
    },
    projectBlock:{
        padding: 10,
        borderBottomWidth: 4,
        borderBottomColor: '#000',
        marginBottom: 10,
    }

});
