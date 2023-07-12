import React from 'react';
import { StyleSheet, View } from 'react-native';

type CustomProps = {
  marginVertical?: number;
};

type DividerProps = CustomProps & View['props'];

export default function Divider(props: DividerProps) {
  const { marginVertical = 16 } = props;
  return <View style={{ marginVertical, ...styles.divider }} {...props} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
  },
});
