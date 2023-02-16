import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  borderBottom: `1px solid ${vars.color.neutral12}`,
});

export const navContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: vars.size['content-80'],
  height: vars.size.xs,
});

export const navSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.gutter,
});

export const logoIconContainer = style({
  paddingBlock: vars.space['0.5'],
  paddingInline: vars.space['1.5'],
  borderRadius: vars.borderRadius.lg,

  ':hover': {
    backgroundColor: vars.color.neutral2,
  },
});

export const logoIcon = style({
  height: vars.size[12],
});

export const navItem = style({
  color: vars.color.neutral11,

  ':hover': {
    color: vars.color.neutral12,
    textDecoration: 'underline',
  },
});

export const icon = style({
  width: vars.size[6],
  height: vars.size[6],
  color: vars.color.neutral11,
  borderRadius: vars.borderRadius.md,

  ':hover': {
    color: vars.color.neutral12,
    backgroundColor: vars.color.neutral5,
  },
});

export const avatarContainer = style({
  display: 'inline-flex',
  gap: vars.space[1],
  alignItems: 'center',
  paddingBlock: vars.space['0.5'],
  paddingInline: vars.space['1.5'],
  borderRadius: vars.borderRadius.lg,

  ':hover': {
    backgroundColor: vars.color.neutral2,
  },
});

export const avatarIcon = style({
  width: vars.size[10],
  height: vars.size[10],
  borderRadius: vars.borderRadius.full,
  color: vars.color.primary11,
});
