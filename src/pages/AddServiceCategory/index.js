import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

import { 
  SimpleLineIcons, 
  MaterialCommunityIcons, 
  Entypo, 
  Octicons, 
  FontAwesome
} from '@expo/vector-icons';

import api from '../services/api';

export default function AddServiceCategory({ navigation }){

  const categories = [
    {
      id: 1,
      nome: 'Serviços hidráulicos'
    },
    {
      id: 2,
      nome: 'Serviços elétricos'
    },
    {
      id: 3,
      nome: 'Jardinagem'
    },
    {
      id: 4,
      nome: 'Pequenas pinturas'
    },
    {
      id: 5,
      nome: 'Troca de fechaduras'
    }
  ]

  const [nameUser, setNameUser] = useState('')

  async function loadUser(){
    const jsonValue = await AsyncStorage.getItem('@user')
    const user = jsonValue != null ? JSON.parse(jsonValue) : null;

    setNameUser(user.nome)
  }
  function navigateToNext(item){
    navigation.navigate('AddServiceInformations', {item});
  }

  useEffect(() => {
    loadUser();
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{nameUser}</Text>
        <Text style={styles.subTitle} >Para continuar com a busca, selecione qual categoria deseja</Text>
      </View>

      <FlatList
        data={categories}
        style={styles.serviceList}
        showsVerticalScrollIndicator={false}
        renderItem={({item: item}) => (
          <TouchableOpacity 
            style={styles.service} 
            onPress={() => navigateToNext(item)}
          >
            <View style={styles.icons}>
              {
                  (item.id == 2) ? <SimpleLineIcons name="energy" size={35} color="#4fb4c8" />
                : (item.id == 1) ? <MaterialCommunityIcons name="pipe-leak" size={35} color="#4fb4c8" />
                : (item.id == 3) ? <Entypo name="tree" size={35} color="#4fb4c8" />
                : (item.id == 4) ? <Octicons name="paintcan" size={35} color="#4fb4c8" />
                : <FontAwesome name="key" size={35} color="#4fb4c8" />
              }
            </View>
            <Text style={styles.nameService}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}