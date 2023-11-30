import { createApp } from 'vue';
import TheInput from '../vue/page/TheInput';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(TheInput);
  app.mount('#appElement');
});
