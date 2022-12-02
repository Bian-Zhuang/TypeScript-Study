(function(){

	// 描述对象类型
	type myType = {
		name: string,
		age : number
	}

	/* 
		接口用来定义类的结构 用来一个类中包含哪些属性和方法
		接口也可以当成类型声明去使用
		interface
	*/
	interface myInterface {
		name:string,
		age: number
	}
	interface myInterface {
		gneder: string
	}


	const obj: myInterface = {
		name: '卞哈哈',
		age: 22,
		gneder: '男'
	}


	/* 
		接口可以在定义类的时候限制类的结构
		接口中的所有属性都不能有实际的值
		接口只定义对象的结构 而不考虑实际值
			接口中所有的方法都是抽象方法
	*/
	interface myInter {
		name: string
		sayHello():void
	}

	/*
		定义类 可以使类去实现一个接口
		实现接口就是使类满足接口的要求
	*/
	class MyClass implements myInter{
		name:string
		constructor(name:string){
			this.name = name
		}
		sayHello(){
			console.log('大家好~~~');
			
		}
	}
})()