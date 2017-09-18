
<template>
    <div id="user">
    <mt-header title="仅图标">
        <router-link to="/find" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="img">
        <a><img src="/src/assets/image/baidu_6.jpg" style="height:200px;width:380px;"/></a>
    </div>
        <mt-cell-swipe
                v-for="(item,index) in arr"
                :right="rightButtons"
                :title="item.title">
                   >
        </mt-cell-swipe>
    </div>
</template>

<script>
    export default {
        name: 'page-field',
        data(){
            return{
                arr:[
                    {title:"我的订单"},
                    {title:"我的预约"},
                    {title:"收货地址"},
                    {title:"优惠券（9）"},
                    {title:"联系客服"}
                ]
            }
        }
    };
</script>
<style>
    *{
    margin:0;
    padding:0;
    }
    .user {
        margin-top: 40px;
    }
</style>