// export function StaticImplements<T>() {
// 	return <U extends T>(constructor: U) => { constructor };
// }

export function StaticImplements<T>(): (constructor: T) => void {
	return (constructor: T) => { constructor; };
}
