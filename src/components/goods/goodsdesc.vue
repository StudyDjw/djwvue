<template>
    <div class="info-container">

        <h1 class="info-title">{{ info.title }}</h1>
        <hr/>
        <p v-html="info.content" class="info-content"></p>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                info: {}
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            getInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getdesc/' + this.id).then((result) => {
                    if (result.body.status === 0) {
                        this.info = result.body.message[0]
                    } else {
                        Toast('获取图文介绍失败')
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .info-container {

        padding: 0 4px;
        .info-title {
            color: #0062cc;
            padding: 10px 0;
            font-size: 14px;
        }
        .info-content{
            img{
                width:100%;
            }
        }


    }

</style>