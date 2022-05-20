import { createApp } from 'vue'

const app = createApp({
    data() {
      return {
        product: 'Skins',
        image: "./imgs/steve.webp"
      }
    }
  }).mount('#app')