import { Color } from "./Color";
import { createHexCodeDestructurer } from "./util/hex-helper";

type PlainRGBObject = {
	red: number,
	green: number,
	blue: number
};

type RGBHexDestructurer = (hexCode: string) => PlainRGBObject;

// @StaticImplements<StaticColor>()
export class RGBColor implements Color {
	
	protected static hexDestructurer?: RGBHexDestructurer;
	
	protected readonly red: number;
	
	protected readonly green: number;
	
	protected readonly blue: number;
	
	public constructor(red: number, green: number, blue: number) {
		
		this.red = red;
		this.green = green;
		this.blue = blue;
		
	}
	
	public static getHexDestructerer(): RGBHexDestructurer {
		
		if (RGBColor.hexDestructurer === undefined) {
			
			RGBColor.hexDestructurer = createHexCodeDestructurer({
				red: {
					startIndex: 0,
					count: 2
				},
				green: {
					startIndex: 2,
					count: 2
				},
				blue: {
					startIndex: 4,
					count: 2
				}
			});
			
		}
		
		return this.hexDestructurer as RGBHexDestructurer;
		
	}
	
	public static fromComponents(componentsObject: PlainRGBObject): RGBColor;
	
	public static fromComponents(components: [number, number, number]): RGBColor;
	
	public static fromComponents(...components: number[]): RGBColor;
	
	public static fromComponents(componentsObjectOrFirstComponent: PlainRGBObject | [number, number, number] | number,
								 ...components: number[]): RGBColor {
		
		if (arguments.length === 1) {
			
			if ((componentsObjectOrFirstComponent as PlainRGBObject)?.red !== undefined) {
				
				let rgbObject: PlainRGBObject = componentsObjectOrFirstComponent as PlainRGBObject;
				
				let expectedProperties: (keyof PlainRGBObject)[] = ["red", "green", "blue"];
				
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
	
	public static fromHex(hexCode: string): RGBColor {
		
		return RGBColor.fromComponents(RGBColor.getHexDestructerer()(hexCode));
		
	}
	
	public getRed(): number {
		
		return this.red;
		
	}
	
	public getGreen(): number {
		
		return this.green;
		
	}
	
	public getBlue(): number {
		
		return this.blue;
		
	}
	
	public getColorTypeID(): string {
		
		return "rgb";
		
	}
	
	public getComponents(): any[] {
		
		return [this.getRed(), this.getGreen(), this.getBlue()];
		
	}
	
	public toHex(includePoundSign: boolean): string {
		
		return "";
		
	}
	
}
