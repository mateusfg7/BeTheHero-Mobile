import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation()
  const message = 'Olá APAE, estou entrando em contato pois gostaria de ajudar  no caso "Ze ruela no bariri" com o valor de $3654541765413,00'

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail () {
    MailComposer.composeAsync({
      subject: 'Heroi do caso: Ze ruela fora da quarentena',
      recipients: ['mateusfelipefg77cont@gmail.com'],
      body: message,
    })
  }
  
  function sendWhatsapp () {
    Linking.openURL(`whatsapp://send?phone=+5537000000&text=${message}`)
  }

  return (
    <View style={styles.container}>
       
       <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAE</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Ze ruela tomando sorvete no bariri em plena quarentena</Text>
        
        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 99999,99</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}  onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.action}  onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
