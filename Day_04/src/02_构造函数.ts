class Dog {
	// name = '旺财';
	// age = 3
	name : string;
	age : number

	// constructor构造函数
	// 会在对象创建时调用
	constructor(name: string,age: number){
		// this表示当前实例创建的对象
		// console.log(this);
		
		this.name = name
		this.age = age
	}

	bark(){
		// 在方法中通过this来表示当前调用方法的对象
		// console.log(this);
		
		console.log('汪汪汪');
	}
}
const dog = new Dog('旺财',3)
console.log(dog);


