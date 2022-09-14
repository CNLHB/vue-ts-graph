const editor = () => import(/* webpackChunkName:"editor" */ '@/pages/editor/index.vue')
export default [
  {
    path: '/index',
    component: editor,
    name: 'editor',
    meta: {
      title: '首页'
    }
  },

]
