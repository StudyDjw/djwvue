<template>
    <div class="app-contianer">
        <!--顶部 header 区域-->
        <mt-header fixed title="黑马程序员vue项目"></mt-header>
        <!--中间留有 router-view 区域-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--底部 Tabbar 区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon  mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    .app-contianer {
        padding-top: 40px;
        overflow-x: hidden;
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
    .v-enter {
        /*进入时的点
          透明度从0到100 横向从100%到0
        */
        opacity: 0;
        transform: translateX(100%)
    }
    .v-leave-to{
        /*离开时的点*/
        opacity: 0;
        transform: translateX(-100%)
    }
     .v-enter-active  , .v-leave-active{
        transition: all 1s ease;
    }
    .v-move {
        transition: all 1s ease;
    }
    .v-leave-active{
        position: absolute;
    }
</style>