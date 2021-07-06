import React from 'react';
import { Text,StyleSheet, Pressable } from 'react-native';

export default function ActionButton(props) {
  const { onPress, title = 'Подробнее' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 19,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#E2000F',
    width: 142,
    alignSelf: 'center'
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});