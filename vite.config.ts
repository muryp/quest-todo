// vite.config.js
import { defineConfig } from 'vite'
import { ViteMurypJsLiteral } from '@muryp/vite-html'

export default defineConfig({
  base: 'https://muryp.com',
  plugins: [
    ViteMurypJsLiteral({
      minify: {
        html: true,
      },
    }),
  ],
})
