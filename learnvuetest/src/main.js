import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  //运行开发者模式


new Vue({
    // 原型
  // render:function(createElement) {
  //   return createElement(App);
  // }
  // 缩写1
  // render(createElement) {
  //   return createElement(App);
  // }

  // 缩写2 约定可以简写成 h
  // render(h) {
  //   return h(App);
  // }

  render: h => h(App),
}).$mount('#app')  //手动挂载
