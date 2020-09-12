import React from 'react';
import {View, Text} from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons'
import { Item, Input } from 'native-base';

import styles from './styles';

export default function Login({navigation}){
    return(
        <View>
            <View style={styles.header}>
                <Feather style={styles.headerIcon} 
                name="arrow-left" 
                size={30} 
                color="#4b5c6b"
                onPress={ () => navigation.navigate('Home')}
                />
                <Text style={styles.title} >Entre na conta</Text>
            </View>
            <View style={styles.inputs}>
                <Item style={styles.inputEmail}>
                    <Input placeholder="Ex: maria@gmail.com" />
                    </Item>
                    <Item style={styles.inputPassword}>
                    <Input placeholder="Senha" />
                </Item>
            </View>
            <View style={styles.footer}>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                <AntDesign name="rightcircle" size={48} color="#4b5c6b"/>
            </View>
        </View>
    );
}