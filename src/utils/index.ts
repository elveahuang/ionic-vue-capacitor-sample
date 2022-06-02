import { App } from 'vue';
import router from '@/plugins/router';
import { IonicVue } from '@ionic/vue';
import { store } from '@/plugins/store';

export const setupApp = async (app: App) => {
    //
    await app.use(IonicVue);
    await app.use(store);
    await app.use(router);
    //
    router.isReady().then(() => {
        app.mount('#app');
    });
};
