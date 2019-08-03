<template>
    <div class="goodsinfo-container">
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
                        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="5">
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <p class="btn-box">
                        <button>立即购买</button>
                        <button>加入购物车</button>
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
                    <mt-button type="danger" size="large" plain  v-on:click="goComment(id)">商品评论</mt-button>


            </div>
        </div>
    </div>
</template>

<script>
    import Toast from 'mint-ui'
    //引入轮播图组件
    import lunbo from '../subcomponents/lunbo.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                lunboList: [],
                proInfo:{}
            }
        },
        created() {
            this.getLunbotu()
            this.getProInfo()
        },
        methods: {
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
            getProInfo(){
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then((result)=>{
                    if(result.body.status===0){
                        //获取数据成功
                        console.log(result)
                        this.proInfo = result.body.message[0]
                    }else {
                        Toast('获取商品参数失败')
                    }

                })
            },
            goDesc(id){
                console.log('11')
                //使用编程式导航跳转到图本介绍页面
                this.$router.push({ name:'goodsdesc',params:{id}})
            },
            goComment(id){
                //使用编程式导航跳转到图本介绍页面
                this.$router.push({ name:'goodscomment',params:{id}})
            }
        },
        components: {
            lunbo
        }
    }
</script>

<style scoped lang="scss">
    .goodsinfo-container {
        background-color: #d0d0d0;
        overflow: hidden;
    }
    .btn-box{
        margin-top: 15px;
    }
    .now-price{
        color: red;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
    }
    .mint-button{
        margin-top: 10px;
    }
</style>