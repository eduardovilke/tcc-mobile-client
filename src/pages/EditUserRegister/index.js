import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import { Item, Input } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import api from '../services/api';

export default function editUserRegister({ navigation }){

  const [hidePassword, setHidePassword] = useState(true);
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function navigateToback(){
    navigation.goBack()
  }

  async function loadUser(){
    const jsonValue = await AsyncStorage.getItem('@user')
    const user = jsonValue != null ? JSON.parse(jsonValue) : null;

    try {
      const response = await api.get(`usuario/${user.id}`)
      setName(response.data.nome)
      setLastName(response.data.sobrenome)
      setEmail(response.data.email)
    } catch (error) {
      console.log(error)
    }
  }

  async function changeRegister(){
    const jsonValue = await AsyncStorage.getItem('@user')
    const user = jsonValue != null ? JSON.parse(jsonValue) : null;
    try {
      await api.put(`usuario/${user.id}`, {
        nome: name,
        sobrenome: lastName,
        email: email,
        senha: password
      })
      navigation.navigate('EditUser')
    } catch (error) {
      console.log(error)
    }
  }

  function setPasswordVisibility(){
    setHidePassword(!hidePassword);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return(
    <KeyboardAvoidingView style={styles.background} behavior="height">
      <View style={styles.header}>
        <Feather style={styles.headerIcon} 
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={ navigateToback }
          />
        <Text style={styles.title} >Altere seu cadastro, e ao finalizar, clique em salvar.</Text>
      </View>
      <ScrollView>
        <View style={styles.inputs}>
          <View style={styles.names}>

            <Item style={styles.nome}>
              <Input 
                placeholder="Nome" 
                onChangeText={setName}
                value={name}
              />
            </Item>

            <Item style={styles.sobrenome}>
              <Input 
                placeholder="Sobrenome" 
                onChangeText={setLastName}
                value={lastName}
              />
            </Item>

          </View>

          <Item style={styles.email}>
            <Input 
              placeholder="Email"
              onChangeText={setEmail}
              autoCapitalize = 'none'
              value={email}
            />
          </Item>

          <Item style={styles.inputPassword}>
            <Input 
              placeholder="Senha" 
              secureTextEntry={hidePassword}
              onChangeText={setPassword}
            />
            <Entypo 
              onPress={setPasswordVisibility} 
              name={hidePassword ? 'eye-with-line' : 'eye'} 
              size={24} 
              color="#4b5c6b"
            />
          </Item>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btnContinuar} onPress={changeRegister}>
            <Text style={styles.txtContinuar} >SALVAR</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
  </KeyboardAvoidingView>
  )
}