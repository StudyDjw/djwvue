<template>
    <div>
        <mt-swipe :auto="4000">
            <!--在组件中使用v-for一定要使用key-->
            <mt-swipe-item v-for="lunboItem in lunboList" v-bind:key="lunboItem.id">
                <img v-bind:src="lunboItem.img" alt="" :class="{ full:isfull }">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>


    export default {
        props:['lunboList','isfull']
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
    }
    /*图片是行内元素*/
    img{
        height: 100%;
    }
    .full{
        width: 100%;
    }
</style>