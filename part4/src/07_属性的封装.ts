(function(){
    //定义一个表示人的类
    class Person{
      //TS可以在属性前添加属性的修饰符
      /*
        public 修饰的属性可以在任意位置访问(修改) 默认值
        private 私有属性,私有属性只能在类内部进行访问(修改)
        protected 受保护的属性,智能在当前类和当前类的子类中访问(修改)
          -通过在类中添加方法使得私有属性可以被外部访问

      */
        private _name: string;
        private _age: number;

      constructor(name:string,age:number){
        //内部
        this._name = name;
        this._age = age;
      }
      //getter setter 被称为属性的存取器
      //定义方法,用来获取name属性 
      // getName(){
      //   return this.name;
      // }
      get name(){
        // console.log('get name()被调用了!');
        return this._name;
      }
      set name(value:string){
        this._name = value;
      }
      get age(){
        return this._age
      }
      set age(value:number){
        if(value>=0){
        this._age = value
      }
    }
    //   //定义方法,用来设置name属性 
    //   setName(value:string){
    //     this.name = value;
    //   }
    //   getAge(){
    //     return this.age;
    //   }
    //   setAge(value:number){
    //     //判断年龄是否合法
    //     if(value>=0){
    //     this.age = value;
    //   }
    //  }
    // }

    const per = new Person('孙悟空',18);
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
    // per.setAge(33);

    per.name = '猪八戒';
    per.age = 33;
    console.log(per);
    
 })()