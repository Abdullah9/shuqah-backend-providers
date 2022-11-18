<template>
  <v-sheet class="pa-2 text-right" width="300">
    <v-text-field v-model="price"  filled dense class="subtitle-2 noline mb-n5" placeholder="Input new price"/>
    <v-btn @click="send" small text class="subtitle-2 secondary-3--text text-capitalize">
      Send
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import { useServicesStore } from '@/store/services';
const servicesStore = useServicesStore();

export default Vue.extend({
  props: {
    id: {
      type: String
    },
  },
  data: () => ({
    price: 0
  }),

  methods: {
    send() {
      servicesStore.priceOfferService({
        id: this.id,
        price_offer: this.price
      }).then(res => {
        this.price = 0
        this.$vToastify.success(res);
      })
    }
  }
})
</script>