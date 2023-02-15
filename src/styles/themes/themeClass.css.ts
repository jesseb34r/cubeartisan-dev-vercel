import { assignVars, style } from '@vanilla-extract/css';

import { darkTheme } from './dark';
import { lightTheme } from './light';
import { vars } from './vars.css';

export const themeClass = style({
  vars: assignVars(vars, lightTheme),
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(vars, darkTheme),
    },
  },
});
