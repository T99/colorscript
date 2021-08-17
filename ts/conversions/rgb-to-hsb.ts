import { RGBColorObject } from "../colorspaces/rgb-color";
import { HSBColorObject } from "../colorspaces/hsb-color";

export function rgbToHSB(rgb: RGBColorObject): HSBColorObject {
	
	let result: HSBColorObject = {
		hue: 0,
		saturation: 0,
		brightness: 0
	};
	
	// Intermediate calculations
	let rgbPrime: RGBColorObject = {
		red: rgb.red / 255,
		green: rgb.green / 255,
		blue: rgb.blue / 255
	};
	
	let cMax: number = Math.max(rgbPrime.red, rgbPrime.green, rgbPrime.blue);
	let cMin: number = Math.min(rgbPrime.red, rgbPrime.green, rgbPrime.blue);
	let cDelta: number = cMax - cMin;
	
	// Determine hue
	if (cDelta === 0) result.hue = 0;
	else {
		
		switch (cMax) {
			
			case rgbPrime.red: {
				
				result.hue = 60 * (((rgbPrime.green - rgbPrime.blue) / cDelta) % 6);
				break;
				
			}
			
			case rgbPrime.green: {
				
				result.hue = 60 * (((rgbPrime.blue - rgbPrime.red) / cDelta) + 2);
				break;
				
			}
			
			case rgbPrime.blue: {
				
				result.hue = 60 * (((rgbPrime.red - rgbPrime.green) / cDelta) + 4);
				break;
				
			}
			
		}
		
	}
	
	// Determine saturation
	if (cMax === 0) result.saturation = 0;
	else result.saturation = cDelta / cMax;
	
	// Determine brightness
	result.brightness = cMax;
	
	return result;
	
}
