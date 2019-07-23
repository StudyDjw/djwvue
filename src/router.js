import VueRouter from 'vue-router'

//导入首页的组件
import HomeContainer from './components/tabbar/HomeContainer.vue'

//导入用户的组件
import MemberContainer from './components/tabbar/MemberContainer.vue'

//导入购物车的组件
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

//导入搜索的组件
import SearchContainer from './components/tabbar/SearchContainer.vue'


var router = new VueRouter({
    routes: [
        { path:"/",redirect:'/home'},
        { path: '/home', component: HomeContainer},
        { path: '/member', component: MemberContainer},
        { path: '/shopcar', component: ShopcarContainer},
        { path: '/search', component: SearchContainer}
        ],
    linkActiveClass:'mui-active'

})

export default router