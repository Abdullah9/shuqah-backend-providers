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

<script>
import ServicesTable from '@/components/ServicesTable.vue';
import { useAuthStore } from '@/store/auth';
import { useServicesStore } from '@/store/services'
import { mapState } from 'pinia';
const servicesStore = useServicesStore();
const authStore = useAuthStore();


export default {
  components: { ServicesTable },
  computed: {
    ...mapState(useServicesStore, ['services']),
    ...mapState(useAuthStore, ['user']),
  },  
  mounted() {
    servicesStore.$state.type = this.user.category.category.category
    servicesStore.$state.sub_type = this.user.category.sub_category ? this.user.category.sub_category : ''
    servicesStore.getServices()
  },
  methods: {
    changeStatus(e) {
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
}
</script>