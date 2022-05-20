import { createApp } from 'vue'

const app = createApp({
    data() {
      return {
        cart: 0,
        product: 'Skins',
        image: "./imgs/steve.webp",
        inventory: 10,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './imgs/steve.webp' },
          { id: 2235, color: 'blue', image: './imgs/alex.webp' }
        
        ],
      }
    },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateImage(variantImage) {
        this.image = variantImage

      }
    }
  }).mount('#app')