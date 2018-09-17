import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import eventBus from './eventBus'

// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

// Vue.use(iView);
Vue.use(ElementUI);
Vue.prototype.$bus=eventBus;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  eventBus,
  // components: { App },
  // template: '<App/>'
  render:h=>h(App) //render作用：更新视图的函数
})
