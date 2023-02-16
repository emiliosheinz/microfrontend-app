import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element)
}

if(process.env.NODE_ENV === 'development') {
  const devRootNode = document.querySelector('#dashboard-dev-root-node')

  if(devRootNode) {
    mount(devRootNode)
  }
}

export { mount };
