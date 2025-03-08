import { windowWidth } from "../src/utils/Dimensions";

export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 12;
const s = windowWidth * 0.68;
export const tutorial2Spec = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.5,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING * 2,
};
