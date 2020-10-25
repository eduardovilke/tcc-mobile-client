import * as React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

import { 
  SimpleLineIcons, 
  MaterialCommunityIcons, 
  Entypo, 
  Octicons, 
  FontAwesome
} from '@expo/vector-icons';

export default function AddServiceCategory({ navigation }){
  const data = [
    {
      id: "1",
      name: "Serviços elétricos",
      icon: 'energy'
    },
    {
      id: "2",
      name: "Serviços Hidráulicos",
      icon: 'pipe-leak'
    },
    {
      id: "3",
      name: "Jardinagem",
      icon: 'tree'
    },
    {
      id: "4",
      name: "Pequenas pinturas",
      icon: 'paintcan'
    },
    {
      id: "5",
      name: "Troca de fechaduras",
      icon: 'key'
    }
  ]

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Maria</Text>
        <Text style={styles.subTitle} >Para continuar com a busca, selecione qual categoria deseja</Text>
      </View>

      <FlatList
        data={data}
        style={styles.serviceList}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({item: item}) => (
          <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('AddServiceInformations')}>
            <View style={styles.icons}>
              {
                  (item.icon == 'energy') ? <SimpleLineIcons name="energy" size={35} color="#4fb4c8" />
                : (item.icon == 'pipe-leak') ? <MaterialCommunityIcons name="pipe-leak" size={35} color="#4fb4c8" />
                : (item.icon == 'tree') ? <Entypo name="tree" size={35} color="#4fb4c8" />
                : (item.icon == 'paintcan') ? <Octicons name="paintcan" size={35} color="#4fb4c8" />
                : <FontAwesome name="key" size={35} color="#4fb4c8" />
              }
            </View>
            <Text style={styles.nameService}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}