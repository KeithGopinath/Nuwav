import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import {
   StyleSheet, Text, secureInput, state, CheckBox, TextInput, View,
   onChangeText, Button, TouchableOpacity
} from 'react-native';


 class Confirmation extends PureComponent {
    // constructor(props) {
    //     super(props);
        
    //   // this.state = {
    //     //   isSelected:,
    //      // setSelection:false,
    //      // setSelectionnew: false,
    //    }
    //  }
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
            letterSpacing:-2,
            textAlign: 'center',
            marginTop: 70,
            fontWeight: 'bold',
          },
        
          main2: {
            fontSize: 35,
            letterSpacing:1,
            textAlign: 'center',
            marginTop: 45,
            fontWeight: 'bold',
           
          },
          
          main3: {
          fontSize: 28, 
          paddingLeft:5,
          paddingRight:5,
          textAlign: 'left',
          marginTop: 80,
          fontWeight: 'bold',
         
        },
          
        main4: {
            fontSize: 28, 
            paddingLeft:5,
            paddingRight:5,
            textAlign: 'left',
            marginTop: 30,
            fontWeight: 'bold',
           
          },
          main5: {
            fontSize: 25,
            letterSpacing:1,
            textAlign: 'left',
            marginTop:70 ,
            fontWeight: 'bold',
           
          },
         input: {
            marginTop: 40,
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
            marginVertical:9,

         },
         
      
      })

      return (
         <View style={styles.container}>
            <Text style={styles.main}>Sign Up</Text>
            <Text style={styles.main2}>Confirmation</Text>
            <Text style={styles.main3}>Name: Victoria Robertson</Text>
            <Text style={styles.main4}>Email: ertgvb@gmail.com</Text>
            <Text style={styles.main5}>Check your Email For Token</Text>
            <TextInput style={styles.input}
               placeholder="    Token"
               autoCapitalize="none" />
            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.login()
               }>
               <Text style={styles.submitButtonText}> Submit </Text>
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

export default Confirmation;