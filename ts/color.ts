import type { RGBColor } from "./colorspaces/rgb-color";
import type { CIEXYZColor } from "./colorspaces/cie-xyz-color";
import type { CIELABColor } from "./colorspaces/cie-lab-color";

export abstract class Color {
	
	public abstract toRGB(): RGBColor;
	
	public abstract toCIEXYZ(): CIEXYZColor;
	
	public abstract toCIELAB(): CIELABColor;

	public abstract toString(): string;
	
}
