import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles'

import api from '../services/api'

export default function ServiceInformation({ navigation, route }){
  const [nameClient, setNameClient] = useState('')
  const [lastNameClient, setLastNameClient] = useState('')
  const [phone, setPhone] = useState('')

  function navigateToBack(){
    navigation.navigate('ServicesRecentList')
  }
  
  async function loadProvider(){

    const jsonToken = await AsyncStorage.getItem('@token')
    const token = jsonToken != null ? JSON.parse(jsonToken) : null;


    try {
      const response = await api.get(`usuario/${route.params.item.professional_id}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      setNameClient(response.data.nome)
      setLastNameClient(response.data.sobrenome)
      setPhone(response.data.telefone)
    } catch (error) {
      console.log(error)
    }
  }
  
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=55${phone}&text=Ola`);
  }

  function rating(){
    navigation.navigate('ServiceRating', route.params.item.id)
  }

  useEffect(() => {
    loadProvider();
  }, []);

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

      <View style={styles.service}>

        <Text style={styles.title}>
          Título
        </Text>
        <Text styles={styles.titleAbout}>
          {route.params.item.category}
        </Text>

        <Text style={styles.description}>
          Informações         
        </Text>
        <Text styles={styles.descriptionAbout}>
          {route.params.item.description}
        </Text>

        <Text style={styles.client}>
          Prestador de serviço
        </Text>
        <Text styles={styles.clientName}>
          Nome: {`${nameClient} ${lastNameClient}`}
        </Text>

        <View style={styles.buttons}>
          {
            (route.params.item.situation == 2 )
            ? <TouchableOpacity 
                style={styles.getService}
                onPress={rating}
              >
                <Text style={styles.textGetService}>
                  Avaliar
                </Text>
              </TouchableOpacity>

            : <TouchableOpacity 
                style={styles.getServiceDisable}
                disabled={true}
              >
                <Text style={styles.textGetServiceDisable}>
                  Avaliado
                </Text>
              </TouchableOpacity>
          }
          <TouchableOpacity 
            style={styles.zap}
            onPress={sendWhatsapp}
          >
            <Text style={styles.textZap}>
              <FontAwesome name="whatsapp" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}