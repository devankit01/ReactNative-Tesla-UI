import React from 'react';
import {Text, View, Pressable} from 'react-native';

import styles from './style';

const CarButton = (props) => {
const backgroundColor = props.type === 'primary' ? 'black' : 'white';
const fontColor = props.type === 'primary' ? 'white' : 'black';
  return (
    <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor : backgroundColor}]}
            onPress={() => {
            console.warn(props.content);
            }}>
            <Text style={[styles.text, {color : fontColor}]}>{props.content}</Text>
        </Pressable>
    </View>
  );
};

export default CarButton;
