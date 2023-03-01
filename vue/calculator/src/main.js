import Vue from 'vue'
import App from './App'

new Vue({
  render: h=> h(App) // e o mesmo que a linha abaixo, e o padrao do "vue create"
  // render(createElement){
  //   return createElement(App)
  // }
}).$mount("#app")