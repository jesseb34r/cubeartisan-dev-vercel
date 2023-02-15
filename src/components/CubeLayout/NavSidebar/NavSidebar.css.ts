import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';
import { tokens } from '~/styles/tokens';

export const navSidebar = style({
  display: 'flex',
  flexDirection: 'column',
  borderRight: 'none',
  overflow: 'hidden',

  '@media': {
    [`screen and (min-width: ${tokens.screens.laptop})`]: {
      width: vars.size.md,
      padding: vars.space.gutter,
      borderRight: `1px solid ${vars.color.neutral12}`,
    },
  },

  selectors: {
    '&[data-open="true"]': {
      width: vars.size.md,
      padding: vars.space.gutter,
      borderRight: `1px solid ${vars.color.neutral12}`,
    },
    '&[data-open="false"]': {
      width: 0,
      padding: 0,
      borderRight: 'none',
    },
  },
});

export const navSidebarContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space['2.5'],
});

export const navSidebarListTitle = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeight['2xl'],
  fontWeight: vars.fontWeight.semibold,
});

export const navSidebarList = style({
  marginLeft: vars.space.gutter,
});

export const navSidebarListLink = style({
  color: vars.color.neutral11,

  ':hover': {
    color: vars.color.neutral12,
  },
});

export const navSidebarLink = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeight['2xl'],
  color: vars.color.neutral11,

  ':hover': {
    color: vars.color.neutral12,
  },
});

export const navSidebarCloseButton = style({
  alignSelf: 'end',
  color: vars.color.neutral11,
  height: vars.size[8],
  width: vars.size[8],
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.neutral3,
  outline: `2px solid ${vars.color.neutral6}`,

  ':hover': {
    backgroundColor: vars.color.neutral4,
    outlineColor: vars.color.neutral7,
  },

  ':active': {
    backgroundColor: vars.color.neutral5,
  },
});

export const navSidebarCloseButtonIcon = style({
  height: vars.size[8],
  width: vars.size[8],
});
