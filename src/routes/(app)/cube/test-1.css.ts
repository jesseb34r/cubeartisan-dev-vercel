import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space.gutter,
  gap: vars.space.gutter,
});

export const hSeparator = style({
  backgroundColor: vars.color.neutral12,
  height: '1px',
  width: '80%',
});
