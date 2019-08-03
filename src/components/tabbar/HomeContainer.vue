<template>
    <div>

        <!--轮播图区域  -->
        <!--每一次传值都需要传递一个父组件的lunboList过去给子组件，在子组件上接收-->
        <lunbo :lunboList="lunboList" :isfull="true"></lunbo>
        <!--九宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="新闻资讯图标" title="新闻资讯">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt="图片分享图标" title="图片分享">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="商品购买图标" title="商品购买">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="留言反馈图标" title="留言反馈">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="视频专区图标" title="视频专区">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="联系我们图标" title="联系我们">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>

<script>
    //导入 Toast
    import {Toast} from 'mint-ui';

    //导入轮播图子组件
    import lunbo from '../subcomponents/lunbo.vue'

    //导出一个对象
    export default {
       data(){
           return {
               lunboList:[]
           }
       },
        created() {
            this.getLunbo()
        },
        methods: {
            getLunbo() {
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(function (result) {
                    if (result.body.status === 0) {
                        //轮播图加载成功
                        this.lunboList = result.body.message
                    } else {
                        Toast('轮播图加载失败')
                    }
                })
            }
        },
        components: {
            lunbo
        }
    }
</script>

<style scoped>
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-bottom: none;
        border-right: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell img {
        width: 60px;
        height: 60px;
    }

    .mui-media-body {
        font-size: 13px;
    }
</style>