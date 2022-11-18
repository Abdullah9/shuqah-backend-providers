<template>
  <v-sheet>
    <div class="d-flex align-center justify-space-between">
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
    <ServicesTable :data="services" @changeStatus="changeStatus"/>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import ServicesTable from '@/components/ServicesTable.vue';
import { useServicesStore } from '@/store/services'
import { mapState } from 'pinia';
const servicesStore = useServicesStore();

export default Vue.extend({
  components: { ServicesTable },
  computed: {
    ...mapState(useServicesStore, ['services'])
  },  
  mounted() {
    servicesStore.getServices()
  },
  methods: {
    changeStatus(e) {
      console.log(e);
      servicesStore.changeStatusService({...e})
      .then(res => {
        servicesStore.getServices()
        this.$vToastify.success(res);
      })
    },

    sendOffer(e) {
      servicesStore.priceOfferService({...e})
      .then(res => {
        servicesStore.getServices()
        this.$vToastify.success(res);
      })
    }
  }
})
</script>