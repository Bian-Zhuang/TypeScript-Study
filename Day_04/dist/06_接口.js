"use strict";
(function () {
    const obj = {
        name: '卞哈哈',
        age: 22,
        gneder: '男'
    };
    /*
        定义类 可以使类去实现一个接口
        实现接口就是使类满足接口的要求
    */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好~~~');
        }
    }
})();
