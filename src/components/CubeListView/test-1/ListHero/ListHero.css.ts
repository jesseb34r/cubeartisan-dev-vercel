import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const hero = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: vars.size['content-80'],
});

export const heroHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space['2.5'],
});

export const heroTitle = style({
  fontSize: vars.fontSize['5xl'],
  lineHeight: vars.lineHeight['5xl'],
  fontWeight: vars.fontWeight.bold,
});

export const heroAuthor = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeight['2xl'],
  color: vars.color.neutral11,
});

export const heroActions = style({
  display: 'flex',
  gap: vars.space.gutter,
  alignItems: 'center',
});

export const heroActionContainer = style({
  width: vars.size[8],
  height: vars.size[8],
});

export const heroActionIcon = style({
  width: vars.size[8],
  height: vars.size[8],
});

export const heroDescription = style({
  width: vars.size.md,
});
