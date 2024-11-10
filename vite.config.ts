// vite.config.js
import { defineConfig } from 'vite'
import { ViteMurypJsLiteral } from '@muryp/vite-html'

export default defineConfig({
  base: 'https://muryp.github.io/quest-todo/',
  plugins: [
    ViteMurypJsLiteral({
      minify: {
        html: true,
      },
    }),
  ],
})
