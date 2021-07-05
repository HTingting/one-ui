import Vue from 'vue'
import App from './App.vue'
// 第一步：导入button组件
import OneButton from './components/Button.vue'

Vue.config.productionTip = false

// 第二步，注册组件，设置（组件名，组件）
Vue.component(OneButton.name, OneButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
