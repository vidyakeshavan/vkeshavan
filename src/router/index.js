import Vue from 'vue';
import Router from 'vue-router';
import Work from '@/components/Work';
import minARal from '@/components/minARal';
import About from '@/components/About';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Work',
      component: Work,
    },
    {
      path: '/minARal',
      name: 'minARal',
      component: minARal,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
