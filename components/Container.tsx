import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Container(props: View['props']) {
  return <View style={styles.container} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#fff',
    gap: 16,
  },
});
