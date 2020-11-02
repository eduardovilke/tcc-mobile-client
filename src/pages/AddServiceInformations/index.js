import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Item, Input, Textarea } from 'native-base';
import { RadioButton } from 'react-native-paper';

import { 
  Feather,
  SimpleLineIcons, 
  MaterialCommunityIcons, 
  Entypo, 
  Octicons, 
  FontAwesome
} from '@expo/vector-icons';

import styles from './styles'

export default function AddServiceInformations({ navigation, route }){
  console.log('entrou no addservice informations', route.params.item.nome)
  const [checked, setChecked] = React.useState('baixo');

  return(
    <View style={styles.container}>
      <Feather style={styles.headerIcon} 
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={() => navigation.navigate('AddServiceCategory')}
      />
      
      <View style={styles.header}>

      {
        (route.params.item.id == 2) ? <SimpleLineIcons name="energy" size={35} color="#4fb4c8" />
        : (route.params.item.id == 1) ? <MaterialCommunityIcons name="pipe-leak" size={35} color="#4fb4c8" />
        : (route.params.item.id == 3) ? <Entypo name="tree" size={35} color="#4fb4c8" />
        : (route.params.item.id == 4) ? <Octicons name="paintcan" size={35} color="#4fb4c8" />
        : <FontAwesome name="key" size={35} color="#4fb4c8" />
      }
        <Text style={styles.title}>{route.params.item.nome}</Text>
      </View>

      <Item style={styles.problemTitle}>
        <Input placeholder="Ex: Torneira vazando" />
      </Item>

      <View style={styles.problemDescription}>
        <Textarea rowSpan={5} bordered placeholder="Descreva aqui seu problema" />
      </View>
      
      <Text>Prioridade:</Text>
      <View style={styles.priorities}>
        
        <View style={styles.prioritiesOptions}>
          <RadioButton
            value="baixo"
            status={ checked === 'baixo' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('baixo')}
          />
          <Text>Baixo</Text>
        </View>
        
        <View style={styles.prioritiesOptions}>
          <RadioButton
            value="medio"
            status={ checked === 'medio' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('medio')}
          />
          <Text>Médio</Text>
        </View>
        
        <View style={styles.prioritiesOptions}>
          <RadioButton
            value="alto"
            status={ checked === 'alto' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('alto')}
          />
          <Text>Alto</Text>
        </View>
        
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('PageSuccess')}
      >
        <Text style={styles.txtButton}>Buscar</Text>
      </TouchableOpacity>
      
    </View>
  )
}