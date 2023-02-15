import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: vars.space.gutter,
  textAlign: 'center', // temp
});
