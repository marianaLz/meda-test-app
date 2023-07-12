import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input(props: TextInput['props']) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#bbb',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
