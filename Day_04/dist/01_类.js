"use strict";
// 定义类
/*
    属性
    方法
*/
class Person {
    constructor() {
        /*
            直接定义的是属性是实例属性 需要通过对象的实例去访问
            const per = new Person()
            per.name
    
            使用static开头的属性是静态属性(类属性) 可以直接通过类去访问
            Person.age
    
            readonly开头的属性表示一个只读的属性
        */
        // 定义实例属性
        // readonly name: string = '卞哈哈';
        this.name = '卞哈哈';
        this.age = 22;
        // 在属性前使用static关键字可以定义类属性(静态属性)
        // static readonly age: number = 22
    }
    // 定义方法
    /*
        如果方法以static开头 则方法就是类方法 可以直接类调用
    */
    static sayHello() {
        console.log('你好');
    }
}
const per = new Person();
// console.log(per.name,per.age);
// console.log(per.name);
// per.name = 'Tom'
// console.log(Person.age);
// per.sayHello()
Person.sayHello();
