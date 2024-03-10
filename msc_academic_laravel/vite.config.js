import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/App.js', 'resources/css/app.css'],
            refresh: true,
        }),

    ],

});

