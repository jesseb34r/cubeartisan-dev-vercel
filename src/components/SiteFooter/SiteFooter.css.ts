import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const footer = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: vars.color.neutral2,
  paddingBlock: vars.space.gutter,
});

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-around',
  width: vars.size['content-80'],
});

export const sectionTitle = style({
  fontSize: vars.fontSize.lg,
  lineHeight: vars.lineHeight.lg,
  textAlign: 'center',
  marginBottom: vars.space[1],
});

export const sectionItems = style({
  textAlign: 'center',
  color: vars.color.neutral11,

  ':hover': {
    color: vars.color.neutral12,
  },
});
