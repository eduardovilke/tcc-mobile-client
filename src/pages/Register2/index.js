import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register2({route}){

  const user = JSON.stringify(route.params)
  const navigation = useNavigation();

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