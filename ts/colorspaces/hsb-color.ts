import { Color, StaticColor } from "../color";
import { StaticImplements } from "../util/static-implements";
import { RGBColor } from "./rgb-color";
import { RGBColorObject } from "./rgb-color";
import { hsbToRGB } from "../conversions/hsb-to-rgb";

export type HSBColorObject = {
	hue: number,
	saturation: number,
	brightness: number
};

export type HSBColorArray = [number, number, number];

@StaticImplements<StaticColor<HSBColor>>()
export class HSBColor extends Color<HSBColorObject, HSBColorArray> {
	
	protected readonly hue: number;
	
	protected readonly saturation: number;
	
	protected readonly brightness: number;
	
	public constructor(hue: number, saturation: number, brightness: number) {
		
		super();
		
		this.hue = hue;
		this.saturation = saturation;
		this.brightness = brightness;
		
	}
	
	public static getColorTypeID(): string {
		
		return "hsb";
		
	}
	
	public static fromComponents(componentsObject: HSBColorObject): HSBColor;
	
	public static fromComponents(components: HSBColorArray): HSBColor;
	
	public static fromComponents(...components: number[]): HSBColor;
	
	public static fromComponents(componentsObjectOrFirstComponent: HSBColorObject | HSBColorArray | number,
								 ...components: number[]): HSBColor {
		
		if (arguments.length === 1) {
			
			if ((componentsObjectOrFirstComponent as RGBColorObject)?.red !== undefined) {
				
				let rgbObject: RGBColorObject = componentsObjectOrFirstComponent as RGBColorObject;
				
				let expectedProperties: (keyof RGBColorObject)[] = ["red", "green", "blue"];
				
				for (let expectedProperty of expectedProperties) {
					
					if (rgbObject[expectedProperty] === undefined) {
						
						throw new Error(
							`Expected property '${expectedProperty}' not found when initializing RGBColor from ` +
							"components after finding property 'red'..."
						);
						
					} else if (typeof rgbObject[expectedProperty] !== "number") {
						
						throw new Error(
							`Property '${expectedProperty}' expected to be of type 'number', but instead found type ` +
							`${typeof rgbObject[expectedProperty]}...`
						);
						
					}
					
				}
				
				return new RGBColor(rgbObject.red, rgbObject.green, rgbObject.blue);
				
			} else if (Array.isArray(componentsObjectOrFirstComponent)) {
				
				let componentsArray: [number, number, number] = componentsObjectOrFirstComponent as [number, number, number];
				
				if (componentsArray.length !== 3) {
					
					throw new Error(
						"Expected component initializer array to be of length 3, instead received array of size " +
						`${componentsArray.length}...`
					);
					
				}
				
				for (let i: number = 0; i < componentsArray.length; i++) {
					
					if (typeof componentsArray[i] !== "number") {
						
						throw new Error(
							"Expected component initializer array to consist of only numbers, but found " +
							`'${typeof componentsArray[i]}' at index ${i}...`
						);
						
					}
					
				}
				
				return new RGBColor(componentsArray[0], componentsArray[1], componentsArray[2]);
				
			} else {
				
				throw new Error(
					"Expected PlainRGBObject or [number, number, number] for single argument RGBColor#fromComponents " +
					`call, but instead recieved value of type '${typeof componentsObjectOrFirstComponent}'`
				);
				
			}
			
		} else if (arguments.length === 3) {
			
			return RGBColor.fromComponents([
				componentsObjectOrFirstComponent as number,
				components[0],
				components[1]
			]);
			
		} else {
			
			throw new Error(
				`Expected 1 or 3 value(s) for RGBColor#fromComponents call, but instead received ${arguments.length}...`
			);
			
		}
		
	}
	
	public static fromHex(hexCode: string): HSBColor {
		
		return new HSBColor(0, 0, 0);
		
	}
	
	public getHue(): number {
		
		return this.hue;
		
	}
	
	public getSaturation(): number {
		
		return this.saturation;
		
	}
	
	public getBrightness(): number {
		
		return this.brightness;
		
	}
	
	public toRGB(): RGBColor {
		
		return RGBColor.fromComponents(hsbToRGB(this.getComponentsObject()));
		
	}
	
	public toHSB(): HSBColor {
		
		return this;
		
	}
	
	public getComponentsObject(): HSBColorObject {
		
		return {
			hue: this.getHue(),
			saturation: this.getSaturation(),
			brightness: this.getBrightness()
		};
		
	}
	
	public getComponentsArray(): HSBColorArray {
		
		return [this.getHue(), this.getSaturation(), this.getBrightness()];
		
	}
	
	public toHex(includePoundSign: boolean): string {
		
		return "";
		
	}
	
}
