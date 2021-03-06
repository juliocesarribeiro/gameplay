import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

import DiscordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
    {...rest}
      style={styles.contain}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={DiscordImg}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>

    </TouchableOpacity>
  );
}