// 也可以直接使用字面量进行类型声明
var a;
// 可以使用 | 来连接多个类型(联合类型)
var b;
b = 'mail';
b = 'femail';
// b = 'hello' 报错
// any表示的是任意类型
// 声明变量如果不指定类型 则TS解析器会自动判断变量的类型为any (隐式any)
var d;
d = '123';
d = 123;
d = true;
// unknown 未知类型
var e;
var s;
// d的类型是any 它可以赋值给任意变量
// s = d
e = 'Hello';
// unknown 类型安全的any
// unknwon类型的变量 不能赋值给其他变量
if (typeof e === 'string')
    s = e;
// 类型断言 可以用来告诉解析器变量的实际类型
s = e;
s = e;
// void 用来表示空 已函数为例 就表示没有返回值的函数
function fn() {
    return undefined;
}
// never 表示从不返回结果
function fn2() {
    throw new Error('报错!');
}
