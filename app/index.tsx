import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';

import Container from '@/components/Container';
import Divider from '@/components/Divider';
import Input from '@/components/Input';
import PrimaryButton, { SecondaryButton } from '@/components/Buttons';

import { Context, Employee } from '@/context';

export default function HomeScreen() {
  const router = useRouter();
  const { employees, setLoggedInUser } = useContext(Context);
  const [isLogin, setIsLogin] = useState(false);
  const [companyLogin, setCompanyLogin] = useState(false);
  const [employeeLogin, setEmployeeLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginAsCompany = () => {
    setIsLogin(true);
    setCompanyLogin(true);
  };

  const handleLoginAsEmployee = () => {
    setIsLogin(true);
    setEmployeeLogin(true);
  };

  const handleClear = () => {
    setCompanyLogin(false);
    setEmployeeLogin(false);
    setIsLogin(false);
    setUsername('');
    setPassword('');
  };

  const loginAsCompany = () => {
    if (username === 'admin' && password === 'test') {
      router.push('/employees');
      handleClear();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const loginAsEmployee = () => {
    const employee = employees.find(
      (employee: Employee) =>
        employee.username === username && employee.password === password
    );
    if (employee) {
      setLoggedInUser(employee.name);
      router.push('/profile');
      handleClear();
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Container>
      <PrimaryButton
        disabled={employeeLogin}
        onPress={handleLoginAsCompany}
        title='Login empresa'
      />
      <PrimaryButton
        backgroundColor='#262A56'
        disabled={companyLogin}
        onPress={handleLoginAsEmployee}
        title='Login empleado'
      />
      <PrimaryButton
        backgroundColor='#000'
        disabled={companyLogin || employeeLogin}
        onPress={() => router.push('/posts')}
        title='Ver posts'
      />

      {isLogin && (
        <React.Fragment>
          <Divider marginVertical={30} />
          <Input
            placeholder='Nombre de usuario'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder='Contraseña'
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <PrimaryButton
            title='Iniciar sesión'
            onPress={companyLogin ? loginAsCompany : loginAsEmployee}
          />
          <SecondaryButton title='Cancelar' onPress={handleClear} />
        </React.Fragment>
      )}
    </Container>
  );
}
