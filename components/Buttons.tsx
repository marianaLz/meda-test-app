import React from 'react';
import { Button, Text, StyleSheet, Pressable } from 'react-native';

type CustomProps = {
  backgroundColor?: string;
  color?: string;
};

type ButtonProps = CustomProps & Button['props'];

export default function PrimaryButton(props: ButtonProps) {
  const {
    backgroundColor = '#B8621B',
    color = '#fff',
    disabled,
    onPress,
    title,
  } = props;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: disabled ? 'lightgray' : backgroundColor,
        ...styles.button,
      }}
    >
      <Text style={{ color, ...styles.text }}>{title}</Text>
    </Pressable>
  );
}

export function SecondaryButton(props: ButtonProps) {
  const {
    backgroundColor = 'transparent',
    color = 'gray',
    disabled,
    onPress,
    title,
  } = props;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: disabled ? 'lightgray' : backgroundColor,
        ...styles.button,
      }}
    >
      <Text style={{ color, ...styles.textSecondary }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  textSecondary: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
