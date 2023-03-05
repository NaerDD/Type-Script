"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            //内部
            this.name = name;
            this.age = age;
        }
        //getter setter 被称为属性的存取器
        //定义方法,用来获取name属性 
        getName() {
            return this.name;
        }
        //定义方法,用来设置name属性 
        setName(value) {
            this.name = value;
        }
        getAge() {
            return this.age;
        }
        setAge(value) {
            //判断年龄是否合法
            if (value >= 0) {
                this.age = value;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    //现在属性是在对象中设置的,属性可以任意的被修改(不安全)
    //此时报错 但转JS后依然会被无视 并继续进行修改 
    //所以要在tsconfig.json中开启noEmitOnError 有报错不去编译
    // per.name = '猪八戒';
    // per.age = -38;
    // console.log(per);
    // console.log(per.getName());
    // per.setName('猪八戒')
    // console.log(per);
    // console.log(per.getName());
    per.setAge(33);
    console.log(per);
})();
