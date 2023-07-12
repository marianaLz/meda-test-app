import { useContext, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

import { Button, View } from '@/components/Themed';
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
    <View style={styles.container}>
      <Button
        disabled={employeeLogin}
        onPress={handleLoginAsCompany}
        title='Login empresa'
      />
      <Button
        disabled={companyLogin}
        onPress={handleLoginAsEmployee}
        title='Login empleado'
      />
      <Button
        disabled={companyLogin || employeeLogin}
        onPress={() => router.push('/posts')}
        title='Ver posts'
      />

      {isLogin && (
        <View>
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            title='Iniciar sesión'
            onPress={companyLogin ? loginAsCompany : loginAsEmployee}
          />
          <Button title='Cancelar' onPress={handleClear} />
        </View>
      )}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
