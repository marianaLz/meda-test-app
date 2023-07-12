import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import PrimaryButton from '@/components/Buttons';
import Container from '@/components/Container';
import Divider from '@/components/Divider';
import Title from '@/components/Typography';

import { Context, Employee } from '@/context';

type EmployeeItem = {
  item: Employee;
};

export default function EmployeesScreen() {
  const router = useRouter();
  const { employees } = useContext(Context);

  return (
    <Container>
      <PrimaryButton
        onPress={() => router.push('/modal')}
        title='Agregar empleado'
      />

      <FlatList
        data={employees}
        renderItem={({ item }: EmployeeItem) => (
          <View>
            <Title>{item.username}</Title>
            <Text>{item.name}</Text>
            <Divider />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </Container>
  );
}
