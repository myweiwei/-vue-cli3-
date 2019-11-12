<template>
    <div class='right'>
        <Content :msg='msg'></Content>
    </div>
</template>
<style lang="scss" scoped>
    .right {
        background: #f5f5f5;
    }
</style>
<script>
import MSG from './msg.js'
import Content from './content.vue'
export default {
    data() {
        return {
            msg:'sj'
        }
    },
    components:{
        Content
    },
    mounted(){
        var _this=this;
        MSG.$on('val',function(val){
            _this.msg=val;
        })
    }
}
</script>