import {
  ROOT_FONT_SIZE,
  XD_DESKTOP_HEIGHT,
  XD_DESKTOP_WIDTH,
  XD_MOBILE_WIDTH
} from "./Variables";

export const calculator = (
  fontSize: number,
  criteria:
    | typeof XD_DESKTOP_WIDTH
    | typeof XD_DESKTOP_HEIGHT
    | typeof XD_MOBILE_WIDTH,
  unit = "vw"
) => {
  const percentage = (fontSize / criteria) * 100;

  return percentage + unit;
};

export const vw = (fontSize: number) => calculator(fontSize, XD_DESKTOP_WIDTH);

export const vwMobile = (fontSize: number) =>
  calculator(fontSize, XD_MOBILE_WIDTH);

export const pxToRem = (px: number): string => `${px / ROOT_FONT_SIZE}rem`;
