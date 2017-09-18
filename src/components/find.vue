<template>
    <div class="find">
        <mt-header fixed title="欢迎进入" class></mt-header>
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item><img src="/src/assets/image/baidu_2.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="/src/assets/image/baidu_3.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="/src/assets/image/baidu_4.jpg"></mt-swipe-item>
        </mt-swipe>
        <ul>
            <li><img src="/src/assets/image/baidu_6.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_6.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_5.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_4.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_3.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_2.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_4.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_3.jpg">
                <p>景色宜人</p>
            </li>
            <li><img src="/src/assets/image/baidu_2.jpg">
                <p>景色宜人</p>
            </li>
        </ul>
    </div>
</template>
<style>
    *{
        margin:0;
        padding:0;
    }
    .find{
       margin-top:40px;
    }
     .banner{
         width:360px;
         height:200px;
         overflow:hidden;
         margin-top: 40px;

     }
     ul{
         overflow: hidden;
         padding-bottom:60px;
     }
    ul li{
        list-style: none;
        float:left;
      margin:5px 10px;
    }
    ul li img{
        width:100px;
        height:100px;
    }

</style>