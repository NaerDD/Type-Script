"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 111,
        gender: '男'
    };
    //定义类时,可以使类去实现一个接口
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
})();
