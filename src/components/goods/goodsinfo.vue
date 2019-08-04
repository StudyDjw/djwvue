<template>


    <div class="goodsinfo-container">
        <!--红色小球-->
        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter">
            <div class="ball" v-show="isballhide" ></div>
        </transition>


        <!--产品图片展示区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <lunbo v-bind:lunboList="lunboList" :isfull="false"></lunbo>
                </div>
            </div>
        </div>
        <!--产品详情介绍区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{ proInfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span>市场价：<s>{{ proInfo.market_price}}</s> &nbsp; &nbsp; &nbsp; 销售价：<span class="now-price">{{ proInfo.sell_price}}</span></span>
                    </p>
                    <div>购买数量:
                        <numbox v-bind:quantity ="proInfo.stock_quantity" v-on:getcount ='getSelectCount'></numbox>
                    </div>
                    <p class="btn-box">
                        <button>立即购买</button>
                        <button v-on:click="addshop">加入购物车</button>
                    </p>
                </div>

            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
         <!--产品参数介绍区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ proInfo.goods_no}}</p>
                    <p>库存情况：{{proInfo.stock_quantity}}</p>
                    <p>上架时间：{{proInfo.add_time | filterTime}}</p>

                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain v-on:click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain v-on:click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    //导入子组件numbox
    import numbox from '../subcomponents/numbox.vue'

    import Toast from 'mint-ui'
    //引入轮播图组件
    import lunbo from '../subcomponents/lunbo.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                lunboList: [],
                proInfo: {},
                isballhide: false,
                selectedcount: 1
            }
        },
        created() {
            this.getLunbotu()
            this.getProInfo()
        },
        methods: {
            beforeEnter(el) {
                el.style.transform = 'translate(0,0)'
            },
            enter(el, done) {
                //domobject.getBoundingClientRect() //原生获取元素距离左和顶的方法
                const ball_box = this.$refs.ball.getBoundingClientRect()
                const mui_badge = document.getElementById('badge').getBoundingClientRect()
                const y = mui_badge.top - ball_box.top
                const x = mui_badge.left - ball_box.left
                el.offsetWidth
                el.style.transform = `translate(${x}px,${y}px)`
                el.style.transition = 'all 1s ease '
                done()
            },
            afterEnter() {
                this.isballhide = !this.isballhide

            },
            getLunbotu() {
                this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then((result) => {
                    if (result.body.status === 0) {
                        //得到数据先不要复制 添加一个img属性 ，让img属性的值等于src属性的值
                        result.body.message.forEach((item) => {
                            item.img = item.src
                        })
                        this.lunboList = result.body.message
                    }
                })
            },
            getProInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/' + this.id).then((result) => {
                    if (result.body.status === 0) {
                        //获取数据成功
                        this.proInfo = result.body.message[0]
                    } else {
                        Toast('获取商品参数失败')
                    }

                })
            },
            goDesc(id) {
                //使用编程式导航跳转到图本介绍页面
                this.$router.push({name: 'goodsdesc', params: {id}})
            },
            goComment(id) {
                //使用编程式导航跳转到图本介绍页面
                this.$router.push({name: 'goodscomment', params: {id}})
            },
            addshop() {
                this.isballhide = !this.isballhide
            },
            getSelectCount(count) {
                this.selectedcount = count
                console.log(this.selectedcount)
            }
        },
        components: {
            lunbo,
            numbox
        }
    }
</script>

<style scoped lang="scss">
    .ball {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top: 408px;
        left: 142px;
        z-index: 10;

    }

    .goodsinfo-container {
        background-color: #d0d0d0;
        overflow: hidden;
    }

    .btn-box {
        margin-top: 15px;
    }

    .now-price {
        color: red;
        font-weight: bold;
    }

    .mui-card-footer {
        display: block;
    }

    .mint-button {
        margin-top: 10px;
    }
</style>