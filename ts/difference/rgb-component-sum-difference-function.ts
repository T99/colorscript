import type { Color } from "../color";
import type { ColorDifferenceFunction } from "./color-difference-function";

export const rgbComponentSumDifferenceFunction: ColorDifferenceFunction = (color1: Color, color2: Color): number => {
	
	return (
		Math.abs(color1.toRGB().)
	)
	
}
