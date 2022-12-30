import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const appurl = env.VITE_APP_URL
  const appname = env.VITE_APP_NAME
  
  return {
    base: env.NODE_ENV == 'production' ? '/moon-phase/' : '/',
    plugins: [createHtmlPlugin({ inject: { data: { appname, appurl } } }), vue()]
  }
})

// plugins: [createHtmlPlugin({ inject: { data: env } }), vue()]

// https://vitejs.dev/config/
// export default defineConfig({
//   base: process.env.NODE_ENV === 'production' ? '/moon-phase/' : '/',
//   plugins: [vue()]
// })


// export default defineConfig({ mode }) => {
//   const env = loadEnv(mode, process.cwd())
//   return {
//     plugins: [
//       vue(),
//       createHtmlPlugin({
//         minify: true,
//         inject: {
//           data: {
//             title: env.VITE_MY_FOO,
//           }
//         }
//       }),
//     ],
//   }
// }