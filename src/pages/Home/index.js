import React from 'react';
import { Text, 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TouchableOpacity } from 'react-native';
  
import styles from './styles';

export default function App({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerImage}>
        <Image 
          source={require('../../../assets/home-client.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.title}>
          Bem-vindo(a) ao app de busca de serviço
        </Text>
        
        <View style={styles.containerButton}>
          <TouchableOpacity 
          style={styles.buttonEntrar}
          onPress={ () => navigation.navigate('Login') }
          >
            <Text style={styles.textEntrar}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.buttonRegistrar}
          onPress={ () => navigation.navigate('Register') }
          >
            <Text style={styles.textCadastrar} >CADASTRE-SE</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </KeyboardAvoidingView>
  );
}