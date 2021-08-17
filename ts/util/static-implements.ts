// export function StaticImplements<T>() {
// 	return <U extends T>(constructor: U) => { constructor };
// }

export function StaticImplements<T>(): (constructor: T) => void {
	return (constructor: T) => { constructor; };
}


export function StaticExtends<T>(staticClass: T) {
	
	return <U extends T>(constructor: U): U => {
		
		let result: U = constructor;
		
		for (let property of Object.getOwnPropertyNames(staticClass)) {
			
			console.log(property);
			
		}
		
		return result;
		
	}
	
}
