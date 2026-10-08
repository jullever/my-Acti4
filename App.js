import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import { colors } from './globalStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // Global header styling applied to all screens
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 17,
          },
          headerBackTitleVisible: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
          animation: 'slide_from_right',
        }}
      >
        {/* Screen 1 – Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '🎬 Movie Explorer', headerShown: false }}
        />

        {/* Screen 2 – Movie Catalog */}
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{ title: 'Browse Movies' }}
        />

        {/* Screen 3 – Movie Details */}
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={({ route }) => ({
            title: route.params?.movie?.title ?? 'Details',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
