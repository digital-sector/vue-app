import { createApp } from 'vue'

const app = createApp({
    data() {
      return {
        cart: 0,
        brand: 'VueMastery',
        product: 'Skins',
        selectedVariant: 0,
        inventory: 10,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './imgs/steve.webp', quantity: 50 },
          { id: 2235, color: 'blue', image: './imgs/alex.webp', quantity: 0 }
        
        ],
      }
    },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateVariant(index) {
        this.selectedVariant = index
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant]
      }
    }
    
  }).mount('#app')