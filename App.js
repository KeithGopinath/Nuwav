import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>New wave </Text>
      
      {/* <StatusBar style="auto" /> */}
      <View style={styles.box}>
        <Text style={styles.welcome}>Welcome!</Text>
        <View style={{margin: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Login')}
          >
            <Text style={styles.text}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Sign Up')}
          >
            <Text style={styles.text}> Sign Up (Start Here!) </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E8B57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    fontSize: 45,
    letterSpacing:-2,
    color: "#ffffff", 
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: "white",
    marginTop: 70,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily:'',
  },

  lineStyle:{
    color: "white",
    marginTop:-60,
    fontWeight: 'bold',
  
    
},
  box: {
    flex: 3,
    backgroundColor: '#fff',
    borderRadius: 7,
    borderColor: '#000',
    padding: 10,
    margin: 50,
    width: 300,
  },
  welcome: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop:10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2E8B57',
    padding: 15,
    marginTop: 40,
    borderRadius: 70,
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});
