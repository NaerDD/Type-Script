//object 表示一个js对象 (一般不使用)
let a :object;
a = {};
a = function(){};

//{}用来指定对象中可以包含哪些属性 (常用)
//语法:{属性名:属性值,属性名:属性值} 
//属性后面加?(表示可有可无) 
let b :{name:string,age?:number};

b = {name:'paipaitou'};
// b = {name:'paipaitou',age:18};报错 必须一模一样 多了不行 少了也不行

let c:{name:string,[propName:string]:any};
c = {name:'猪八戒',a:1,b:2};


//设置函数结构的类型声明
//  语法:(形参:类型,形参:类型 ...) =>返回值
let d:(a:number,n:number,[propName,string]:any)=>number;
d = function(n1:number,n2:number,n3:123){
  return n1+n2;
}

// let e :[]
//表示字符串数组 (数组里的元素必须是string)
let e :string[];
e = ['a','b',]

let f:number[];
//同上
let g:Array<number>;

//tuple 元组 固定长度的数组 (效率更高 长度固定)
let h :[string,string];
h = ['hello','hello'] //只能有两个 且两个都为string

//enum枚举
enum Gender{
  Male = 0,
  Female = 1
}
let i:{name:string,gender:Gender};
i={
  name:'paipaitou',
  // gender:0
  gender:Gender.Female
}

console.log(i.gender===Gender.Male);

//&表示同时
let j:{name:string} & {age:number};
j = {name:'排排头',age:18}

// type myType = string;
// let k:1|2|3|4|5;
// let l:1|2|3|4|5;
// let m :myType;
 //如果类型别名很长 可以单独创建一个type (myType)

type myType = 1|2|3|4|5;
let k:myType;
let l:1|2|3|4|5;
let m :myType;

