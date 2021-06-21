import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import Illustration from '../../assets/illustration.png'

import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={Illustration}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title='Entrar com Discord'
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}