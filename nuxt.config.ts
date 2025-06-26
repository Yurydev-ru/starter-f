import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'vercel',
  },
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: false
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Nuxt 3 Starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        { name: 'description', content: 'Nuxt 3 Starter' },
        
      ],
    },
  },
  css: ['~/assets/scss/main.scss'],
  components: {
    dirs: [
    { path: 'app/components', pathPrefix: false },
    { path: 'layers/**/components', pathPrefix: false }
  ]
  },
  modules: ['@vite-pwa/nuxt'],
  vite: {
      css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/assets/scss/abstracts/variables" as *;
          @use "/assets/scss/abstracts/mixins" as *;
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
  compatibilityDate: '2025-05-15',
  pwa: {
    manifest: {
      name: 'Nuxt 3 Starter',
      short_name: 'Nuxt 3 Starter',
      description: 'Nuxt 3 Starter',
      theme_color: '#ffffff',
      lang: 'en',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  }
});