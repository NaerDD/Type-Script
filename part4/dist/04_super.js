"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //写构造函数就必须要调用父类的super函数进行一次调用
            super(name); //调用父类的构造函数
            this.age = age;
        }
    }
    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();
