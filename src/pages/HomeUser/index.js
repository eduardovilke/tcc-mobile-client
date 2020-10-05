import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Feather, AntDesign, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';

export default function homeUser(){
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      category: "Serviços Hidráulicos",
      description: "Minha torneira está com vazamento, preciso que seja feita uma manutenção",
      professional: "João",
      situation: "finalizado"
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b",
      category: "Serviços Hidráulico",
      description: "Minha torneira está com vazamento, preciso que seja feita uma manutenção",
      professional: "João",
      situation: "agendado"
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28",
      category: "Serviços Hidráulic",
      description: "Minha torneira está com vazamento, preciso que seja feita uma manutenção",
      professional: "João",
      situation: "aberto"
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb",
      category: "Serviços Hidráuli",
      description: "Minha torneira está com vazamento, preciso que seja feita uma manutenção",
      professional: "João",
      situation: "finalizado"
    }  
  ]

  const Tab = createBottomTabNavigator();

  return(
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Bem Vind@! Maria
        </Text>
        <Text style={styles.subTitle}>
            Aqui estão suas conversas recentes
        </Text>
      </View>

      <FlatList
        data={data}
        style={styles.serviceList}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({item: item}) => (
          <View style={styles.service}>
            <Text style={styles.serviceProperty}>Categoria</Text>
              <View style={styles.categorySituation}> 
                <Text style={styles.serviceValue}>{item.category}</Text>

                { 
                  (item.situation == 'finalizado') 
                  ? <AntDesign name="check" size={30} color="green" />
                  : (item.situation == 'aberto') ? <MaterialCommunityIcons name="calendar-clock" size={30} color="#d6d2c9" />
                  : <FontAwesome5 name="calendar-check" size={28} color="#f7c325" />
                } 
                
            </View>
            

            <Text style={styles.serviceProperty}>Descrição</Text>
            <Text style={styles.serviceValue}>{item.description}</Text>

            <Text style={styles.serviceProperty}>Profissional</Text>
            <Text style={styles.serviceValue}>{item.professional}</Text>
            <TouchableOpacity 
              style={styles.detailsButton} 
            >
              <Text style={styles.detailsButtonText} >Chat</Text>
              <Feather name="arrow-right" size={17} color="#4fb4c8"/>
            </TouchableOpacity>
          </View>
          
        )}
      />
    </View>
  )
}