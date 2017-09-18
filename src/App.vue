<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="foot">
      <mt-tab-item id="takeout">
        <img slot="icon" src="/src/assets/image/外卖.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="/src/assets/image/订单.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="/src/assets/image/发现.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="user">
        <img slot="icon" src="/src/assets/image/我的.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import user from './components/user.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: '',
     selected:"takeout",
    }
  },
    components:{
      user
    },
 watch:{
     $route(to){
        console.log(to.path);
         this.selected=to.path.substring(1);
//        this.$router.push('/'+this.selected);
     },
      selected(){
         console.log(this.selected)
          this.$router.push('/'+this.selected);
      }
 }
}
</script>
<style>
  .foot{
    position: fixed;
    bottom:0;
    left:0;
  }
</style>



