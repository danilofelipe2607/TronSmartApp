import React, { useState } from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import theme from '@theme';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateNavigator, PublicNavigator } from './src/navigation';
import { store } from './src/redux/store';

const queryClient = new QueryClient();

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <NavigationContainer>
                {isAuthenticated ? <PrivateNavigator /> : <PublicNavigator />}
              </NavigationContainer>
            </ThemeProvider>
          </NativeBaseProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider >
  );
};
