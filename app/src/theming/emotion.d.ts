import '@emotion/react';
import { LibTheme } from 'some-lib';

declare module '@emotion/react' {
  export interface Theme {
    background: {
      default: string;
      light: string;
      primary: string;
      secondary: string;
      accent: string;
    };
    text: {
      default: string;
      primary: string;
      secondary: string;
      accent: string;
    };
  }
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
