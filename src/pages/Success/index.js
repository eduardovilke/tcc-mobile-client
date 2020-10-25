import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import success from '../../../success.json'

import styles from './styles';

export default function PageSuccess({ navigation }){
  return(
    <View style={styles.container}>
      <LottieView
        style={{
          width: 400,
          height: 400,
          marginLeft: -10
        }}
        source={success}
        autoPlay
      />
      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.txtButton}>Voltar ao menu principal</Text>
      </TouchableOpacity>
    </View>
  )
}