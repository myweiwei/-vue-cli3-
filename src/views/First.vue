<template lang="">
    <div class='first flexBox'>
        <div class='left'>
            <Left></Left>
        </div>
        <div class='right'></div>
    </div>
</template>
<style lang='scss'>
    @import  '../assets/sty.css';
    .first {
        width:100%;
        height:100%;
        padding:1% 0;
        box-sizing: border-box;
        .left {
            width:10%;
            height:100%;
            background: red;
        }
        .right {
            flex:1;
            height:100%;
        }
    }
    
</style>
<script>
import Left from '../components/Left.vue';
export default {
    components:{
        Left
    }
}
</script>