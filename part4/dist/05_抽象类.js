"use strict";
(function () {
    //abstract以它开头的类 是抽象类
    //抽象类和其他类的区别不大,只是不能用来创建对象
    //抽象类就是专门用来被继承的类
    //抽象类中可以添加抽象方法
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪~');
        }
    }
    class Cat extends Animal {
        //因为继承了抽象类 父类当中的抽象方法 抽象方法在子类当中必须进行重写
        sayHello() {
            console.log('喵喵喵!~');
        }
    }
    const dog = new Dog('旺财');
    const cat = new Cat('咪咪');
    dog.sayHello();
    cat.sayHello();
    //不能new一个抽象类
    // const an = new Animal();
})();
