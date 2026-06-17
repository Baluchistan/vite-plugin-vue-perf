# vite-plugin-vue-perf

> A highly optimized Vite plugin to inject performance markings into your Vue components during development.

## Features
- 🚀 Zero configuration needed
- ⚡️ Minimal overhead
- 🔍 Automatically hooks into `onMounted` and `onUpdated`

## Install
```bash
npm i -D vite-plugin-vue-perf
```

## Usage
```ts
// vite.config.ts
import vuePerf from 'vite-plugin-vue-perf'

export default {
  plugins: [
    vuePerf()
  ]
}
```\n