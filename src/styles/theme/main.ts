import { transparentize } from 'polished'
import {
  animations,
  animationTimings,
  breakpoints,
  colors,
  effects,
  layers,
  shapes,
  spacings,
  typography,
  transitions
} from 'styles/tokens'

export const theme = {
  title: 'main',

  colors: {
    primary: {
      main: colors.white
    },

    text: {
      light: colors.white,
      purplePrimary: colors.purple['400'],
      purpleSecond: colors.purple['200'],
      medium: colors.gray,
      dark: colors.black['200']
    },

    overlay: {
      light: transparentize(0.4, colors.white),
      mediumLight: transparentize(0.68, colors.black['400']),
      grayer: transparentize(0.6, colors.black['200']),
      dark: transparentize(0.32, colors.black['400']),
      darker: transparentize(0.4, colors.black['400'])
    }
  },
  animations,
  animationTimings,
  breakpoints,
  effects,
  layers,
  spacings,
  shapes,
  typography,
  transitions
} as const
