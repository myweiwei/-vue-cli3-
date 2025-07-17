/*
 * @Author: liuyuwei liuyuwei@fengtaisec.com
 * @Date: 2025-07-17 09:49:59
 * @LastEditors: liuyuwei liuyuwei@fengtaisec.com
 * @LastEditTime: 2025-07-17 16:51:28
 * @FilePath: /vue-project/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入所有组件
import AboutView from './AboutView.vue'
import HomeView from './HomeView.vue'

// 组件列表
const components = {
  AboutView,
  HomeView,
}

// 插件安装方法（支持 app.use()）
const install = (app) => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })
}

// 同时支持按需导入和全局导入
export { HomeView, AboutView }

export default {
  install,
  ...components,
}
