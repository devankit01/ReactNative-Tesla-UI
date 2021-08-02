import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from './style';
import CarButton from '../CarButton';
const CarItem = (props) => {

  const {name, tagline, image} = props.car;
  console.log(props.car)
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subtitle}> {tagline} </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CarButton type="primary" content="Custom Order" />
        <CarButton type="secondary" content="Existing Inventory" />
      </View>
    </View>
  );
};

export default CarItem;
