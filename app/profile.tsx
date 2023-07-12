import { useContext } from 'react';
import { Image } from 'react-native';

import Container from '@/components/Container';
import Title from '@/components/Typography';

import { Context } from '@/context';

export default function ProfileScreen() {
  const { loggedInUser } = useContext(Context);

  return (
    <Container>
      <Title>Bienvenidx a tu perfil, {loggedInUser}.</Title>
      <Image
        style={{ width: '100%', height: '50%' }}
        source={{
          uri: 'https://media.tenor.com/QaPEi-tcFXQAAAAC/gato-besando-a-la-camara.gif',
        }}
      />
    </Container>
  );
}
