import VueRouter from 'vue-router'

//导入首页的组件
import HomeContainer from './components/tabbar/HomeContainer.vue'

//导入用户的组件
import MemberContainer from './components/tabbar/MemberContainer.vue'

//导入购物车的组件
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

//导入搜索的组件
import SearchContainer from './components/tabbar/SearchContainer.vue'

//导入新闻列表的组件
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

//导入图片列表
import PhotoList from './components/photo/PhotoList.vue'
//导入图片详情列表
import PhotoInfo from './components/photo/PhotoInfo.vue'
//导入商品列表
import GoodsList from './components/goods/goodslist.vue'
//导入商品详情页面
import GoodsInfo from './components/goods/goodsinfo.vue'
//导入图文介绍页面
import GoodsDesc from './components/goods/goodsdesc.vue'
//导入商品评论页面
import GoodsComment from './components/goods/goodscomment.vue'
var router = new VueRouter({
    routes: [
        {path: "/", redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newsinfo/:id', component: NewsInfo},
        {path: '/home/photolist', component: PhotoList},
        {path: '/home/photoinfo/:id', component: PhotoInfo},
        {path: '/home/goodslist', component: GoodsList},
        {path: '/home/goodsinfo/:id', component: GoodsInfo,name:'goodsinfo'},
        {path: '/home/goodsdesc/:id', component: GoodsDesc,name:'goodsdesc'},
        {path: '/home/goodscomment/:id', component: GoodsComment,name:'goodscomment'}
    ],
    linkActiveClass: 'mui-active'

})

export default router