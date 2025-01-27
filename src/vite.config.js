import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host: '172.0.0.1',
        port: 5173,
        hmr: {
            host: 'localhost',
            port: 80,
            watch: {
                usePolling: true,
            },
        }
    }
});

