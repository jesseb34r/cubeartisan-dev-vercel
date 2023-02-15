import { createThemeContract } from '@vanilla-extract/css';

import { lightTheme } from './light';

export const vars = createThemeContract(lightTheme);
