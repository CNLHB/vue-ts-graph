import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import reportWebVitals from './utils/report';
import { onCLS, onFID, onLCP } from 'web-vitals';
import ElementPlus from 'element-plus';
function logDelta({ name, id, delta }) {
  // console.log(`${name} matching ID ${id} changed by ${delta}`);
}

onCLS(logDelta);
onFID(logDelta);
onLCP(logDelta);
reportWebVitals(function (e) {
  // console.log(e);
});
const app = createApp(App);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(store).use(router).mount('#app');
