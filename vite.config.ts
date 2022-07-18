import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

// @ts-ignore
export default ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    return defineConfig({
        base: env.VITE_APP_BASE ?? '/',
        server: {
            port: 8081,
        },
        build: {
            outDir: env.VITE_APP_DIST ?? 'www',
        },
        resolve: {
            alias: {
                'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-browser.prod.js',
            },
        },
        plugins: [vue(), tsconfigPaths()],
    });
};
