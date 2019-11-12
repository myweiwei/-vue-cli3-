<template lang="">
    <div class='first flexBox'>
        <div class='left'>
            <Left></Left>
        </div>
        <div class='right'>
            <img src='img/big.png' class='bigImg'/>
            <Right></Right>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    @import  '../assets/sty.css';
    #app {
        background: #f5f5f5;
        .first {
            width:80%;
            height:100%;
            box-sizing: border-box;
            padding-top:1%;
            padding-bottom:1%;
            margin-left: 10%;
            .left {
                width:10%;
                height:100%;
                background: #f5f5f5;
                a {
                    width:100%;
                    text-align: center;
                    cursor: pointer;
                    height:50px;
                    line-height: 50px;
                    color:#000;
                    background: #fff;
                    margin-bottom: 2px;
                    display: inline-block;
                }
                a:hover{
                    background: #ccc;
                }
            }
            .right {
                flex:1;
                height: 100%;
                .bigImg {
                    width:100%;
                    height:200px;
                }
            }
        }
    }
</style>
<script>
import Left from '../components/Left.vue';
import Right from '../components/Right.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        Left,
        Right
    }
}
</script>