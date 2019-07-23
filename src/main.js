//  入口文件

//导入vue
import  Vue from  'vue'

//导入路由
import  VueRouter from  'vue-router'

//安装路由
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
//安装Vue-resource
Vue.use(VueResource)

//导入自己的 router.js模块
import router from  './router.js'

//导入app根组件
import App from './App.vue'

//按需导入mint-ui的组件
import { Header ,Swipe, SwipeItem } from 'mint-ui';

//header组件的使用
Vue.component(Header.name, Header);
//Swipe组件的使用
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入css
import  './lib/mui/css/mui.css'

//导入mui的额外图标
import './lib/mui/css/icons-extra.css'

//vue
var vm = new Vue({
    el:"#app",
    data:{},
    render:function (c) {
        return c(App)
    },
    router  //挂载路由对象到VM实例上1
})