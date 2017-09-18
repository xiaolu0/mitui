<template>
    <div class="page-lazyload">
        <mt-header fixed title="欢迎进入" class></mt-header>
        <h3 class="page-title order">美食盛宴：</h3>
        <ul class="page-lazyload-list">
            <li class="page-lazyload-listitem" v-for="item in list">
                <img v-lazy="item" class="page-lazyload-image"><br/>
                美味午餐，等你选购！！！
            </li>
        </ul>
    </div>
</template>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .page-lazyload{
        background: #666;
    }

    ul{
        background:#666;
        padding-top: 5px;
    }
    ul li {
        list-style: none;
        margin:0 20px;
    }
    ul li img{
        width:300px;
        height:300px;
        margin:5px 5px;
    }
    image[lazy=loading] {
    width: 20px;
    height: 20px;
    margin: auto;
    }
    .takeout{
        margin-top:40px;
    }
</style>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                    'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                    'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                    'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                    'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                    'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg',
                    'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                    'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                    'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg',
                    'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                    'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                    'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                    'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                    'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                    'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
                ]
            };
        }
    };
</script>
