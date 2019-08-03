<template>
    <div class="newsInfo-container">
        <!--新闻详情标题-->
        <h4 class="title">
            {{ newsInfo.title}}
        </h4>
        <!--新闻详情子标题-->
        <p class="sub-title">
            <span>   {{newsInfo.add_time | filterTime('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>点击{{ newsInfo.click }}次</span>
        </p>
        <hr/>
        <!--新闻详情内容-->
        <p v-html="newsInfo.content"></p>
        <!--新闻详情-评论-->
        <cmtbox v-bind:id="id"></cmtbox>
    </div>

</template>

<script>
    import {Toast} from 'mint-ui'

    //导入评论组件
    import comment from '../subcomponents/comment.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                newsInfo: ""
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/getnew/' + this.id).then(function (data) {
                    if (data.body.status === 0) {
                        this.newsInfo = data.body.message[0]
                    } else {
                        Toast('新闻详情数据导入失败')
                    }
                })
            }
        },
        components: {
            cmtbox: comment
        }
    }
</script>

<style scoped>
    .newsInfo-container {
        padding: 0 4px;
    }

    .title {
        font-size: 14px;
        color: red;
        text-align: center;
        margin: 15px 0;
    }

    .sub-title {
        display: flex;
        justify-content: space-between;
        color: #226aff;
    }

</style>