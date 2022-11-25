<template>
  <section>
    <v-sheet>
      <v-tabs color="#333" v-model="tab" class="mb-5">
        <v-tab v-for="item in items" :key="item" class="subtitle-2 font-weight-medium">
          {{ item }}
        </v-tab>
      </v-tabs>
      <div class="d-flex align-center justify-space-between" v-if="tab == 0">
        <div class="d-flex align-center">
          <div class="col-lg-3">
            <v-select filled dense hide-details class="noline subtitle-2 font-weight-medium"/>
          </div>
          <div class="body-2 font-weight-medium grey--text">entries per page</div>
        </div>
        <div class="col-lg-3">
          <v-text-field filled dense hide-details class="noline subtitle-2 font-weight-medium" placeholder="Search..."/>
        </div>
      </div>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, i) in items" :key="i">
          <ProductsTable :data="products"/>
        </v-tab-item>
      </v-tabs-items>
    </v-sheet>
   
    <v-dialog v-model="dialog" max-width="350">
      <v-sheet class="pa-5">
        <h3 class="">Add Product</h3>
        <div class="ma-2">
          <v-form>
            <label for="" class="caption">NAME</label>
            <v-text-field
              filled 
              dense 
              class="noline subtitle-2 font-weight-medium mb-n7" 
              v-model="form.name"
              :error-messages="errors.name"
            />
            <div class="d-flex justify-end mt-5">
              <v-btn outlined class="mx-2" @click="close">Cancel</v-btn>
              <v-btn color="primary" @click="btnContinue">Continue</v-btn>
            </div>
          </v-form>
        </div>
      </v-sheet>
    </v-dialog>
  </section>
</template>

<script>
import ProductsTable from '@/components/ProductsTable.vue';
import { useProductsStore } from '@/store/products'
import { useAuthStore } from '@/store/auth';
import { mapState } from 'pinia';
const productsStore = useProductsStore();
const authStore = useAuthStore();

export default {
  components: { ProductsTable },
  data: () => ({
    items: ['Products', 'Add Product'],
    tab: null,
    dialog: false,
    errors: [],
    adding: false,
    imageId: null,
    form: {
      name: '',
      description: '',
      colors: '',
      weight: '',
      price: '',
      quantity: 0,
      type: ''
    }
  }),
  computed: {
    ...mapState(useProductsStore, ['products'])
  },   
  mounted() {
    this.form.type = authStore.$state.user.category.category.category
    productsStore.getProducts()
  },
  methods: {
    close() {
      this.dialog = false;
      this.tab = null
    },
    btnContinue() {
      productsStore.addProduct(this.form)
      .then(res => {
        this.adding = true
        this.dialog = false
        this.$vToastify.success('Product saved.');
        this.$router.push({ name: 'product-details', query: {id: res.id} })
      })
    },
  },
  watch: {
    tab(val) {
      if(val == 1) {
        if(!this.adding) {
          this.dialog = true
          this.tab = null
        }
      }
      // else {
      //   if(this.adding) {
      //     this.tab = 1
      //     this.$vToastify.prompt({
      //       body: "Are you sure you want to leave this page? The changes you made will be lost.",
      //       answers: { Yes: true, No: false }
      //     }).then(val => {
      //       if(val) {
      //         this.adding = false
      //         const to = this.$router.resolve({query: {}})
      //         this.$router.push(to.location)
      //       }
      //     })
      //   }else {
      //     this.adding = false
      //     const to = this.$router.resolve({query: {}})
      //     this.$router.push(to.location)
      //   }
      // }
    }
  }
}
</script>
