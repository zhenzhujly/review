import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/admin'

// import Index from '../components/index'

import One from '../views/one'
import Two from '../views/two'
import Thre from '../views/thre'
import Secon from '../views/index/secon'
import Indexs from '../views/index/index'
import child_One from '../views/child/child_one'
import child_Two from '../views/child/child_two'
import child_Thre from '../views/child/child_thre'
import Index from '../views/index'


Vue.use(Router)

const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin,
      children:[
        {
          path: '/admin/one',
          name: 'one',
          component: One,
          nm:'第一',
          children:[
            {
              path: '/admin/child_one',
              name: 'child_one',
              component: child_One,
              nm:'第一页',
            },
            {
              path: '/admin/child_two',
              name: 'child_two',
              component: child_Two,
              nm:'第二页',
            },
            {
              path: '/admin/child_thre',
              name: 'child_thre',
              component: child_Thre,
              nm:'第三页',
            }
          ]
        },
        {
          path: '/admin/two',
          name: 'two',
          nm:'第二',
          component: Two
        },
        {
          path: '/admin/thre',
          name: 'thre',
          nm:'第三',
          component: Thre
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/index/index',
      name: 'index',
      component: Indexs
    },
    {
      path: '/index/secon',
      name: 'secon',
      component: Secon
    }
  ]
});

router.replace('/index/index');

export default router;
