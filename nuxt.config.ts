import { defineNuxtConfig } from 'nuxt'
import {NuxtPage} from "@nuxt/schema";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Comico',
            meta: [
                { name: 'viewport', content: 'width=device-width,initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Comico - Your personal community',
                },
                {
                    name: 'generator',
                    content: '@nguyenshort - Developer of Love'
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.0/lazysizes.min.js',
                    type: 'text/javascript',
                    async: true,
                    defer: true
                }
            ],
            link: [
                {
                    rel: 'shortcut icon',
                    href: '/favicon/favicon.ico'
                },
                // For new browsers - multisize ico
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    sizes: '16x16 32x32',
                    href: '/favicon/favicon.ico'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '152x152',
                    href: '/favicon/favicon-152-precomposed.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '144x144',
                    href: '/favicon/favicon-144-precomposed.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '120x120',
                    href: '/favicon/favicon-120-precomposed.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '114x114',
                    href: '/favicon/favicon-114-precomposed.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon/favicon-180-precomposed.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '72x72',
                    href: '/favicon/favicon-72-precomposed.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '57x57',
                    href: '/favicon/favicon-57.png'
                },
                {
                    rel: 'icon',
                    sizes: '32x32',
                    href: '/favicon/favicon-32.png'
                },
                {
                    rel: 'icon',
                    sizes: '192x192',
                    href: '/favicon/favicon-192.png'
                },
                {
                    rel: 'manifest',
                    href: '/favicon/manifest.json'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,500,600,700'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Merriweather:700,400,400'
                }
            ],
            noscript: [
                { children: 'Javascript is required' }
            ]
        }
    },
    css: ['assets/style/global.css'],
    modules: [
        '@vueuse/nuxt'
    ],
    buildModules: ["@pinia/nuxt"],
    runtimeConfig: {
        public: {
            firebaseAuthCookie: {
                name: 'comico',
                lifetime: 60 * 60 * 8,
                domain: '',
                path: '/',
                sameSite: 'lax',
            },
            comico_graphql: 'http://localhost:3000/graphql',
        }
    },
    experimental: {
        viteNode: true
    },
    server: {
        port: 8001,
    },
    router: {
        linkActiveClass: '_on'
    },
    hooks: {
        'pages:extend'(pages: NuxtPage[]) {
            pages.forEach((page) => {
                if (page.name === 'story') {
                    page.path = '/truyen/:slug'
                }
            })
        }
    },
    vite: {}
})
