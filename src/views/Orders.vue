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
          <OrdersTable :data="orders" @changeStatus="changeStatus"/>
        </v-tab-item>
      </v-tabs-items>
    </v-sheet>
  </section>
</template>

<script>
import ProductsTable from '@/components/ProductsTable.vue';
import OrdersTable from '@/components/OrdersTable.vue'
import { useAuthStore } from '@/store/auth';
import { useOrdersStore } from '@/store/orders'
import { mapState } from 'pinia';
const authStore = useAuthStore();
const ordersStore = useOrdersStore();

export default {
  components: { OrdersTable },
  data: () => ({
    items: ['Orders'],
  }),
  computed: {
    ...mapState(useOrdersStore, ['orders'])
  },   
  mounted() {
    ordersStore.getOrders()
  },
  methods: {
    changeStatus(e) {
      ordersStore.changeOrderStatus({...e})
      .then(res => {
        ordersStore.getOrders()
        this.$vToastify.success(res);
      })
    },
  },
}
</script>
