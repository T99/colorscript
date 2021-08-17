export abstract class Color {
	
	public abstract getColorTypeID(): string;
	
	public abstract getComponents(): any[];
	
	public abstract toHex(includePoundSign: boolean): string;
	
}

export interface StaticColor {
	
	new(): Color;
	
	fromComponents(componentsObject: object): Color;

	fromComponents(componentsArray: any[]): Color;

	fromComponents(...componentsArray: any[]): Color;
	
	fromHex(hexCode: string): Color;
	
}
