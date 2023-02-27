"use strict";
//使用class关键字来定义一个类
class Person {
    constructor() {
        //对象中主要包含了两个部分 属性 方法
        //定义实例属性 直接定义的属性是实例属性,需要通过对象的实例去访问
        this.name1 = '孙悟空';
        //readonly 开头的属性表示一个只读的属性无法修改
        this.name2 = '猪八戒';
    }
    //定义方法 直接写的 表示实例对象的方法
    sayHello() {
        console.log('hello 大家好!');
    }
    static sayYes() {
        console.log('hell yeah!');
    }
}
// age:number = 18;
//定义类属性(静态属性 Person的属性 直接通过类去访问)
Person.age = 18;
const per = new Person();
console.log(per);
// console.log(per.name,per.age);
console.log(Person.age);
// Person.name2 = 'asd'//只读不能修改
console.log(per.sayHello());
console.log(Person.sayYes());
