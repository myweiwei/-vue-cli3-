<template>
    <div class='leftComponent'>
       <div class='title'>热门推荐</div>
       <ul>
           <li  v-for='item in menuList' v-html='item.name' :key='item.id' @click='menu(item.id)' :class='item.id==active?"active":""'></li> 
       </ul>
    </div>
</template>
<script>
import MSG from './msg.js'
export default {
    data() {
        return {
            menuList:[
                {name:"手机",id:'sj'},
                {name:"电脑",id:'dn'},
                {name:"服饰",id:'fs'},
                {name:"手表",id:'sb'},
                {name:"书籍",id:'shuj'},
                {name:"玩具",id:'wj'},
                {name:"小家电",id:'xjd'},
                {name:"学习用品",id:'xxyp'},
                {name:"办公用品",id:'bgyp'},
                {name:"游戏必备",id:'yxbb'},
                {name:"游戏卡通",id:'yxkt'}
            ],
            active:'sj',
        }
    },
    methods: {
        menu :function(val){
            var me=this;
            me.active=val;
            MSG.$emit('val',val);

        }
    },
}
</script>
<style lang="scss" >
    .leftComponent {
        .title {
            width:100%;
            color:red;
            text-align: center;
        }
        li{
            width:100%;
            text-align: center;
            cursor: pointer;
            height:50px;
            line-height: 50px;
            color:#000;
            background: #fff;
            margin-bottom: 2px;
        }
        .active {
            background: #ccc;
        }
    }
</style>