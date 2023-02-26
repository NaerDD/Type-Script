//字面量 :直接使用字面量进行类型声明
let d:10;
d =10;
// d=11;报错 不常用

// 使用|来链接多个类型 (联合类型)
let e:'male'|'female';
e = 'female';
e = 'male'
// e = 'hello' 报错 不在范围内

let f:boolean|string;
f = true;
f = 'hello'

//any 表示的是任意类型,可以任意赋值 设置any 相当于关闭ts类型检测
// let g:any;
let g;//隐式any
g = 10;
g = 'hello';
g = true
//any类型的数据 可以赋值给任意变量

//unknown 表示位置类型的值
//实际上就是一个类型安全的any
//unknown类型的变量 不能直接赋值给其他变量
let g1:unknown;
g1 = 10;
g1 = 'hello';
g1 = true