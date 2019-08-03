<template>
    <div>
        <div class="info-container">
            <h4 class="info-title">{{ photoinfo.title }}</h4>
            <p class="info-sub">
                <span>{{ photoinfo.add_time | filterTime}}</span>
                <span>点击{{ photoinfo.click}}次</span>
            </p>

            <hr/>
            <p class="info-content" v-html="photoinfo.content"></p>

            <!--图片预览-->
            <div class="thumb">
                <img v-bind:key="item.src" class="preview-img" v-for="(item,index) in imgList" :src="item.src" height="100" @click="$preview.open(index,imgList)">
            </div>

        </div>



        <!--评论子组件-->
        <cmtbox v-bind:id="id"></cmtbox>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data() {
            return {

                id:this.$route.params.id,
                imgList:[],
                photoinfo:{ }
            }
        },
        created() {
            this.getImgList()
            this.getInfoList()
        },
        methods: {
            getInfoList(){
              this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+this.$route.params.id).then(function (result) {
                  this.photoinfo = result.body.message[0]
              })
            },
            getImgList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.$route.params.id).then(function (result) {
                    result.body.message.forEach(function (item) {
                        item.w=600
                        item.h = 400
                    })
                    this.imgList =result.body.message
                })
            }
        },
        components:{
            cmtbox:comment
        }
    }
</script>

<style scoped lang="scss">
.info-container{
    .info-title{
        text-align: center;
        color: #007aff;
        margin: 15px 0;
        font-size: 16px;
    }
    .info-sub{
        display: flex;
        justify-content: space-between;
        padding: 0 5px;
    }
    .info-content{
        font-size: 14px;
        line-height: 24px;
        color: black;
        padding: 0 5px
    }
    .thumb{
        display: flex;
        justify-content: space-between;

    }
}
.imgList{
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
}
.imgList li {

}
</style>