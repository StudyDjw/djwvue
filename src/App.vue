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
            <router-link class="mui-tab-item1" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/shopcar">
                <span class="mui-icon  mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/search">
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
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
        font-size: 12px;
    }

    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon{
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }


    .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }



    .app-contianer {
        padding-top: 40px;
        padding-bottom: 50px;
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