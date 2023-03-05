import { createRouter,createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Counter from '@/views/CounterView.vue';


const routes = [
  {
    path:"/",
    name:"home",
    component: Home
  },
  {
    path:"/about",
    name:"about",
    component: About
  },
  {
    path:"/counter",
    name:"counter",
    component: Counter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router