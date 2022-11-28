import { hi } from "./m.js";
console.log(hi);
let a = 10
// console.log(a);

// 这是一个注释

function fn(a:any,b:any):any {
	return a + b
}

function fn2(this:Window){
	alert(this)
}
