import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/doktor_web_2/',
  server: {
    port: 5173,
    open: '/doktor_web_2/',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
  plugins: [
    react(),
    // GitHub Pages için SPA routing düzeltmesi
    {
      name: 'github-pages-spa',
      generateBundle(options, bundle) {
        // 404.html dosyasını oluştur
        this.emitFile({
          type: 'asset',
          fileName: '404.html',
          source: `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Elif Aydın - Plastik ve Rekonstrüktif Cerrahi Uzmanı</title>
    <script type="module" crossorigin src="/doktor_web_2/assets/index-BXy0TVfn.js"></script>
    <link rel="modulepreload" crossorigin href="/doktor_web_2/assets/vendor-9fiDQRhm.js">
    <link rel="modulepreload" crossorigin href="/doktor_web_2/assets/motion-CmPpcg2o.js">
    <link rel="modulepreload" crossorigin href="/doktor_web_2/assets/router-MwVNwmpi.js">
    <link rel="stylesheet" crossorigin href="/doktor_web_2/assets/index-6l-3Jbvd.css">
</head>
<body>
    <div id="root"></div>
    <script>
        // GitHub Pages SPA routing düzeltmesi
        (function(l) {
            if (l.search[1] === '/' ) {
                var decoded = l.search.slice(1).split('&').map(function(s) { 
                    return s.replace(/~and~/g, '&')
                }).join('?');
                window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + decoded + l.hash
                );
            }
        }(window.location))
    </script>
</body>
</html>`
        });
      }
    }
  ],
});
