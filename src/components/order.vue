<template>
    <div class="page-cell">
        <mt-header fixed title="欢迎进入" ></mt-header>
        <div class="page-title order">订单中心</div>
        <mt-cell-swipe
                v-for="(item,index) in arr"
                :right="rightButtons"
                :title="item.title">
           {{item.des}}
          <img slot="icon" src="/src/assets/image/baidu_5.jpg" style="width:20px;height:20px;">
        </mt-cell-swipe>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              arr:[
                   {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                   {title:"四季美食",des:"钟于发现，相“食”便是缘。"},
                   {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                   {title:"四季美食",des:"钟于发现，相“食”便是缘。"},
                  {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                  {title:"四季美食",des:"钟于发现，相“食”便是缘。"},
                  {title:"四季美食",des:"享受美味，给你非一般的感受。"},
                  {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                  {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                  {title:"四季美食",des:"钟于发现，相“食”便是缘。"},
                  {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                  {title:"四季美食",des:"只为您舌尖上的享受"},
                  {title:"四季美食",des:"随时品尝，你身边的美厨娘。"},
                  {title:"四季美食",des:"钟于发现，相“食”便是缘。"},
                  {title:"四季美食",des:"只为您舌尖上的享受"}

              ]
          }
        },
        created() {
            this.rightButtons = [
                {
                    content: '在来一单',
                    style: { background: 'lightgray', color: '#fff' }
                },
                {
                    content: 'Delete',
                    style: { background: 'red', color: '#fff' },
                    handler: () => this.$messagebox('delete')
                }
            ];
        },
        methods: {
            leftButtonHandler(evt) {
                console.log(123);
            }
        }
    };
</script>
<style>
    .order{
        margin-top:40px;
    }
</style>