import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';
import { tokens } from '~/styles/tokens';

export const layoutContainer = style({
  flexGrow: 1,
  display: 'flex',
  width: '100vw', // revisit this
});

export const mainContainer = style({
  flexGrow: 1,
  position: 'relative',
});

export const navSidebarOpenButton = style({
  position: 'absolute',
  top: 0,
  left: 0,
  margin: vars.space.gutter,
  display: 'grid',
  placeContent: 'center',
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

  '@media': {
    [`screen and (min-width: ${tokens.screens.laptop})`]: {
      display: 'none',
    },
  },

  selectors: {
    '&[data-open="true"]': {
      display: 'none',
    },
    '&[data-open="false"]': {
      display: 'grid',
    },
  },
});

export const navSidebarOpenButtonIcon = style({
  height: vars.size[6],
  width: vars.size[6],
});
