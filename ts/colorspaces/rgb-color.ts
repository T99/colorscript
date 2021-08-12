import { Color } from "../color";
import { CIEXYZColor } from "./cie-xyz-color";
import { CIELABColor } from "./cie-lab-color";

export class RGBColor extends Color {
	
	protected readonly red: number;
	
	protected readonly green: number;
	
	protected readonly blue: number;
	
	public constructor(red: number, green: number, blue: number) {
		
		super();
		
	}
	
	public toRGB(): RGBColor {
		
		return this;
		
	}
	
	public toCIEXYZ(): CIEXYZColor {
		
		return undefined;
		
	}
	
	
	public toCIELAB(): CIELABColor {
		
		return this.toCIEXYZ().toCIELAB();
		
	}
	
	public toString(): string {
		
		return `rgb(${this.red}, ${this.green}, ${this.blue})`;
		
	}
	
}
