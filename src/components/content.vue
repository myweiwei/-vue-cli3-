<template>
    <div class='content'>
        <div v-for='(item,index) in list' :key='index' class='box'>
            <img :src="item.img" alt="没图">
            <p v-html='item.name' class='name' :title='item.name'></p>
            <p v-html='"￥"+item.value' class='value' :title='item.value'></p>
        </div>
    </div>
</template>
<style lang="scss">
    .content {
        padding: 2.5%;
        padding-top:0px;
        
        .box {
            text-align: center;
            display: inline-block;
            width: 19%;
            height:200px;
            margin:0.5%;
            background: #fff;
            border-radius:5px;
            padding-top:2%;
            img {
                width:45%;
                height:45%;
                display:inline-block;
            }
            .name {
                width:80%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #333;
                font-size: 12px;
                margin: 15px auto 10px;
            }
            .value {
                color: #e33333;
                font-size: 16px;
            }
        }   
    }
</style>
<script>
export default {
    props:["msg"],
    data() {
        return {
            list:{}
        }
    },
    methods: {
        getList:function(){
            var _this=this;
            _this.$http.get('json/'+_this.msg+'.json').then(function(res){
                _this.list=res.data;
                console.log(res.data);
            })
        }
    },
    created() {
        var me=this;
        me.getList();
    },
    watch:{
        msg:{
            handler(){
                this.getList()
            }
        }
    },
    mounted() {
        
    },
}
</script>