import React, { useContext } from 'react';
import { FlatList, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

import { Context, Employee } from '@/context';
import { Text, View } from '@/components/Themed';

type EmployeeItem = {
  item: Employee;
};

export default function EmployeesScreen() {
  const router = useRouter();
  const { employees } = useContext(Context);

  return (
    <View style={styles.container}>
      <Button onPress={() => router.push('/modal')} title='Agregar empleado' />

      <FlatList
        data={employees}
        style={styles.list}
        renderItem={({ item }: EmployeeItem) => (
          <View>
            <Text style={styles.title}>{item.username}</Text>
            <Text>{item.name}</Text>
            <View
              style={styles.separator}
              lightColor='#eee'
              darkColor='rgba(255,255,255,0.1)'
            />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  list: {
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginTop: 30,
    height: 1,
    width: '100%',
  },
});
