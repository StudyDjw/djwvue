<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="newsItem in newsList" v-bind:key="newsItem.img_url">
                <router-link v-bind:to="'/home/newsinfo/' + newsItem.id">
                    <img class="mui-media-object mui-pull-left" v-bind:src="newsItem.img_url">
                    <div class="mui-media-body">
                        <h1>{{ newsItem.title }}</h1>
                        <p class="mui-ellipsis">
                            <span>{{ newsItem.add_time | filterTime('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span>点击{{ newsItem.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                newsList: null
            }
        },
        created: function () {
            this.getNewsList()
        },
        methods: {
            getNewsList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(function (data) {
                    if (data.body.status === 0) {
                        this.newsList = data.body.message
                        console.log(data.body.message)
                    } else {
                        Toast('获取新闻列表失败')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .mui-table-view h1 {
        font-size: 14px;
    }

    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>