import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register2({route}){

  // const user = JSON.stringify(route.params)
  // console.log('USER: ', user, {user: user,
  // phone: phone,
  // cep: cep,
  // city: city,
  // street: street,
  // neighborhood: neighborhood,
  // number: number})
  
  const [phone, setPhone] = useState('')
  const [cep, setCep] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [number, setNumber] = useState('')
  
  const navigation = useNavigation();
  
  const [phoneBR, setPhoneBR] = useState('');

  function navigateToBack(){
    navigation.navigate('Register');
  }

  function navigateToNext(){
    navigation.navigate('Feed')
  }

  return(
    <KeyboardAvoidingView style={styles.background} behavior="height">
      <View style={styles.header}>
        <Feather style={styles.headerIcon} 
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={ navigateToBack }
          />
        <Text style={styles.title} >Mais algumas informações</Text>
      </View>
      <ScrollView>
        <View style={styles.inputs}>
          <View style={styles.names}>

            <Item style={styles.telefone}>
              <Input 
                placeholder="Celular" 
                keyboardType={'numeric'}
                value={phoneBR}
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
            <TouchableOpacity 
              style={styles.btnContinuar}
              onPress={ navigateToNext }
            >
            <Text style={styles.txtContinuar} >SALVAR</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
  </KeyboardAvoidingView>

  );
}