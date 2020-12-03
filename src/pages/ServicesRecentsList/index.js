import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {Feather, AntDesign, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerEffect from '../ShimmerEffect/index'

import styles from './styles';
import categoryMap from '../../utils/categoryMap'

import api from '../services/api'

export default function servicesRecentsList({navigation}){

  const [nameUser, setNameUser] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function loadService(){
    setData([])
    const jsonValue = await AsyncStorage.getItem('@user')
    const user = jsonValue != null ? JSON.parse(jsonValue) : null;
    setNameUser(user.nome)

    const jsonToken = await AsyncStorage.getItem('@token')
    const token = jsonToken != null ? JSON.parse(jsonToken) : null;

    const services = await api.get(`servico/${user.id}/`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    let provider = ''
    services.data.reverse()
    for (const item of services.data) {
      if(item.prestador_id > 0){
        const responseProvider = await api.get(`usuario/${item.prestador_id}/`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        provider = `${responseProvider.data.nome} ${responseProvider.data.sobrenome}` 
      }
      const service = [{
        id: `${item.id}`,
        category: categoryMap[`${item.tipos_servico_id}`],
        description: item.descricao,
        professional_id: item.prestador_id,
        professional: `${provider}`,
        situation: item.situacao_id
      }]
      setData(data => data.concat(service))
      setLoading(false)
    }
    if(data.length == 0 ){
      setLoading(false)
    }
  }

  function navigateToInformations(item){
    navigation.navigate('ServiceInformation', {item})
  }

  useEffect(
    () => navigation.addListener('focus', () => loadService()), 
    []
  )
  
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Bem Vind@! {nameUser}
        </Text>
        <Text style={styles.subTitle}>
            Aqui estão suas solicitações recentes
        </Text>
      </View>
      {
        (loading)
        ? <ShimmerEffect />
        : (data) ? <FlatList
            data={data}
            style={styles.serviceList}
            showsVerticalScrollIndicator={false}
            renderItem={({item: item}) => (
              <View style={styles.service}>
                <Text style={styles.serviceProperty}>Categoria</Text>
                  <View style={styles.categorySituation}> 
                    <Text style={styles.serviceValue}>{item.category}</Text>

                    { 
                      (item.situation == 3) 
                      ? <AntDesign name="check" size={30} color="green" />
                      : (item.situation == 1) ? <MaterialCommunityIcons name="calendar-clock" size={30} color="#d6d2c9" />
                      : <FontAwesome5 name="calendar-check" size={28} color="#f7c325" />
                    } 
                    
                  </View>
                
                <Text style={styles.serviceProperty}>Descrição</Text>
                <Text style={styles.serviceValue}>{item.description}</Text>

                <Text style={styles.serviceProperty}>Profissional</Text>
                {
                  (item.professional)
                  ? <Text style={styles.serviceValue}>{item.professional}</Text>
                  : <Text style={styles.serviceValue}>Aguardando...</Text>
                }
                
                {
                  (item.professional)
                  ? <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={() => navigateToInformations(item)}
                    >
                      <Text style={styles.detailsButtonText} >Ver informações</Text>
                      <Feather name="arrow-right" size={17} color="#4fb4c8"/>
                    </TouchableOpacity>
                  : <View></View>
                }
                
              </View>
              
            )}
          />
        : <View></View>
      }
      
    </View>
  )
}