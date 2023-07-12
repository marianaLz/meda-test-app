import { useContext, useEffect } from 'react';
import { Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { Link, SplashScreen, Stack } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Context, ContextProvider } from '@/context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { setLoggedInUser } = useContext(Context);

  return (
    <ContextProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen
          name='posts'
          options={{
            headerTitle: 'Posts de la API',
          }}
        />
        <Stack.Screen
          name='employees'
          options={{
            headerTitle: 'Lista de empleados',
            headerRight: () => (
              <Link href='/' asChild onPress={() => setLoggedInUser('')}>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name='sign-out'
                      size={25}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name='modal'
          options={{
            headerTitle: 'Agregar nuevo empleado',
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name='profile'
          options={{
            headerTitle: 'Perfil',
            headerRight: () => (
              <Link href='/' asChild onPress={() => setLoggedInUser('')}>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name='sign-out'
                      size={25}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
      </Stack>
    </ContextProvider>
  );
}
