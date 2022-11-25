<template>
  <section>
    <v-sheet class="pa-5 mx-auto" v-if="!loading">
      <div class="mb-5">
        <v-btn text @click="$router.push('products')" class="text-capitalize">
          <v-icon left>mdi-arrow-left</v-icon>
          Back to products
        </v-btn>
      </div>
      <v-row>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" v-for="item in Object.keys(form)" :key="item">
              <label for="" class="caption"> {{item.replaceAll('_', ' ').toUpperCase()}}</label>
              <v-text-field
                filled 
                dense 
                class="noline subtitle-2 font-weight-medium mb-n7" 
                v-model="product[item]"
                :error-messages="errors[item]"
              />
            </v-col>
          </v-row>
          <v-btn @click="update" class="mt-5 white--text" color="dark-1">Save changes</v-btn>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="caption mt-5 mx-5">IMAGES</div>
          <div class="d-flex flex-wrap">
            <v-avatar 
              tile 
              size="120" 
              color="secondary" class="ma-2" 
              v-for="image in product.images" :key="image.id"
              style="cursor: pointer"
              @click="findImage(image.id)"
            >
              <v-img :src="image.file"></v-img>
            </v-avatar>
          </div>
          <div class="caption text-center">Click the image to update.</div>
        </v-col>
      </v-row>
     
    
    </v-sheet>
    <div class="" v-else>Loading data...</div>
    <input type="file" ref="file" class="d-none" @change="accept">
  </section>
</template>

<script>
import { useProductsStore } from '@/store/products'
const productsStore = useProductsStore();

export default {
  data: () => ({
    product: [],
    errors: [],
    imageId: null,
    form: {
      name: '',
      description: '',
      colors: '',
      weight: '',
      price: '',
      quantity: 0
    },
    loading: true
  }),
  mounted() {
    productsStore.showProduct(this.$route.query.id)
    .then(res => { 
      this.product = res 
      this.loading = false
    })
  },
  methods: {
    findImage(id) {
      this.imageId = id;
      this.$refs.file.click()
    },
    accept(e) {
      const formData = new FormData()
      formData.append('id', this.imageId)
      formData.append('image', e.target.files[0])
      productsStore.updateImage(formData)
      .then(res => {
        this.$vToastify.success(res)
        productsStore.showProduct(this.$route.query.id)
        .then(res => { this.product = res })
      })
    },
    update() {
      productsStore.updateProduct(this.product).then(res => {
        this.$vToastify.success(res)
      })
    }
  }
}
</script>