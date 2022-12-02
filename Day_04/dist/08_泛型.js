"use strict";
// function fn(a:any):any {
// 	return a
// }
/*
    在定义函数或者类时 如果遇到类型不明确就可以使用泛型
*/
function fn(a) {
    return a;
}
// 直接调用具有泛型的函数
let result = fn(10); // 不指定泛型 TS可以自动对类型进行推断
let result2 = fn('hello'); // 指定泛型
// 泛型可以指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'Hi');
// T extends Inter  泛型 T 必须是 Inter实现类 (子类)
function fn3(a) {
    return a.length;
}
fn3({ length: 10 });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('卞哈哈');
console.log(mc);
