//object 表示一个js对象 (一般不使用)
var a;
a = {};
a = function () { };
//{}用来指定对象中可以包含哪些属性 (常用)
//语法:{属性名:属性值,属性名:属性值} 
//属性后面加?(表示可有可无) 
var b;
b = { name: 'paipaitou' };
// b = {name:'paipaitou',age:18};报错 必须一模一样 多了不行 少了也不行
var c;
c = { name: '猪八戒', a: 1, b: 2 };
//设置函数结构的类型声明
//  语法:(形参:类型,形参:类型 ...) =>返回值
var d;
d = function (n1, n2, n3) {
    return n1 + n2;
};
// let e :[]
//表示字符串数组 (数组里的元素必须是string)
var e;
e = ['a', 'b',];
var f;
//同上
var g;
//tuple 元组 固定长度的数组 (效率更高 长度固定)
var h;
h = ['hello', 'hello']; //只能有两个 且两个都为string
//enum枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'paipaitou',
    // gender:0
    gender: Gender.Female
};
console.log(i.gender === Gender.Male);
