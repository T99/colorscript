import { Color } from "../color";
import { RGBColor } from "./rgb-color";

export class CIEXYZColor extends Color {
	
	protected readonly x: number;
	
	protected readonly y: number;
	
	protected readonly z: number;
	
	public constructor(x: number, y: number, z: number) {
		
		super();
		
		this.x = x;
		this.y = y;
		this.z = z;
		
	}
	
	public toRGB(): RGBColor {
		
		return undefined as any;
		
	}
	
	public toCIEXYZ(): CIEXYZColor {
		
		return this;
		
	}
	
	public toString(): string {
		
		return "";
		
	}
	
}
