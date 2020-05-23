import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
}  from 'react-native'
import icon from '../../assets/imgs/incca.jpg'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Teste Incca Sistemas</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 10: 0,
        padding: 20,
        borderBottomWidth: 10,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 40,
        width: 50,
        resizeMode: 'contain'
    },
    title: {
        color:'#000',
        fontFamily: 'shelter',
        height: 40,
        fontSize: 30
    }
})
export default Header