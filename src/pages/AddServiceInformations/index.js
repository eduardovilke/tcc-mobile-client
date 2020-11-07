import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import { Item, Input, Textarea } from 'native-base';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  Feather,
  SimpleLineIcons, 
  MaterialCommunityIcons, 
  Entypo, 
  Octicons, 
  FontAwesome
} from '@expo/vector-icons';

import styles from './styles'

import api from '../services/api'

export default function AddServiceInformations({ navigation, route }){
  
  const [checked, setChecked] = useState('baixo');
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [idUser, setIdUser] = useState('')

  async function addServiceInApi(){
    if(!title || !description){
      ToastAndroid.show("Preencha as informações do serviço", ToastAndroid.SHORT);
    }else{
      try {

        const jsonValue = await AsyncStorage.getItem('@user')
        const user = jsonValue != null ? JSON.parse(jsonValue) : null;

        setIdUser(user.id)

        await api.post('servico', {
          nome: title,
          descricao: description,
          tipos_servico_id: `${route.params.item.id}`,
          situacao_id: "1",
          cliente_id: `${idUser}`
        })
        navigation.navigate('PageSuccess')

      } catch (error) {
        console.log(error)
        ToastAndroid.show("Houve algum problema. Contate o suporte.", ToastAndroid.SHORT);

      }
    }
  }

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
        <Input 
          placeholder="Ex: Torneira vazando" 
          onChangeText={setTitle}
        />
      </Item>

      <View style={styles.problemDescription}>
        <Textarea 
          rowSpan={5} 
          bordered 
          placeholder="Descreva aqui seu problema" 
          onChangeText={setDescription}
        />
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
        onPress={addServiceInApi}
      >
        <Text style={styles.txtButton}>Buscar</Text>
      </TouchableOpacity>
      
    </View>
  )
}