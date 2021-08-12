
// Credit to @colxi on StackOverflow for these wonderful types!
// https://stackoverflow.com/a/59906630/4997194
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' |  'unshift'
type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> =
	Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>>
	& {
	readonly length: L
	[ I : number ] : T
	[Symbol.iterator]: () => IterableIterator<T>
}

type FixedLength2DArray<T, R extends number, C extends number> =
	FixedLengthArray<FixedLengthArray<T, C>, R>;

export class Matrix<R extends number, C extends number> {

	protected matrix: FixedLength2DArray<number, R, C>;
	
	public constructor(initializationValue: number = 0);
	
	public constructor(initializationValue: number = 0);
	
	public constructor(initialValueOrMatrix: number = 0) {
		
		if (typeof initialValueOrMatrix === "number") {
			
			this.matrix = Array.of()
			
		}
		
	}
	
	public dotProduct<N extends C, P extends number>(operand: Matrix<N, P>): Matrix<any, any>
	
}
