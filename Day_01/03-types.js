var a;
// {} 用来指定对象中包含哪些属性
// 在属性后面加上? 表示属性是可选的
var b;
b = { name: '卞壮' };
// [Name: string]:any 表示任意类型的属性
var c;
c = { name: '卞哈哈', age: 20 };
var d;
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
var e;
e = ['a'];
// number[] 表示数字数组
var f;
var g;
g = [1, 2, 3];
/*
    元组 固定长度的数组
    语法:
        [类型,类型]
*/
var h;
h = ['卞壮', 123];
/*
    枚举 enum

*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '卞壮',
    gender: Gender.Male
};
console.log(i.gender == Gender.Male);
// & 表示同时
var j;
j = {
    name: '卞壮',
    age: 18
};
var k;
var m;
