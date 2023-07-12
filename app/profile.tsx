import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { Context } from '@/context';

export default function ProfileScreen() {
  const { loggedInUser } = useContext(Context);

  return (
    <View style={styles.container}>
      <View>
        <Text>Bienvenidx, {loggedInUser}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});
