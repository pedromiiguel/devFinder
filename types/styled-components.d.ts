import theme from '../src/styles/light';
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      textColor: string;
      background: string;
      titleColor: string;
      iconColor: string;
      inputWrapperColor: string;
      white: string;
      cardTitleColor: string;
      cardText: string;
      buttonHoverColor: string;
      themeButtonColor: string;
      themeButtonHoverColor: string;
      danger: string;
    };
  }
}
