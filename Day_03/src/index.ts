import {hi} from './m1'


function sum(a:number,b:number):number{
	return a + b
}

const obj = {name: '卞哈哈',age:33}
console.log(obj);

obj.age = 18
console.log(obj);



console.log(sum(1,2));

console.log('卞壮');
console.log(hi);

let fn = (a:number,b:number) => a + b
console.log(fn(11,22));
console.log(fn(66,88));

console.log(Promise);

