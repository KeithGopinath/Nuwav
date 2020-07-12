import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import {
   StyleSheet, Text, secureInput, state, CheckBox, TextInput, View,
   onChangeText, Button, TouchableOpacity
} from 'react-native';


 class Signup extends PureComponent {

   constructor(props) {
      super(props);
      
     this.state = {
      //   isSelected:,
        setSelection:false,
        setSelectionnew: false,
     }
   }

   checkbox = () => {
this.setState({setSelection : !this.state.setSelection})
      
   }
   checkboxNew = () => {
      this.setState({setSelectionnew : !this.state.setSelectionnew})
            
         }

   render() {

      const styles = StyleSheet.create({
         container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
         },

         main: {

            fontSize: 45,
            letterSpacing: -2,
            color: "black",
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 43,
            // fontFamily: 'Arial',
         },

         forgot: {
            color: '#2E8B57',
            textAlign: 'center',
            fontWeight: 'bold',
            margin: 20,
         },

         input: {
            margin: 10,
            height: 50,
            width: 300,
            borderRadius: 10,
            backgroundColor: '#f5f5f5',
         },
         submitButton: {
            backgroundColor: '#2E8B57',
            width: 300,
            height: 40,
            borderRadius: 70,
            marginTop: 40,
         },

         submitButtonText: {
            color: 'white',
            textAlign: 'center',
            marginVertical: 8,

         },
         button: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            borderRadius: 70,
            marginTop: 20,
            width: 160,
            height: 40,
         },

         text: {
            color: 'white',
            textAlign: 'center',
            marginVertical: 3,

         },
         
         checkboxContainer: {
            flexDirection: "row",
            marginBottom: 20,
          },
          checkbox: {
            alignSelf: "center",
          },
          label: {
            margin: 8,
          },
      })

      return (
         <View style={styles.container}>
            <Text style={styles.main}>Sign Up</Text>

            <TextInput style={styles.input}
               placeholder="    First Name"
               autoCapitalize="none" />

            <TextInput style={styles.input}
               placeholder="    Last Name"
               autoCapitalize="none" />

            <TextInput style={styles.input}
               placeholder="    Email"
               autoCapitalize="none" />

            <TextInput style={styles.input}
               placeholder="    Password"
               autoCapitalize="none" />

           
<View style={styles.checkboxContainer}>
     <ul>   <CheckBox
          value={this.state.setSelection}
          onValueChange={this.checkbox}
          style={styles.checkbox}
        /> 
        <Text style={styles.label}>I would like to receive your newsletter and other promotional information</Text>
        <CheckBox
          value={this.state.setSelectionnew}
          onValueChange={this.checkboxNew}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Are u 18 years old?</Text>
        </ul>
      </View>

            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.login()
               }>

               <Text style={styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.button}
               onPress={() => Alert.alert('Login')}>

               <Text style={styles.text}> Back </Text>
            </TouchableOpacity>
         </View>
      )
   }


}

export default Signup;

