import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      tertiary: string
      white: string
      black: string
      gray: string
      detail: string
      success: string
      info: string
      warning: string
      danger: string
      purpleLight: string
      purpleDark: string
      goldLight: string
      goldDark: string
    }
  }
}
