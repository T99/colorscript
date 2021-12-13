import { RGBColor } from "./colorspaces/rgb-color";

export abstract class Color<CO extends object, CA extends any[]> {
	
	public abstract toRGB(): RGBColor;
	
	public abstract toHSB(): 
	
	public abstract getComponentsObject(): CO;
	
	public abstract getComponentsArray(): CA;
	
	public abstract toHex(includePoundSign: boolean): string;
	
	public toString(): string {
		
		let colorID: string = (this.constructor as StaticColor<Color<CO, CA>>).getColorTypeID();
		let colorComponents: any[] = this.getComponentsArray();
		
		return `${colorID}(${colorComponents.join(", ")})`;
		
	}
	
}

type ExtractColorObject<C> = C extends Color<infer T, []> ? T : never;

type ExtractColorArray<C> = C extends Color<{}, infer T> ? T : never;

export interface StaticColor<C extends Color<any, any>> {
	
	new(...args: any[]): C
	
	getColorTypeID(): string;
	
	fromComponents(componentsObject: ExtractColorObject<C>): C;
	
	fromComponents(componentsArray: ExtractColorArray<C>): C;
	
	fromComponents(...componentsArray: any[]): C;
	
	fromHex(hexCode: string): C;
	
}
