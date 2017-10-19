import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * 加载模板
 */
Vue.use(VueRouter)
/**
 * 配置路由文件
 * @type {VueRouter}
 */
const router = new VueRouter({
  routes:[{
    path:'/',
    name:'init',
    meta:{title:'初始化'},
    component: resolve => require(['../components/init.vue'], resolve),
    // children: [
    //   {
    //     path:'/init/home',
    //     name:'home',
    //     meta:{title:'主页(需要登陆)',requireAuth:true},
    //     component: resolve => require(['../components/home.vue'], resolve)
    //   }
    // ]
  },{
    path:'/home',
    name:'home',
    meta:{title:'主页'},
    component: resolve => require(['../components/home.vue'], resolve)
  }]
})

/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})

/**
 * 路由输出
 */
export default router
