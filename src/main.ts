import { createApp } from 'vue';
//
import App from '@/App.vue';
import { setupApp } from '@/utils';
//
import '@/theme/ionic.scss';

setupApp(createApp(App)).then(() => {
    console.log(`Application has been started.`);
});
