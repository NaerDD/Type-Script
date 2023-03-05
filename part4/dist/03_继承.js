"use strict";
(function () {
    ////定义一个表示动物的类
    class animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    //定义一个表示狗的类
    //使dog类继承animal类
    class Dog extends animal {
        run() {
            console.log(`${this.name}在跑~~`);
        }
        sayHello() {
            console.log('狗在叫');
        }
    }
    //定义一个表示猫的类
    //使cat类继承animal类
    class Cat extends animal {
        sayHello() {
            //这里就近原则 在自己身上有的方法不会去找父类
            //如果找不到再去原型链往上找
            //重写
            console.log('猫在叫');
        }
    }
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    console.log(cat);
    dog.sayHello();
    dog.run();
    cat.sayHello();
})();
