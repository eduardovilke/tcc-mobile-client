import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather, Entypo} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api'

export default function Register(){

  const [hidePassword, setHidePassword] = useState(true);
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [cep, setCep] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [number, setNumber] = useState('')

  const navigation = useNavigation();

  function setPasswordVisibility(){
    setHidePassword(!hidePassword);
  }

  function navigateToHome(){
    navigation.navigate('Home');
  }

  async function navigateToNext(){
    try {
      await api.post('/cliente', {
        nome: name,
        sobrenome: lastName,
        email: email,
        telefone: phone,
        cep: cep,
        cidade: city,
        rua: street,
        bairro: neighborhood,
        numero: number,
        senha: password
      })
      ToastAndroid.show("Conta criada com sucesso!", ToastAndroid.SHORT);
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <KeyboardAvoidingView style={styles.background} behavior="height">
      <View style={styles.header}>
        <Feather style={styles.headerIcon} 
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={ navigateToHome }
          />
        <Text style={styles.title} >Vamos começar criando sua conta</Text>
      </View>
      <ScrollView>
        <View style={styles.inputs}>
          <View style={styles.names}>

            <Item style={styles.nome}>
              <Input 
                placeholder="Nome" 
                onChangeText={setName}
              />
            </Item>

            <Item style={styles.sobrenome}>
              <Input 
                placeholder="Sobrenome" 
                onChangeText={setLastName}
              />
            </Item>

          </View>

          <Item style={styles.email}>
            <Input 
              placeholder="Email"
              onChangeText={setEmail}
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

          <Item style={styles.inputPassword}>
            <Input 
              placeholder="Confirmar senha" 
              secureTextEntry={hidePassword}
            />
            <Entypo 
              onPress={setPasswordVisibility} 
              name={hidePassword ? 'eye-with-line' : 'eye'} 
              size={24} 
              color="#4b5c6b"
            />
          </Item>

          <View style={styles.names}>

            <Item style={styles.telefone}>
              <Input 
                placeholder="Celular" 
                keyboardType={'numeric'}
                onChangeText={setPhone}
              />
            </Item>

            <Item style={styles.cep}>
              <Input 
                placeholder="CEP" 
                keyboardType={'numeric'}
                onChangeText={setCep}
              />
            </Item>

          </View>

          <Item style={styles.cidade}>
            <Input 
              placeholder="Cidade" 
              onChangeText={setCity}
            />
          </Item>

          <Item style={styles.rua}>
            <Input 
              placeholder="Rua" 
              onChangeText={setStreet}
            />
          </Item>

          <Item style={styles.bairro}>
            <Input 
              placeholder="Bairro" 
              onChangeText={setNeighborhood}
            />
          </Item>

          <Item style={styles.numero}>
            <Input 
              placeholder="Número" 
              onChangeText={setNumber}
            />
          </Item>

        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btnContinuar} onPress={navigateToNext}>
            <Text style={styles.txtContinuar} >CONTINUAR</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
  </KeyboardAvoidingView>

  );
}