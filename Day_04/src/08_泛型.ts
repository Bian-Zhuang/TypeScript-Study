// function fn(a:any):any {
// 	return a
// }

/* 
	在定义函数或者类时 如果遇到类型不明确就可以使用泛型
*/

function fn<T>(a: T): T{
	return a
}

// 直接调用具有泛型的函数
let result = fn(10) // 不指定泛型 TS可以自动对类型进行推断
let result2 = fn<string>('hello') // 指定泛型

// 泛型可以指定多个
function fn2<T, k>(a: T,b: k):T {
	console.log(b);
	return a
}
fn2<number,string>(123,'Hi')

interface Inter {
	length:number;
}
// T extends Inter  泛型 T 必须是 Inter实现类 (子类)
function fn3<T extends Inter>(a: T): number{
	return a.length
}
fn3({length: 10})

class MyClass<T>{
	name: T;
	constructor(name: T){
		this.name = name
	}
}

const mc = new MyClass<string>('卞哈哈')
console.log(mc);
