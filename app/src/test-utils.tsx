import { ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react-native';
import React from 'react';
import { StoreProvider } from './store/Store';
import { theme } from './theming/theme';

type AllTheProvidersProps = {
  children: JSX.Element;
};

function AllTheProviders({ children }: AllTheProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  );
}

const customRender = (
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions | undefined
) => render(component, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { customRender as render };
