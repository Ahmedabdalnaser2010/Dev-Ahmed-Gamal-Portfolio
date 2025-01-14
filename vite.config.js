import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // تأكد من استخدام Terser
    terserOptions: {
      compress: {
        drop_console: true, // حذف console.log من الكود
      },
      output: {
        comments: false, // إزالة التعليقات
      },
    },
  },
  base: "/Dev-Ahmed-Gamal-Portfolio/",
});


// ,
