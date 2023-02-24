import { style } from '@vanilla-extract/css';

import { vars } from '@cubeartisan/cubeartisan/styles';

export const navContainer = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginInline: 'auto',
  height: vars.size.xs,
  alignItems: 'center',
});

export const navSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.space['2.5'],
});

export const siteLogo = style({
  height: vars.size[10],
});

export const navItemContainer = style({
  color: vars.color.neutral11,
  padding: vars.space['1.5'],
  borderRadius: vars.borderRadius.lg,

  ':hover': {
    color: vars.color.neutral12,
    backgroundColor: vars.color.neutral4,
    outline: `1px solid ${vars.color.neutral6}`,
  },

  ':active': {
    backgroundColor: vars.color.neutral5,
    outline: `1px solid ${vars.color.neutral7}`,
  },

  selectors: {
    '&:has(:focus-visible)': {
      backgroundColor: vars.color.neutral4,
      outline: `3px solid ${vars.color.neutral6}`,
    },
  },
});

export const navItem = style({
  outline: 'none',
});

export const navIcon = style({
  width: vars.size[5],
  height: vars.size[5],
});

export const siteSearch = style({
  position: 'relative',
});

export const searchInput = style({
  ':hover': {
    backgroundColor: vars.color.neutral4,
  },
});

export const searchIconContainer = style({
  position: 'absolute',
  top: '20%',
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

export const darkmodeToggleRoot = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space['2.5'],
});

export const darkmodeToggleControl = style({
  justifySelf: 'flex-end',
  display: 'inline-flex',
  alignItems: 'center',
  height: vars.space[4],
  width: vars.space[8],
  borderRadius: vars.borderRadius.xl,
  backgroundColor: vars.color.neutral3,
  outline: `solid ${vars.borderSize.standard} ${vars.color.neutral7}`,
  cursor: 'pointer',

  selectors: {
    '&[data-hover]': {
      backgroundColor: vars.color.neutral4,
      outline: `solid ${vars.borderSize.standard} ${vars.color.neutral8}`,
    },
    '&[data-checked]': {
      outline: 'none',
      backgroundColor: vars.color.primary7,
    },
    '&[data-focus]': {
      outline: `solid ${vars.borderSize['focus-ring']} ${vars.color.neutral7}`,
    },
  },
});

export const darkmodeToggleThumb = style({
  height: vars.space[7],
  width: vars.space[7],
  borderRadius: vars.borderRadius.full,
  transition: '200ms ease transform',
  color: vars.color.primary12,
  backgroundColor: vars.color.primary6,
  display: 'grid',
  placeItems: 'center',
  transform: 'translateX(-20%)',

  selectors: {
    '&[data-checked]': {
      transform: `translateX(${vars.space[4]})`,
      backgroundColor: vars.color.primary4,
    },
  },
});

export const darkmodeToggleIcon = style({
  height: vars.space[5],
  width: vars.space[5],
});
