import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import fs from "fs";
import {ServerOptions as HttpsServerOptions} from "https";
import zipPack from "vite-plugin-zip-pack";

const env = loadEnv('all', process.cwd(), ['']);

let https_config: HttpsServerOptions | undefined;

if (env.HTTPS_CERT && env.HTTPS_KEY) {
  https_config = {
    key:  fs.readFileSync(env.HTTPS_KEY),
    cert: fs.readFileSync(env.HTTPS_CERT),
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    https: https_config,
  },
  plugins: [
    vue(),
    vueDevTools(),
    zipPack({outDir: '.'}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
