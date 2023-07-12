import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Title(props: Text['props']) {
  return <Text style={styles.title} {...props} />;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
