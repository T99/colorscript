import { Color } from "./color";

export class ColorOccurrence {
	
	protected readonly color: Color;
	
	protected count: number;
	
	public constructor(color: Color, count: number = 1) {
		
		this.color = color;
		this.count = count;
		
	}
	
	public getColor(): Color {
		
		return this.color;
		
	}
	
	public getCount(): number {
		
		return this.count;
		
	}
	
	public increment(amount: number = 1, prefix: boolean = false): number {
		
		if (prefix) {
			
			let result: number = this.count;
			this.count += amount;
			return result;
			
		} else {
			
			this.count += amount;
			return this.count;
			
		}
		
	}
	
	public decrement(amount: number = 1, prefix: boolean = false): number {
		
		return this.increment(-amount, prefix);
		
	}
	
}
