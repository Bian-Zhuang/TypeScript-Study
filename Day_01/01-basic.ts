// 声明一个变量a 同时指定它的类型为number
let a: number;

// a 的类型设置为了number 在以后的使用过程中a的值只能是数字
a = 10
a = 20
// a = '1'; 报错的 不能将类型“string”分配给类型“number”。

let b: string;
b = 'Hello'
// b = 30 // 报错

// 声明完变量直接赋值
// let c: Boolean = true

// 如果变量的声明和伏赋值是同时进行的 TS可以自动对变量进行类型检测
let c = false
c = true

function sum(a:number,b:number):number{
	return a + b
}

sum(123,456)