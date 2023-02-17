import { style } from '@vanilla-extract/css';

import { vars } from '~/styles';

export const listViewContainer = style({
  '--num-columns': '8',
  '--min-col-size': vars.size[10],
  '--max-col-size': vars.size.sm,

  alignSelf: 'stretch',
  display: 'grid',
  gap: vars.space['2.5'],
  justifyContent: 'center',
  gridTemplateColumns: `repeat(var(--num-columns), minmax(var(--min-col-size), min(calc(100%/var(--num-columns)), var(--max-col-size))))`,
});

export const listViewColumn = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.md,
});

export const listViewColumnTitle = style({
  textAlign: 'center',
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.neutral11,
  marginBottom: vars.space['1.5'],
});

export const listViewCardsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.borderRadius.lg,
  overflow: 'clip',
});

export const listViewCard = style({
  '--card-color': vars.color.primary9,

  backgroundColor: 'var(--card-color)',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'clip',
  fontSize: vars.fontSize.xs,
  lineHeight: vars.lineHeight.xs,
  fontWeight: vars.fontWeight.light,
  paddingInline: vars.space['2.5'],
  paddingBlock: vars.space['0.5'],
});
