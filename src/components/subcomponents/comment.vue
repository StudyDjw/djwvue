<template>
    <div class="comment-container">
        <h1 class="title">用户评论</h1>
        <textarea name="" id="" cols="30" rows="5" placeholder="请输入您的评论内容" v-model="message">

        </textarea>
        <button v-on:click="submitMessage">提交评论</button>
        <ul class="cmt-list">
            <li class="cmt-item" v-for="(item,i) in cmtList"  v-bind:key="item.add_time">
                <p>第{{ i + 1}}楼 用户&nbsp;&nbsp;{{ item.user_name }} 发表时间：{{ item.add_time |filterTime }}</p>
                <p>{{ item.content === 'undefined'?'用户很懒，什么都没写':item.content}}</p>
            </li>
        </ul>
        <button v-on:click="more">加载更多</button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data(){
            return{
                pageIndex:1,
                cmtList:[],
                message:""
            }
        },
        created(){
            this.getCmtList()
        },
        methods:{
            getCmtList(){
                this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(function (result) {
                    if(result.body.status === 0){
                        this.cmtList = this.cmtList.concat(result.body.message)
                    }else{
                        Toast('获取评论列表失败')
                    }
                })
            },
            more(){
                this.pageIndex++
                this.getCmtList()
            },
            submitMessage(){
                //先判断输入是否为空，如果是空 提示不能为空，终止操作
                if(this.message.trim().length === 0){
                  return  Toast('文本域不能为空！！！')
                }
                //通过post方法请求服务器
                this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+ this.id,{ content:this.message.trim() }).then(function (result) {
                    if(result.body.status === 0){
                        //手动添加一个对象
                        var cmt = {
                            user_name:'匿名用户',
                            add_time:Date.now(),
                            content:this.message.trim()
                        }
                        this.cmtList.unshift(cmt)
                        this.message = ''
                    }
                })
            }
        },
        props:['id']
    }
</script>

<style scoped lang="scss">
    .comment-container {
        .title {
            font-size: 13px;
        }
        textarea {
            font-size: 12px;
            padding: 5px;
            margin: 0;
        }
        .cmt-list {
            list-style: none;
            margin: 0;
            padding: 0;
            .cmt-item p:nth-child(1) {
                background-color: #8f8f94;
                color: black;
            }
        }
    }
</style>