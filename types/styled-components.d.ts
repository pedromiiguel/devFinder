import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      textColor: string
      background: string
      titleColor: string
      iconColor: string
      inputWrapperColor: string
      white: string
      cardTitleColor: string
      cartText: string
      buttonHoverColor: string
      themeButtonColor: string
      themeButtonHoverColor: string
      danger: string
    }
  }
}
