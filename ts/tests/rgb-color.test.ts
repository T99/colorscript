import { RGBColor } from "../rgb-color";

let color: RGBColor;

describe("Initialization methods", (): void => {
	
	describe("Regular constructor call", (): void => {
		
		test("...for 'black' (rgb(0, 0, 0)).", (): void => {
			
			color = new RGBColor(0, 0, 0);
			
			expect(color.getRed()).toBe(0);
			expect(color.getGreen()).toBe(0);
			expect(color.getBlue()).toBe(0);
			
		});
		
		test("...for 'white' (rgb(255, 255, 255)).", (): void => {
			
			color = new RGBColor(255, 255, 255);
			
			expect(color.getRed()).toBe(255);
			expect(color.getGreen()).toBe(255);
			expect(color.getBlue()).toBe(255);
			
		});
		
		test("...for orange (rgb(207, 81, 19)).", (): void => {
			
			color = new RGBColor(207, 81, 19);
			
			expect(color.getRed()).toBe(207);
			expect(color.getGreen()).toBe(81);
			expect(color.getBlue()).toBe(19);
			
		});
		
	});
	
	describe("Object component constructor call", (): void => {
		
		test("...for 'black' (rgb(0, 0, 0)).", (): void => {
			
			color = RGBColor.fromComponents({
				red: 0,
				green: 0,
				blue: 0
			});
			
			expect(color.getRed()).toBe(0);
			expect(color.getGreen()).toBe(0);
			expect(color.getBlue()).toBe(0);
			
		});
		
		test("...for 'white' (rgb(255, 255, 255)).", (): void => {
			
			color = RGBColor.fromComponents({
				red: 255,
				green: 255,
				blue: 255
			});
			
			expect(color.getRed()).toBe(255);
			expect(color.getGreen()).toBe(255);
			expect(color.getBlue()).toBe(255);
			
		});
		
		test("...for orange (rgb(207, 81, 19)).", (): void => {
			
			color = RGBColor.fromComponents({
				red: 207,
				green: 81,
				blue: 19
			});
			
			expect(color.getRed()).toBe(207);
			expect(color.getGreen()).toBe(81);
			expect(color.getBlue()).toBe(19);
			
		});
		
		test("Passing incorrect object properties should cause error.", (): void => {
			
			expect((): void => {
				
				color = RGBColor.fromComponents({
					reb: 25,
					gweem: 201,
					blew: 153
				} as any);
				
			}).toThrowError();
			
		});
		
		test("Passing non-numeric object properties should cause error.", (): void => {
			
			expect((): void => {
				
				color = RGBColor.fromComponents({
					red: "twenty-five",
					green: false,
					blue: ["b", "l", "u", "e"]
				} as any);
				
			}).toThrowError();
			
		});
		
	});
	
	describe("Rest components constructor call", (): void => {
		
		test("...for 'black' (rgb(0, 0, 0)).", (): void => {
			
			color = RGBColor.fromComponents(0, 0, 0);
			
			expect(color.getRed()).toBe(0);
			expect(color.getGreen()).toBe(0);
			expect(color.getBlue()).toBe(0);
			
		});
		
		test("...for 'white' (rgb(255, 255, 255)).", (): void => {
			
			color = RGBColor.fromComponents(255, 255, 255);
			
			expect(color.getRed()).toBe(255);
			expect(color.getGreen()).toBe(255);
			expect(color.getBlue()).toBe(255);
			
		});
		
		test("...for orange (rgb(207, 81, 19)).", (): void => {
			
			color = RGBColor.fromComponents(207, 81, 19);
			
			expect(color.getRed()).toBe(207);
			expect(color.getGreen()).toBe(81);
			expect(color.getBlue()).toBe(19);
			
		});
		
		test("Passing under-sized rest component set should cause error.", (): void => {
			
			expect((): void => {
				
				color = RGBColor.fromComponents(1, 2);
				
			}).toThrowError();
			
		});
		
		test("Passing over-sized array should cause error.", (): void => {
			
			expect((): void => {
				
				color = RGBColor.fromComponents(1, 2, 3, 4);
				
			}).toThrowError();
			
		});
		
	});
	
	describe("Array components constructor call", (): void => {
		
		test("...for 'black' (rgb(0, 0, 0)).", (): void => {
			
			color = RGBColor.fromComponents([0, 0, 0]);
			
			expect(color.getRed()).toBe(0);
			expect(color.getGreen()).toBe(0);
			expect(color.getBlue()).toBe(0);
			
		});
		
		test("...for 'white' (rgb(255, 255, 255)).", (): void => {
			
			color = RGBColor.fromComponents([255, 255, 255]);
			
			expect(color.getRed()).toBe(255);
			expect(color.getGreen()).toBe(255);
			expect(color.getBlue()).toBe(255);
			
		});
		
		test("...for orange (rgb(207, 81, 19)).", (): void => {
			
			color = RGBColor.fromComponents([207, 81, 19]);
			
			expect(color.getRed()).toBe(207);
			expect(color.getGreen()).toBe(81);
			expect(color.getBlue()).toBe(19);
			
		});
		
		test("Passing under-sized array should cause error.", (): void => {
			
			expect((): void => {
				
				color = RGBColor.fromComponents([1, 2] as any);
				
			}).toThrowError();
			
		});
		
		test("Passing over-sized array should cause error.", (): void => {
			
			expect((): void => {
				
				color = RGBColor.fromComponents([1, 2, 3, 4] as any);
				
			}).toThrowError();
			
		});
		
	});
	
});
