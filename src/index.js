import React, { useState } from 'react'
import { 
    StatusBar, 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    TextInput,
    AsyncStorage,
    Keyboard,
} from 'react-native'

export default function Main(){
    const [input, setInput] = useState('')
    const [name, setName] = useState('')


    async function componentDidMount(){
        await AsyncStorage.getItem('name').then( value => {
            setName(value)
        })
    }

    async function componentDidUpdate(_, prevState){
        if(prevState !== name){
            await AsyncStorage.setItem('name', name)
        }
    }

    

    function saveName(){
        setName(input)
        alert('salvo com sucesso')
        Keyboard.dismiss()
        setInput('')
    }

    componentDidMount()
    componentDidUpdate()
    
    return(
        <View style={styles.container}>
            <StatusBar/>
                <View style={styles.viewInput}>
                    <TextInput 
                        style={styles.input}
                        value={input}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => setInput(text)}
                        placeholder='Digite seu nome aqui...'
                    />

                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={saveName}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>{name}</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    viewInput:{
        marginTop: 10,
        flexDirection: 'row',

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
        width: '15%',
        height: 45,
        justifyContent: 'center'
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