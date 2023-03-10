// function fn(a:number):number{
//     return a;
// }

//在定义函数或者类时,如果遇到类型不明确就可以使用泛型

function fn<T>(a:T):T{
  return a;
}

//可以直接调用具有泛型的函数
let result = fn(10); //这次调用时候返回值的类型就是number 不指定 自动推断
let result2 = fn<string>('hello')//有时候不容易判断可以手动指定泛型 为string
console.log(result);
console.log(result2);

//泛型可以同时指定多个
function fn2<T,K>(a:T,b:K):T{
    return a;
    console.log(b);
 }

 fn2<number,string>(123,'hello');

 interface Inter{
  length:number;
 }
//T extends Inter 表示泛型T必须是Inter的实现类(子类)
 function fn3<T extends Inter>(a:T):number{
  return a.length;
 }

 class Myclass<T>{
  name:T;
  constructor(name:T){
    this.name = name;
  }
 }
 const mc = new Myclass<string>('孙悟空');
