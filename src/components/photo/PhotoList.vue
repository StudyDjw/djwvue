<template>
    <div>
        <!--nav-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
                 data-scroll="1">
                <div class="mui-scroll"
                     style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
                    <a v-bind:class="['mui-control-item' , item.id===0?'mui-active':'']" href="#item1mobile"
                       data-wid="tab-top-subpage-1.html" v-for="item in imgNavList" v-bind:key="item.id"
                       v-on:click="getImgListById(item.id)">
                        {{ item.title}}
                    </a>
                </div>
            </div>

        </div>
        <!--图片列表-->
        <ul class="photo-list">
            <router-link v-bind:to="'/home/photoinfo/'+item.id" v-for="item in list" v-bind:key="item.id" tag="li">
                <img class="lazy-img" v-lazy="item.img_url">
                <div class="info">
                    <div class="info-title">{{ item.title}}</div>
                    <div class="info-content">
                        {{ item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'


    export default {
        data() {
            return {
                imgNavList: [],
                list: []
            }
        },
        created() {
            this.getImgNav()
            this.getImgListById(0)
        },
        methods: {
            getImgNav() {
                this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(function (result) {
                    if (result.body.status === 0) {
                        var imgall = {
                            title: "全部",
                            id: 0
                        }
                        result.body.message.unshift(imgall)
                        this.imgNavList = result.body.message
                    }
                })
            },
            getImgListById(cateid) {
                this.$http.get('http://www.liulongbin.top:3005/api/getimages/' + cateid).then(function (result) {
                    if (result.body.status === 0) {
                        this.list = result.body.message
                    }
                })
            }
        },
        mounted() {
            //初始化scroll控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });

        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y;
    }

    .mint-header{
        z-index: 99;
    }

    .photo-list {
        margin: 0;
        padding: 0 10px;
    }

    .photo-list li {
        background-color: #ccc;
        text-align: center;
        list-style: none;
        box-shadow: 3px 3px 5px #ccc;
        margin-bottom: 5px;
        position: relative;
    }

    .info {
        max-height: 84px;
        text-align: left;
        color: white;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,.4);
    }
    .info  .info-title{
        font-size: 15px;
        font-weight: bold;
    }

    .photo-list li img {
        width: 100%;
        vertical-align: middle;
    }

    /*问题：懒加载图片也变成了100%*/
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>