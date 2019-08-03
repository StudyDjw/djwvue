<template>
    <div>
        <div class="goodlist">
            <div @click="goDetail(item.id)" v-for="item in prolist" class="gooditem" v-bind:key="item.id">
                <img :src="item.img_url" alt="产品图片">
                <h1 class="title">{{ item.title}}</h1>
                <div class="info">
                    <div class="price">
                        <span class="new-price">￥{{ item.sell_price}}</span>
                        <span class="old-price"><s>￥{{ item.market_price}}</s></span>
                    </div>
                    <div class="sell ">
                        <span>热卖中</span>
                        <span>剩{{ item.stock_quantity }}件 </span>
                    </div>
                </div>
            </div>
        </div>
        <button class="more-btn" v-on:click="more">加载更多</button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                pageIndex: 1,
                prolist: []
            }
        },
        created() {
            this.getProList()
        },
        methods: {
            getProList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=' + this.pageIndex).then((result) => {
                    if (result.body.status === 0) {
                        this.prolist = this.prolist.concat(result.body.message)
                    } else {
                        Toast('获取产品列表失败')
                    }

                })
            },
            more() {
                this.pageIndex++
                this.getProList()
            },
            //注意：一定要区分$route 和 $router这两个对象
            //其中：this.$route是一个路由参数对象，所有路由中的参数，params query都属于它
            // this.$router 是一个路由导航对象，用它可以方便的使用js代码，实现路由的前进、后退、跳转到新的url地址
            goDetail(id) {
                /**
                 * 在页面中的跳转方式
                 * 1.a标签href跳转---标签跳转
                 * 2.使用 window.location.href 跳转----编程式导航
                 * 3.this.$router.push('路径')是 router提供的编程式导航
                 */
                //最简单的跳转
                //this.$router.push('/home/goodsinfo/'+id)
                //传递对象跳转
                // this.$router.push({path: '/home/goodsinfo/' + id})
                //传递命名的路由
                this.$router.push({ name:'goodsinfo',params:{id:id}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .more-btn {
        width: 100%;
        background-color: #2ac845;
        color: white;
    }

    .goodlist {
        display: flex;
        flex-wrap: wrap;
        padding: 0 5px;
        justify-content: space-between;
        .gooditem {
            width: 49%;
            box-shadow: 1px 1px 6px #ccc;
            border: 1px solid #ccc;
            margin: 3px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
                max-height: 28px;
                overflow: hidden;
            }
            .info {
                padding: 0 5px;
                background-color: #d0d0d0;

                .new-price {
                    color: red;
                    font-weight: bold;
                }
                .old-price {
                    s {
                        margin-left: 15px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 5px;
                    color: #8f8f94;
                }

            }
        }
    }

</style>