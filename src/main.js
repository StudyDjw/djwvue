//  入口文件

//导入vue
import  Vue from  'vue'

//导入app组件
import App from './App.vue'

//按需导入mint-ui的组件
import { Header } from 'mint-ui';


Vue.component(Header.name, Header);

//导入css
import  './lib/mui/css/mui.css'

//vue
var vm = new Vue({
    el:"#app",
    data:{},
    render:function (c) {
        return c(App)
    }
})