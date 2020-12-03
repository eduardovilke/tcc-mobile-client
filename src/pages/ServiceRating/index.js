import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Textarea } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons';

import styles from './styles'

import api from '../services/api'

export default function ServiceRating({ navigation, route }){
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  
  async function saveRating(){
    const jsonToken = await AsyncStorage.getItem('@token')
    const token = jsonToken != null ? JSON.parse(jsonToken) : null;
    
    try {
      await api.put(`servico/${route.params}`,{
        nota_avaliacao: `${rating}`,
        descricao_avaliacao: `${description}`,
        situacao_id: "3"
      },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      navigation.navigate('ServicesRecentList')
    } catch (error) {
      console.log(error)
    }
  }

  function navigateToBack(){
    navigation.goBack()
  }

  function ratingCompleted(rating) {
    setRating(rating)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather style={styles.headerIcon}
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={navigateToBack}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.textHeader}>Avaliação do Serviço</Text>
      </View>
      <View style={styles.rating}>
        <AirbnbRating
          count={5}
          reviews={["Ruim", "Mais ou menos", "Bom", "Ótimo", "Excelente!"]}
          defaultRating={4}
          size={35}
          showRating
          onFinishRating={(rating) => ratingCompleted(rating)}
        />
      </View>
      <View style={styles.ratingDescription}>
        <Textarea 
          rowSpan={5} 
          bordered 
          placeholder="Descreva como foi o atendimento" 
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.buttonAvaliar}>
      <TouchableOpacity style={styles.avaliar} onPress={saveRating}>
        <Text style={styles.textAvaliar}>Avaliar</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}