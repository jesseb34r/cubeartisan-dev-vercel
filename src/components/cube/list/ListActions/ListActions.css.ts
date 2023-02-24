import { style } from '@vanilla-extract/css';

import { vars } from '@cubeartisan/cubeartisan/styles';

export const actionsContainer = style({
  display: 'flex',
  gap: vars.space.gutter,
  width: vars.size['content-70'],
  marginInline: 'auto',
});

export const viewOptionsContainer = style({
  display: 'flex',
  alignItems: 'center',
  padding: vars.space['1'],
  gap: vars.space.gutter,
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.neutral3,
  outline: `${vars.borderSize.large} solid ${vars.color.neutral6}`,

  ':hover': {
    outlineColor: vars.color.neutral7,
  },
});

export const viewOption = style({
  color: vars.color.neutral11,

  ':hover': {
    color: vars.color.neutral12,
  },
});

export const viewOptionIcon = style({
  width: vars.space[6],
  height: vars.space[6],
});

export const searchContainer = style({
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
});

export const searchInput = style({
  width: '100%',

  selectors: {
    '&:not(:focus)': {
      paddingLeft: vars.space[8],
    },
  },
});

export const searchIconContainer = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '6px',
  color: vars.color.neutral11,

  selectors: {
    ':focus ~ &': {
      display: 'none',
    },
    ':hover ~ &': {
      color: vars.color.neutral12,
    },
  },
});

export const searchIcon = style({
  width: vars.space[6],
  height: vars.space[6],
});

export const sortButton = style({
  gap: vars.space['2.5'],
});

export const editButton = style({
  gap: vars.space['2.5'],
});
