class Dog{
  name:string;
  age:number;
  
  //构造函数 会在对象创建时调用
  constructor(name:string,age:number){
    //实例方法中,this就表示当前当前的实例
    //在构造函数中当前对象就是当前新建的那个对象
    //可以通过this向新建的对象中添加属性
    //谁调用new Dog /this就是谁 
    console.log(this);
    this.name = name;
    this.age = age;
    
  }

  bark(){
    alert('旺旺');
  }
}

const dog = new Dog('小黑',4);
const dog2 = new Dog('小白',2);

console.log(dog);
console.log(dog2);
