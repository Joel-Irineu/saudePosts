import React, { useState } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'


export default function Filmes({data}){
    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>{data.titulo}</Text>
                <Image 
                    style={styles.img}
                    source={{uri: data.capa}}
                />
                <View style={styles.btnArea}>
                    <TouchableOpacity
                        onPress={()=> alert(data.subtitulo)}
                            style={styles.btn}
                        >
                        <Text style={styles.btnText} >Saiba mais...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: .8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5
    },
    img:{
        height: 250,
        zIndex: 2,
    },
    title:{
        fontSize: 18,
        padding: 15,
    },
    btnArea:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    btn:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    btnText:{
        textAlign: 'center',
        color: '#fff',
    },
})