/*
 * @Author: anne.yang
 * @Date: 2022-08-06 18:51:46
 * @LastEditors: anne.yang
 * @LastEditTime: 2022-08-06 20:14:28
 */
import {hi} from './m1';

function sum(a: number, b: number):number{
    return  a + b;
}

var obj = {name:"孙悟空", age:33};

console.log(obj);

obj.age = 18;
console.log(obj);

console.log(sum(123, 456));
console.log('哈哈好的');
console.log(hi);

let fn = (a: number, b: number) => a + b;

fn(123 , 456);
fn(77, 22);
