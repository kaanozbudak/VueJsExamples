var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Gtech',
    image: 'img/socks-green.jpg',
    showDiv: false,
    inStock: true,
    outStock: true,
    inventory: 1,
    details:["%80 cotton", "%20 polyster", "Gender"],
    variants:[
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "img/socks-green.jpg"

      },
      {
        variantId:2235,
        variantColor: "blue",
        variantImage: "img/socks-blue.jpg"

      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0
  },
  methods:{
    addToCart: function() {
      this.cart += 1
      this.outStock = true
      if (this.cart == 10) {
        this.inStock = false

      }
    },
    removeToCart: function() {
      this.cart -= 1;
      if (this.cart < 10) {
        this.inStock = true
      }
      if (this.cart == 0) {
        this.outStock = false
        this.cart = 0
      }
    },
    updateProduct: function(variantImage) {
      this.image = variantImage
    }
  },
  computed: {
    title(){
      return this.brand + ' / ' + this.product
    }
  }
})
