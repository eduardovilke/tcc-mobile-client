import React from 'react';
import { View } from 'react-native'

import styles from './styles';
import Shimmer from '../../utils/Shimmer'

export default function ShimmerEffect(){
  return(
    <View>
      <Shimmer width={310} height={200} />
      <View style={styles.void}></View>
      <Shimmer width={310} height={200} />
      <View style={styles.void}></View>
    </View>
  )
}