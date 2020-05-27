import Vue from 'vue'
import Router from 'vue-router'
import VolBidApply from '../components/VolBidApply.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VolBidApply',
      component: VolBidApply
    },
    {
      path: '/VolBidManage',
      name: 'VolBidManage',
      component: () => import('../components/VolBidManage.vue')
    },
    {
      path: '/VolBidCommission',
        name: 'VolBidCommission',
      component: () => import('../components/VolBidCommission.vue')
    },
    {
      path: '/VolBidRecheck',
        name: 'VolBidRecheck',
      component: () => import('../components/VolBidRecheck.vue')
    }
  ]
})
