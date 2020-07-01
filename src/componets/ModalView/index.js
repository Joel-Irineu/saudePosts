import React, { useState } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
} from 'react-native'

export default function ModalView({data}){
    return(
        <View style={styles.modalView}>
            <Text style={styles.text}>seja bem-vindo</Text> 

            <TouchableOpacity
                style={styles.btn}
                onPress={data}
            >
            <Text style={styles.btnText}>sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    modalView:{
        width: '100%',
        height: 200,
        backgroundColor: '#ecec00',
        alignSelf: 'center',
        borderRadius: 8,
    },
    btn:{
        backgroundColor: '#262626',
        width: '80%',
        height: 45,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#f3f3f3',
    },
    text:{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15,
    },  
})