import { style } from '@vanilla-extract/css';

import { vars } from './styles';

export const body = style({
  backgroundColor: vars.color.neutral1,
  color: vars.color.neutral12,

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
