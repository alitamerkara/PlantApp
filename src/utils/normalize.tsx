import { PixelRatio, Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scalew = SCREEN_WIDTH / 390;
const scaleh = SCREEN_HEIGHT / 775;

export function normalizeh(size: number) {
  const newSize = size * scaleh;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizew(size: number) {
  const newSize = size * scalew;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
