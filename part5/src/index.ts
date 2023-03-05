//引入样式
import './style/index.less';
// import Food from './modules/Food';
// import ScorePanel from './modules/ScorePanel';
import GameControl from './modules/GameControl';

const gameControl = new GameControl();
// setInterval(()=>{
//   console.log(gameControl.direction);
// },1000)


// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y);


// //100级满级 每两分升一级 (100,2)
// const scorePanel = new ScorePanel();
// for(let i=0;i<10;i++){
//   scorePanel.addScore();
// }
// scorePanel.addScore();
// scorePanel.addScore();