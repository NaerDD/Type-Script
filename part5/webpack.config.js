//引入一个包
const path = require('path');
//引入html插件 (自动生成html文件 并引入打包后的js)
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { options } = require('less');

//webpack中的所有位置信息 都应该写在module.exports中
module.exports = {
   //指定入口文件
   entry:"./src/index.ts",
   //指定打包文件所在目录
   output:{
    ////执行时先把dist清空 再生成文件
    clean:true,
    //指定打包文件的目录
    path:path.resolve(__dirname,'dist'),
    //打包后文件的文件
    filename:'bundle.js',

    //配置取消箭头函数 要兼容IE系列必备 不然自带的箭头函数 始终报错
    environment:{
      //告诉webpack不使用箭头函数
      arrowFunction:false,
      const:false
    }
   },

   //指定webpack打包时要使用模块
   module:{
      //指定要加载的规则
      rules:[
        {
          //test指定的是规则生效的文件
          test:/\.ts$/,
          //要使用的loader
          use:[
            //将新版js转成旧版js
            //配置babel
            {
              //指定加载器
              loader:"babel-loader",
              //设置babel
              options:{
                //设置预定义的环境
                presets:[
                  [
                    //指定环境的插件
                    "@babel/preset-env",
                    //配置信息
                    {
                      //要兼容的目标浏览器
                      targets:{
                        //指定corejs的版本
                        "chrome":"58",
                        "ie":"11",
                      },
                      //使用corejs的方式 usage表示按需加载
                      "useBuiltIns":"usage",
                      "corejs":"3"
                    }
                  ]
                ]
              }
            },
            //将ts转成新版本js
            'ts-loader',
          ],
          //要排除的文件
          exclude:/\node-module/
        },
           //指定less文件的处理
          {
          test:/\.less$/,
          use:[
            "style-loader",
            "css-loader",
            //引入postcss
            {
              loader:"postcss-loader",
              options:{
                postcssOptions:{
                  plugins:[
                    [
                      "postcss-preset-env",
                      {
                        browsers:'last 2 versions'
                      }
                    ]
                  ]
                }
              }
            },
            "less-loader",
          ]
          },
      ]
   },


   //配置webpack插件 
   plugins:[
    //自动生成HTML
    new HTMLWebpackPlugin(
      {
        //给定一个title
        // title:'这是一个自定义的title'
        //给定一个html模板
        template:"./src/index.html"
      }
    ),
   ],

   //用来设置引用模块
   resolve:{
    //以ts js结尾的文件可以作为模块引入
    extensions:['.ts','.js']
   }
}