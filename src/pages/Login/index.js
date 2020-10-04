import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather, AntDesign, Entypo} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';

export default function Login(){

    const [hidePassword, setHidePassword] = useState(true);

    const navigation = useNavigation();

    function setPasswordVisibility(){
        setHidePassword(!hidePassword);
    }

    function navigateToHome(){
        navigation.navigate('Home');
    }

    return(
        <View style={styles.background}>
            <View style={styles.header}>
                <Feather style={styles.headerIcon} 
                name="arrow-left" 
                size={30} 
                color="#4b5c6b"
                onPress={ navigateToHome }
                />
                <Text style={styles.title} >Entre na conta</Text>
            </View>
            <View style={styles.inputs}>
                <Item style={styles.inputEmail}>
                    <Input style={styles.inputEmail} placeholder="Ex: maria@gmail.com" />
                    </Item>
                    <Item style={styles.inputPassword}>
                    <Input 
                        placeholder="Senha" 
                        secureTextEntry={hidePassword}
                    />
                    <Entypo 
                        onPress={setPasswordVisibility} 
                        name={hidePassword ? 'eye-with-line' : 'eye'} 
                        size={24} 
                        color="#4b5c6b"
                    />
                </Item>
            </View>
            <View style={styles.footer}>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                <AntDesign name="rightcircle" size={48} color="#4b5c6b"/>
            </View>
        </View>
    );
}