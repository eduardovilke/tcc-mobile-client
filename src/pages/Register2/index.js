import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather, AntDesign, Entypo} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register2(){

  const navigation = useNavigation();
  
  const [phoneBR, setPhoneBR] = useState('');

  function navigateToBack(){
    navigation.navigate('Register');
  }

  function navigateToNext(){
    navigation.navigate('HomeUser')
  }

  function setPhoneText(text){
    setPhoneBR(text);
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
                onChangeText={text => {
                  setPhoneText(text)
                }}
              />
            </Item>

            <Item style={styles.cep}>
              <Input 
                placeholder="CEP" 
                keyboardType={'numeric'}
              />
            </Item>

          </View>

          <Item style={styles.cidade}>
            <Input placeholder="Cidade" />
          </Item>

          <Item style={styles.rua}>
            <Input placeholder="Rua" />
          </Item>

          <Item style={styles.bairro}>
            <Input placeholder="Bairro" />
          </Item>

          <Item style={styles.numero}>
            <Input placeholder="Número" />
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