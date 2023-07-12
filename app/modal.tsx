import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';

import Container from '@/components/Container';
import Input from '@/components/Input';
import PrimaryButton, { SecondaryButton } from '@/components/Buttons';

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
    <Container>
      <Input
        placeholder='Nombre'
        value={employeeName}
        onChangeText={(text) => setEmployeeName(text)}
      />
      <Input
        placeholder='Usuario'
        value={employeeUsername}
        onChangeText={(text) => setEmployeeUsername(text)}
      />
      <Input
        placeholder='Contraseña'
        secureTextEntry
        value={employeePassword}
        onChangeText={(text) => setEmployeePassword(text)}
      />
      <PrimaryButton title='Agregar' onPress={handleNewEmployee} />
      <SecondaryButton
        title='Cancelar'
        onPress={() => router.push('/employees')}
      />
    </Container>
  );
}
