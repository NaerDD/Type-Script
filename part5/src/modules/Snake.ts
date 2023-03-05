class Snake{
  //表示蛇的元素
  head:HTMLElement;
  //蛇的身体(包括蛇头)
  bodies:HTMLCollection;
  //获取蛇的容器
  element:HTMLElement

  constructor(){
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.element = document.getElementById('snake')!
    this.bodies = this.element.getElementsByTagName('div');
  }
  
  //获取蛇的坐标(蛇头坐标)
  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }
  //设置蛇头坐标
  set X(value:number){
    if(this.X ===value){
      return;
    }
    //X的值合法范围0-290
    if(value <0 || value>290){
      //进入判断 说明蛇撞墙了
      throw new Error('蛇撞墙了!')
    }

    this.head.style.left = value +'px';
    
  }
  set Y(value:number){
    if(this.Y === value){
      return;
    }
    //Y的值合法范围0-290
    if(value < 0 || value > 290){
      //进入判断 说明蛇撞墙了
      throw new Error('蛇撞墙了!')
    }
    this.head.style.top = value +'px';
  }
  
  //蛇增加身体的方法
  addBody(){
    //向Element中添加一个div
    this.element.insertAdjacentHTML("beforeend","<div></div>");
  }
}

export default Snake;
