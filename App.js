import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>New Wave</Text>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.box}>
        <Text style={styles.welcome}>Welcome!</Text>
        <View>
          {/* <Button
            color="#2E8B57"
            title="Login"
            onPress={() => Alert.alert('Login')}
          />
          <Button
            color="#2E8B57"
            title="Sign Up (Start Here!)"
            onPress={() => Alert.alert('Sign Up')}
          /> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Login')}
          >
            <Text> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Sign Up')}
          >
            <Text> Sign Up (Start Here!) </Text>
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
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: "white",
    marginTop: 70,
    fontFamily: 'Verdana',
  },
  box: {
    flex: 3,
    backgroundColor: '#fff',
    borderRadius: 7,
    // borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    margin: 70,
    width: 300,
  },
  welcome: {
    textAlign: 'center',
    fontWeight: 'bold',
    // color: "white",
    fontSize: 25,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: "white",
    alignItems: 'center',
    backgroundColor: '#2E8B57',
    padding: 10,
    borderRadius: 7,
  },
});
