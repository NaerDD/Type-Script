//声明一个变量a,同时指定它的类型为number
let a:number;

//a的类型设置为了number 以后使用过程中的a只能是数字
a=10;
a = 33;
// a= 'hello'; //此行代码会报错,因为变量a的类型是number 不能赋值字符串
let b:string;
b = 'hello'
// b=10;

//声明完变量直接进行赋值 
let c: boolean = false;
// c= 123 //如果变量的声明和赋值是同时进行的 TS可以自动对变量进行类型检测
c= true
