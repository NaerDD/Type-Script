(function(){
    class Animal{
      name:string;
      constructor(name:string){
        this.name = name;
      }

      sayHello(){
        console.log('动物在叫~');
      }
    }

    class Dog extends Animal{
      // sayHello(){
      //   //在类的方法中 super就表示当前类的父类
      //   super.sayHello();
      // }
      //这里明明不写super也可以实现(因为写方法没有发生重写override) 那super用于什么时候呢
      //用于要在子类中添加一个属性的时候
      //添加了属性就必然要写构造函数

      age:number;

      constructor(name:string,age:number){
        //写构造函数就必须要调用父类的super函数进行一次调用
        super(name);//调用父类的构造函数
        this.age = age;
      }
    }

    const dog = new Dog('旺财',3);
    dog.sayHello();

 })();