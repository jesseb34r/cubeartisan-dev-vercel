import { style } from '@vanilla-extract/css';

export const appContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const appBody = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});
