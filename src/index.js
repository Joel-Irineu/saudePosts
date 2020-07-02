import React, { useState, useEffect } from 'react'
import { 
    StatusBar, 
    View, 
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native'

import api from './services/api'
import Filmes from './Filmes'

export default function Main(){
    const [filmes, setFilmes] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function getFilem(){
            const response = await api.get('rn-api/?api=posts')
            setFilmes(response.data)
            setLoading(false)
        }
        getFilem()
    },[])

    return(
        <View style={styles.container}>
            <StatusBar/>
            {loading === true ?(
                <ActivityIndicator color='#09a6ff' size={80} />
            ):(
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={filmes}
                    renderItem={({item})=> <Filmes data={item}/>}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    input:{
        width: '80%',
        borderWidth: 1,
        height: 45,
        padding: 5,
        borderColor: '#262626',
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