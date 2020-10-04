import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather, AntDesign, Entypo} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register(){

  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation();

  function setPasswordVisibility(){
    setHidePassword(!hidePassword);
  }

  function navigateToHome(){
    navigation.navigate('Home');
  }

  function navigateToNext(){
    navigation.navigate('Register2');
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
              <Input placeholder="Nome" />
            </Item>

            <Item style={styles.sobrenome}>
              <Input placeholder="Sobrenome" />
            </Item>

          </View>

          <Item style={styles.email}>
            <Input placeholder="Email" />
          </Item>

          <Item style={styles.inputPassword}>
            <Input 
              placeholder="Senha" 
              secureTextEntry={hidePassword}
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