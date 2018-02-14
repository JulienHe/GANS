import { css } from 'styled-components';

/* MEDIA QUERIES */
export const screenSizes = {
  phone: 480,
  tablet: 768,
  desktop: 992,
  largeScreen: 1700,
};

/* eslint-disable no-param-reassign */
/* Iterate through the screenSizes and create a media template */
export const media = Object.keys(screenSizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${screenSizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
/* eslint-enable no-param-reassign */
