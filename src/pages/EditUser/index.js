import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

export default function editUser({navigation}){

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Eduardo
        </Text>
      </View>
        <TouchableOpacity onPress={() => (navigation.navigate('EditUserRegister'))} style={styles.editUser}>
          <Entypo name="pencil" size={24} color="#4fb4c8" />
          <Text style={styles.TextEditUser} >Editar cadastro</Text>          
        </TouchableOpacity>
        <Text style={styles.separator} ></Text>
    </View>
  )
}