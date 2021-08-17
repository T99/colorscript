import type { HSBColorObject } from "../colorspaces/hsb-color";
import type { RGBColorObject } from "../colorspaces/rgb-color";

/**
 * Converts an HSB color to an RGB color.
 * 
 * @param {HSBColorObject} hsb The HSB color to convert to RGB.
 * @returns {RGBColorObject} The provided HSB color in RGB format.
 */
export function hsbToRGB(hsb: HSBColorObject): RGBColorObject {
	
	let result: RGBColorObject = {
		red: 0,
		green: 0,
		blue: 0
	};
	
	let chroma: number = hsb.brightness * hsb.saturation;
	let huePrime: number = hsb.hue / 60;
	let x: number = chroma * (1 - Math.abs((huePrime % 2) - 1));
	
	let adjustmentValue: number = hsb.brightness - chroma;
	
	let adjustedChroma: number = chroma + adjustmentValue;
	let adjustedX: number = x + adjustmentValue;
	
	if (huePrime <= 1)      result = { red: adjustedChroma,  green: adjustedX,       blue: adjustmentValue };
	else if (huePrime <= 2) result = { red: adjustedX,       green: adjustedChroma,  blue: adjustmentValue };
	else if (huePrime <= 3) result = { red: adjustmentValue, green: adjustedChroma,  blue: adjustedX       };
	else if (huePrime <= 4) result = { red: adjustmentValue, green: adjustedX,       blue: adjustedChroma  };
	else if (huePrime <= 5) result = { red: adjustedX,       green: adjustmentValue, blue: adjustedChroma  };
	else if (huePrime <= 6) result = { red: adjustedChroma,  green: adjustmentValue, blue: adjustedX       };
	
	return result;
	
}
