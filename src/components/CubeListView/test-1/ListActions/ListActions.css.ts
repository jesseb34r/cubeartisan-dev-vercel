import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const actionsContainer = style({
  display: 'flex',
  gap: vars.space.gutter,
  width: vars.size['content-70'],
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
  backgroundColor: vars.color.neutral3,
  outline: `${vars.borderSize.large} solid ${vars.color.neutral6}`,
  padding: vars.space[1],
  borderRadius: vars.borderRadius.md,
  width: 'auto',
  paddingLeft: vars.space[10],
});

export const searchIconContainer = style({
  position: 'absolute',
  top: '50%',
  left: vars.space['2.5'],
  translate: '0 -50%',
  marginBlock: 'auto',
  color: vars.color.neutral11,
});

export const searchIcon = style({
  width: vars.space[6],
  height: vars.space[6],
});

export const sortButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space['2.5'],
  backgroundColor: vars.color.neutral3,
  outline: `${vars.borderSize.large} solid ${vars.color.neutral6}`,
  paddingInline: vars.space['2.5'],
  paddingBlock: vars.space[1],
  borderRadius: vars.borderRadius.md,
  color: vars.color.neutral11,

  ':hover': {
    backgroundColor: vars.color.neutral4,
    outlineColor: vars.color.neutral7,
    color: vars.color.neutral12,
  },

  ':active': {
    backgroundColor: vars.color.neutral5,
  },
});

export const editButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space['2.5'],
  backgroundColor: vars.color.success3,
  outline: `${vars.borderSize.large} solid ${vars.color.success6}`,
  paddingInline: vars.space['2.5'],
  paddingBlock: vars.space[1],
  borderRadius: vars.borderRadius.md,
  color: vars.color.success11,

  ':hover': {
    backgroundColor: vars.color.success4,
    outlineColor: vars.color.success7,
    color: vars.color.success12,
  },

  ':active': {
    backgroundColor: vars.color.success5,
  },
});
