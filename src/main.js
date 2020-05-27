// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'PkcLCt6vF3ksNmMxuDwGjufe6G7g0tRW'
})
import heatmapjsVue from 'heatmapjs-vue'
Vue.use(heatmapjsVue)
Vue.prototype.BMap = BaiduMap
Vue.prototype.heatmap = heatmapjsVue
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
