import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
    ,VitePWA({
      manifest:{
        name:"Chat App",
        short_name:"ChatAi",
        description:"A real-time collaborative chat application where multiple users can work together on projects and interact with an integrated AI assistant for instant support and intelligent responses",
        theme_color:"#2563eb",
       "icons": [
    {
      "src": "icons/Chat_iicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "icons/Chat_iicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  start_url:".",
  display:"standalone"
      },
      registerType:'prompt' //ki agr new version ayega toh check karega ki apko yeah version use karna hai ki nhi aur " Autoupdate" hota toh nhi puchta bo kch bhi
      ,
      
    }
    )
  ],
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  proxy: {
    "/cdn": {
      target: "http://localhost:3000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/cdn/, ""),
    },
  },
});
