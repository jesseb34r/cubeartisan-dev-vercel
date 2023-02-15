import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const editSidebar = style({
  display: 'flex',
  flexDirection: 'column',
  borderLeft: 'none',
  overflow: 'hidden',

  selectors: {
    '&[data-open="true"]': {
      width: vars.size.md,
      padding: vars.space.gutter,
      borderLeft: `1px solid ${vars.color.neutral12}`,
    },
    '&[data-open="false"]': {
      width: 0,
      padding: 0,
      borderLeft: 'none',
    },
  },
});

export const editSidebarContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space['2.5'],
});

export const editSidebarTitle = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeight['2xl'],
  fontWeight: vars.fontWeight.semibold,
});

export const editSidebarCloseButton = style({
  alignSelf: 'start',
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

export const editSidebarCloseButtonIcon = style({
  height: vars.size[8],
  width: vars.size[8],
});
