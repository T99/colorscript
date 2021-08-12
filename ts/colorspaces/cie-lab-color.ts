import { Color } from "../color";
import { RGBColor } from "./rgb-color";
import { CIEXYZColor } from "./cie-xyz-color";

export class CIELABColor extends Color {
	
	protected readonly lStar: number;
	
	protected readonly aStar: number;
	
	protected readonly bStar: number;
	
	public constructor(lStar: number, aStar: number, bStar: number) {
		
		super();
		
		this.lStar = lStar;
		this.aStar = aStar;
		this.bStar = bStar;
		
	}
	
	public toRGB(): RGBColor {
		
		return undefined;
		
	}
	
	public toCIEXYZ(): CIEXYZColor {
		
		return undefined;
		
	}
	
	public toCIELAB(): CIELABColor {
		
		return this;
		
	}
	
	public toString(): string {
		
		return "";
		
	}
}
