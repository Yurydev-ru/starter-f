import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/scss/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ],
  modules: ['@vite-pwa/nuxt'],
  
  features: {
    inlineStyles: false
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/assets/scss/abstracts/_variables" as *;
          @use "/assets/scss/abstracts/_mixins" as *;
          `
        }
      }
    }
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})

export const pwa = {
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
  registerType: 'autoUpdate',
  injectManifest: {
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
  },
}