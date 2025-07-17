<!--
 * @Author: liuyuwei liuyuwei@fengtaisec.com
 * @Date: 2025-07-14 15:10:23
 * @LastEditors: liuyuwei liuyuwei@fengtaisec.com
 * @LastEditTime: 2025-07-14 15:32:51
 * @FilePath: /vue-project/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <main>{{ person.obj.id.value + 1 }}</main>
</template>
<script setup>
import { ref } from 'vue'
const person = {
  name: 111,
  obj: {
    id: ref(2),
  },
}
</script>
