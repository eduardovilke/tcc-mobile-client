import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerImage}>
        <Image 
          source={require('./assets/home-client.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.title}>
          Bem-vindo(a) ao app de busca de serviço
        </Text>
        
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonEntrar}>
            <Text style={styles.textEntrar}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegistrar}>
            <Text style={styles.textCadastrar} >CADASTRE-SE</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    marginTop: 35,
    width: 390,
    height: 390
  },
  inputArea: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    marginTop: 55,
    fontSize: 30,
    marginLeft: 17,
    color: '#4b5c6b'
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 17,
    paddingLeft: 17,
    marginTop: 40
  },
  buttonEntrar: {
    backgroundColor: '#4fb4c8',
    height: 50,
    width: 150,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textEntrar: {
    color: 'white'
  },
  buttonRegistrar: {
    backgroundColor: '#4fb4c8',
    height: 50,
    width: 150,
    borderRadius: 5,
    borderColor: '#4fb4c8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCadastrar: {
    backgroundColor: 'white',
    borderRadius: 5,
    color: '#4fb4c8',
    width: 146,
    height: 46,
    paddingTop: 12,
    paddingLeft: 25
    
  }
});
