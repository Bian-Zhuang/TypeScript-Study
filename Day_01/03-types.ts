let a: object;


// {} 用来指定对象中包含哪些属性
// 在属性后面加上? 表示属性是可选的
let b: {name : string,age? : number}

b = {name: '卞壮'}


// [Name: string]:any 表示任意类型的属性
let c : {name: string,[propName: string]:any}

c = {name : '卞哈哈',age : 20}


let d: (a: number,b: number) => number


/* 
	设置函数结构的类型声明
	语法 : (形参:类型,形参:类型 ...) => 返回值
*/

// d = function(n1 : string,n2: string):number 	{
// 	return 10
// }


/* 
	数组的类型声明
		类型[]
		Array<类型>
*/
// string[] 表示字符串数组
let e: string[]
e = ['a']

// number[] 表示数字数组
let f: number[]

let g: Array<number>
g = [1,2,3]


/* 
	元组 固定长度的数组
	语法: 
		[类型,类型]
*/

let h : [string,number]

h = ['卞壮',123]


/* 
	枚举 enum

*/
enum Gender {
	Male,
	Female
}

let i :{name:string,gender: Gender}
i = {
	name : '卞壮',
	gender: Gender.Male
}

console.log(i.gender == Gender.Male);

// & 表示同时
let j: {name:string} & {age:number}

j = {
	name: '卞壮',
	age: 18
}

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let m: myType

 
