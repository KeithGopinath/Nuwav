import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, secureInput , TextInput,View, onPress, onChangeText , Button, TouchableOpacity } from 'react-native';

   
export default function App() {
    return (
        <View style={styles.container}>
         <Text style={styles.main}>LOG IN</Text>  
   
        <TextInput style = {styles.input}
               placeholder = "    Email"
               autoCapitalize = "none" />
    
            <TextInput style = {styles.input} 
               placeholder = "    Password"
               autoCapitalize = "none" />  
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
            <Text style={styles.forgot} >forgot your password?</Text>

            <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Login')}>

            <Text style={styles.text}> Back </Text>
          </TouchableOpacity>
         </View>
         )
            }
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom:20,
            },

              main: {
              
              fontSize: 45,
              letterSpacing:-2,
              color: "black", 
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom:43,
             // fontFamily: 'Arial',
            },

            forgot:{
               color: '#2E8B57', 
               textAlign: 'center',
               fontWeight: 'bold',
               margin:20,

            },

            input: {
                margin: 10,
                height: 50,
                width:300,
                borderRadius:10,
                backgroundColor:'#f5f5f5', 
             },

             submitButton: {
                backgroundColor: '#2E8B57',
                width:300,
                height:40,
                borderRadius: 70,
                marginTop:40,
             },

             submitButtonText:{
             color: 'white',
             textAlign: 'center',
             marginVertical: 8,
            
            },
               button:{
                backgroundColor: 'rgba(52, 52, 52, 0.5)',
                borderRadius: 70,
                marginTop:8,
                width:160,
                height:50,
               },

               text:{
                   color:'white',
                   textAlign: 'center',
                   marginVertical: 13,

               }
          })