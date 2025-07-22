import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
    compressPublicAssets: true,
    minify: true
  },
  css: ['@/assets/scss/main.scss'],
  modules: [],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vite: {
      css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/abstracts/variables" as *;
          @use "~/assets/scss/abstracts/mixins" as *;
          `
        }
      }
    },
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    },
  },
  compatibilityDate: '2024-12-05',
  // pwa: {
  //   manifest: {
  //     name: 'Nuxt 3 Starter',
  //     short_name: 'Nuxt 3 Starter',
  //     description: 'Nuxt 3 Starter',
  //     theme_color: '#ffffff',
  //     lang: 'en',
  //     icons: [
  //       {
  //         src: 'pwa-64x64.png',
  //         sizes: '64x64',
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'pwa-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any'
  //       },
  //       {
  //         src: 'maskable-icon-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'maskable'
  //       }
  //     ]
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //     globPatterns: ['**/*.{js,css,html,png,svg,ico}']
  //   },
  //   client: {
  //     installPrompt: true,
  //     periodicSyncForUpdates: 3600
  //   },
  //   devOptions: {
  //     enabled: true,
  //     suppressWarnings: true,
  //     navigateFallbackAllowlist: [/^\/$/],
  //     type: 'module'
  //   }
  // }
});