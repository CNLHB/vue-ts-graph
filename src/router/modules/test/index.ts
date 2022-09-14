const test = () =>
  import(/* webpackChunkName:"test" */ '@/pages/demoCanvas/index.vue');
// init all route
const routes = [
  {
    path: '/test',
    component: test,
    name: 'test',
    meta: {
      title: 'test',
    },
  },
];
// webpack写法
// const allRoutes = require.context('@/pages/demoCanvas', true, /.index.vue$/);
// allRoutes.keys().forEach(filename=>{
//   const component = allRoutes(filename)
//   const name = '/'+filename.split('/')[1]
//   routes.push({
//     path:name,
//     component:component.default || component
//   })
// })
const utilFun: any = {};
const allRoutes: any = import.meta.glob('@/pages/demoCanvas/*/*.vue', {
  eager: true,
});
Object.keys(allRoutes).forEach((fileName) => {
  const name = fileName
    .replace(/\.\/|\.vue/g, '')
    .replace('/src/pages', '')
    .replace('/index', '');
  utilFun[name] = allRoutes[fileName].default;
  const component = allRoutes[fileName].default;
  routes.push({
    path: name,
    name: name,
    meta: {
      title: name,
    },
    component: component.default || component,
  });
});
export default routes;
