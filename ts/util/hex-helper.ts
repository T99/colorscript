export type HexDestructuringConfig = {
	[valueName: string]: {
		startIndex: number;
		count: 2;
		range?: number | {
			start: number;
			end: number;
		}
	}
};

export type HexDestructuringResult<HSC extends HexDestructuringConfig> = {
	[prop in keyof HSC]: number
};

export function createHexCodeDestructurer<C extends HexDestructuringConfig, R extends HexDestructuringResult<C>>
	(config: C): (hexCode: string) => R {
	
	return (hexCode: string): R => {
		
		let result: R = {} as any;
		
		for (let prop of Object.keys(config)) {
			
			let {
				startIndex,
				count,
				range
			}: HexDestructuringConfig[keyof HexDestructuringConfig] = config[prop];
			
			let indexRangeStart: number = startIndex;
			let indexRangeEnd: number = indexRangeStart + count;
			let indexRangeLength: number = count;
			
			let maxPossibleSize: number = Math.pow(2, 4 * indexRangeLength);
			
			let propValue: number = parseInt(hexCode.substring(indexRangeStart, indexRangeEnd), 16);
			
			if (range !== undefined && range !== maxPossibleSize) {
				
				let valueRangeStart: number = (range as { start: number, end: number })?.start ?? 0;
				let valueRangeEnd: number = (range as { start: number, end: number })?.end ?? range as number;
				let valueRangeSize: number = valueRangeEnd - valueRangeStart;
				
				propValue = valueRangeStart + (valueRangeSize * (propValue / maxPossibleSize));
				
			}
			
			result[prop as keyof R] = propValue as any;
			
		}
		
		return result;
		
	};
	
}

// export function createHexCodeGenerator(config: )
