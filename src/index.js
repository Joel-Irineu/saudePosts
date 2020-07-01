import React, { useState } from 'react'
import { 
    StatusBar, 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Modal 
} from 'react-native'

import ModalView from './componets/ModalView'

export default function Main(){
    const [modalVisible, setModalVisible] = useState(false)

    function enter(){
        if(modalVisible === false){
            setModalVisible(true)
        }else{
            setModalVisible(false)
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar/>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={enter}
                >
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    animationType='slide'
                    visible={modalVisible}  
                >
                    <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                        <ModalView data={enter} />
                    </View>
                </Modal>
        
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
    modalView:{
        width: '100%',
        height: 200,
        backgroundColor: '#ecec00',
        alignSelf: 'center'
    }
})