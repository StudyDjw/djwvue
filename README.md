# 这是一个NB的项目

## 牛逼不牛逼 一天两烧鸡

### 代码很牛逼

## 邸建文又修改了~~~~~~~~~~~~~~

## 制作首页App组件
1.制作了首页header区域，使用的是Mint-UI中的Header组件
2.制作底部Tabber 区域，使用的是MUI的Tabber.html
    + 在制作购物车小图标的时候，操作会相对多一些
    + 将 扩展图标的css样式 和 font内的 扩展字体库 ttf 文件拷到项目中
3.要在中间区域放置一直 router-view来展示路由匹配到的组件

## 改造tabbar为 router-link
## 设置路由高亮
## 点击tabbar 中的路由链接展示对应的路由组件
## 制作首页轮播图
## 加载首页数据
1.获取数据 ，如何获取呢，使用vue-resource
2.使用 vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4。使用v-for渲染每一个item项

## 改造九宫格区域的样式


## 改造新闻资讯的路由链接

## 新闻资讯的页面制作
1.绘制界面 使用mui中的media-list.html
2.使用 vue-resource 获取数据
3,渲染 真实数据


## 实现新闻资讯列表 点击跳转大新闻详情
1.把列表中的每一项改造成router-link，同时，在跳转的时候应该提供一个唯一的Id标识符
2.创建新闻详情的组件页面，NewsInfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个 comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中，先手动导入comment组件


## 在手机上开发
在package.json 文件 dev脚本中， 添加一个--host指令，把当前电脑

查看当前电脑的wife ，  在cmd终端中运行  ipconfig