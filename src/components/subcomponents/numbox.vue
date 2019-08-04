<template>
<div>
    <!--问题是我们不知道什么时候可以拿到quantity   ，但是会有一刻拿到这个quantity 因为是异步操作ajax-->
    <!--我们可以使用watch这个属性，来监听从父组件传过来的quantity-->
    <p>{{quantity }}</p>
    <div class="mui-numbox" data-numbox-min="1" v-bind:data-numbox-max="quantity">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"  v-on:change="countChange" ref="numbox">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</div>

</template>

<script>
    import mui from "../../lib/mui/js/mui.js"


    export default {
        mounted() {
            mui(".mui-numbox").numbox()
        },
        data() {
            return {}
        },
        props:['quantity'],
        methods: {
            countChange() {
                //当数量改变的时候，将数量的值返回给父组件
                this.$emit("getcount", parseInt(this.$refs.numbox.value))
            }
        },
        watch:{
            'quantity':function (newVal,oldVal) {
                //只要quantiy的值传过来，发生变化，直接使用
                mui(".mui-numbox").numbox().setOption('max',newVal)
            }
        }
    }
</script>

<style scoped>

</style>