import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RegisterForm({changeForm}) {
  return (
    <View>
      <Text>RegisterForm</Text>
       <TextInput
       style={styles.input}
       placeholder='Correo electrónico'
       placeholderTextColor='#969696'
       />
       <TextInput
       //value='Ingresa tu contraseña'
       textContentType='password'
       />
        <TouchableOpacity>
            <Text style={styles.btnText}>
            Registrate
            </Text>
        </TouchableOpacity>
      

      <Button title='Iniciar sesión' onPress={changeForm}/>
    </View>
  )
}

const styles = StyleSheet.create({
    btnText:{
        color:'black',
        fontSize:20,
        marginBottom:10,
        backgroundColor:'aqua',
        borderRadius:25,
        textAlign:'center'
    },
    input:{
        height:50,
        color:'white',
        width:150,
        backgroundColor:'#1e3040',
        fontSize:18,
        borderWidth:1,
        borderRadius:15,
        paddingHorizontal:20
    }
})