import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { client } from './src/gql/setup';
import MainNavigation from './src/routes/MainNavigation';
import { StoreProvider } from './src/store/Store';
import { theme } from './src/theming/theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ApolloProvider client={client}>
          <StoreProvider>
            <MainNavigation />
          </StoreProvider>
        </ApolloProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
