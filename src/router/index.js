import Vue from 'vue';
import Router from 'vue-router';
import Work from '@/components/Work';
import minARal from '@/components/minARal';
import About from '@/components/About';
import Break from '@/components/Break';
import Palcare from '@/components/Palcare';
import Unknown from '@/components/Unknown';
import Palliativecare from '@/components/Palliativecare';
import { VueElevator } from 'vue-elevator'
Vue.component('VueElevator', VueElevator);

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
    {
      path: '/break',
      name: 'Break',
      component: Break,
    },
    {
      path: '/palcare',
      name: 'Palcare',
      component: Palcare,
    },
    {
      path: '/unknown',
      name: 'Unknown',
      component: Unknown,
    },
    {
      path: '/palliativecare',
      name: 'Palliativecare',
      component: Palliativecare,
    },
  ],
});
