import React from 'react';
import { Text,StyleSheet, Pressable } from 'react-native';

export default function HowButton(props) {
  const { onPress, title = 'Перейти в каталог' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 26,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#E2000F',
    width: 142,
    alignSelf: 'flex-end'
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});