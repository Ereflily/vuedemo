import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import DetailPage from '../pages/detail.vue'

import ForecastIndex from '../pages/detail/forecast.vue'
import PublishIndex from '../pages/detail/publish.vue'
import CountIndex from '../pages/detail/count.vue'
import AnalysisIndex from '../pages/detail/analysis.vue'
import OrderListIndex from '../pages/orderList.vue';
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path : '/',
      component : IndexPage
    },
    {
      path : '/detail',
      component : DetailPage,
      redirect : '/detail/analysis',
      children : [
        {
          path : 'forecast',
          component: ForecastIndex
        },
        {
          path : 'count',
          component: CountIndex
        },
        {
          path : 'publish',
          component: PublishIndex
        },
        {
          path : 'analysis',
          component: AnalysisIndex
        },
      ]
    },
    {
      path : '/orderlist',
      component : OrderListIndex
    }
  ]
})
