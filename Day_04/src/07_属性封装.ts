(function () {
	// 定义表示人的类
	class Person {
		// Ts可以在属性前面添加属性的修饰符
		/* 
			public 修饰符 可以在任意位置访问和修改 (默认值)
			private 私有属性 私有属性只能在类内部访问和修改
				- 通过在类中添加方法 使得私有属性可以被外部访问
			protected 受保护的属性 只能在当前类和当前类的子类中使用
		*/
		private _name: string;
		private _age: number;
		private _gender: string;

		constructor(name: string, age: number, gender: string) {
			this._name = name
			this._age = age
			this._gender = gender
		}


		/* 
			getter 方法读取属性
			setter 方法设置属性
				属性的存取器
		*/

		// // 读取name属性方法
		// getName(){
		// 	return this._name
		// }

		// // 设置name属性的方法
		// setName(value: string){
		// 	this._name = value
		// }

		// getAge(){
		// 	return this._age
		// }

		// setAge(value: number){
		// 	// 判断年龄是否合法
		// 	if(value >= 0){
		// 		this._age = value
		// 	}
		// }


		// TS中设置getter方法的方式
		get name() {
			console.log('get name() 执行了');
			return this._name
		}

		set name(value: string) {
			console.log('set name() 执行了');
			this._name = value
		}

		get age() {
			console.log('get age() 执行了');
			return this._age
		}

		set age(value: number) {
			console.log('set age() 执行了');
			if (value >= 0) {
				this._age = value
			}
		}
	}

	const per = new Person('卞哈哈', 22, '男')

	/* 
		现在属性是直接在对象设置的
		属性可以任意被修改将会导致对象中的数据变得非常不安全
	*/
	// per._name = '卞壮'
	// per._age = 23
	// per._gender = '女' //属性“_gender”为私有属性，只能在类“Person”中访问。
	// per.setName('卞哈哈哈哈哈')
	// per.setAge(60)
	// console.log(per.name);

	per.name = '卞xx'
	per.age = 66
	console.log(per);


	class A {
		protected num: number;

		constructor(num: number) {
			this.num = num
		}
	}
	class B extends A {
		test() {
			console.log(this.num);
		}
	}

	const b = new B(123)
	// b.num = 33 // 属性“num”受保护，只能在类“A”及其子类中访问

	// class C {
	// 	name: string;
	// 	age: number;
	// 	// 可以直接将属性定义在构造函数中
	// 	constructor(name: string, age: number) {
	// 		this.name = name
	// 		this.age = age
	// 	}
	// }

	class C {

		// 可以直接将属性定义在构造函数中
		constructor(public name: string, public age: number) {
		}
	}

	let c = new C('卞壮', 22)
	

})()
