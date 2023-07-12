import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

import { View } from '@/components/Themed';
import { Context, Employee } from '@/context';

export default function ModalScreen() {
  const router = useRouter();
  const { setEmployees } = useContext(Context);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeUsername, setEmployeeUsername] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');

  const handleNewEmployee = () => {
    const newEmployee: Employee = {
      name: employeeName,
      username: employeeUsername,
      password: employeePassword,
    };
    setEmployees((prevEmployees: Employee[]) => [
      ...prevEmployees,
      newEmployee,
    ]);
    setEmployeeName('');
    setEmployeeUsername('');
    setEmployeePassword('');
    router.push('/employees');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Nombre'
        value={employeeName}
        onChangeText={(text) => setEmployeeName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Usuario'
        value={employeeUsername}
        onChangeText={(text) => setEmployeeUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Contraseña'
        secureTextEntry
        value={employeePassword}
        onChangeText={(text) => setEmployeePassword(text)}
        style={styles.input}
      />
      <Button title='Agregar' onPress={handleNewEmployee} />
      <Button title='Cancelar' onPress={() => router.push('/employees')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
