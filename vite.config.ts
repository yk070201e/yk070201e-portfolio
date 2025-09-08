import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // 코드 압축 및 난독화 설정
    minify: 'terser',
    terserOptions: {
      compress: {
        // 사용하지 않는 코드 제거
        drop_console: true,
        drop_debugger: true,
        // 추가 압축 옵션
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        // 변수명 난독화
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        // 주석 제거
        comments: false,
      }
    },
    // 소스맵 비활성화 (디버깅 정보 제거)
    sourcemap: false,
    // 청크 크기 경고 비활성화
    chunkSizeWarningLimit: 1000,
  }
})
