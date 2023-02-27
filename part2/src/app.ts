console.log('hello ts');
let a = 10;
let b = 1;
//tsc .\app.ts -w 开启监视模式 自动编译(对单个文件开启监视)
//创建一个tsconfig.json文件后 直接tsc表示编译所有 tsc -w 给所有文件开启监视 同步编译
let c = 12;

import { hi } from './m.js'
 console.log(hi);
 

//  let ax;
function fn(a:number,b:number){
    return a + b
 }

function f2(this:Window){
    alert(this);
 }

 let box1 = document.getElementById('box1');
 //box1如果不存在? 开启严格的检查空值
 box1?.addEventListener('click',function(){
    alert('hello')
  })