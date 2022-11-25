<template>
  <section>
    <v-sheet class="col-lg-7 pa-0 mx-auto">
      <v-tabs color="dark-1" v-model="tab" hide-slider class="px-1">
        <div class="d-flex align-center">
          <v-btn icon @click="$router.back()">
            <v-icon size="18">mdi-arrow-left</v-icon>
          </v-btn>
        </div>
        <v-tab v-for="item in tabs" :key="item" class="subtitle-2 font-weight-medium" >
          {{item}}
        </v-tab>
        <v-spacer></v-spacer>
      </v-tabs>
      
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in tabs"
          :key="item"
        >
          <v-sheet class="pa-5">
            <div class="subtitle-1 font-weight-bold secondary-3--text mx-2 mb-2 mt-n2">{{data.type}}</div>
            <div class=""  v-if="tab==0">
              <v-simple-table >
                <tbody>
                 <tr v-for="(item,i) in Object.keys(form)" :key="i">
                    <td class="subtitle-2 text-capitalize">{{item}} :</td>
                    <td class="subtitle-2 text-capitalize">{{data.product[item]}}</td>
                 </tr>
                </tbody>
              </v-simple-table>
             
              <v-sheet width="300" outlined class="pa-5 rounded mt-2">
                <div class="caption mb-2 font-weight-bold">MORE INFO</div>
                <div class="subtitle-2 font-weight-normal secondary-3--text">{{data?.instruction}}</div>
              </v-sheet>
            </div>
            <v-sheet class="" v-if="tab == 1">
              <v-simple-table>
                <tbody>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Drop-off Address:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.drop_off_address}}</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Date:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.date}}</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Time:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.time}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-sheet>

            <v-sheet width="300" class="" v-if="tab == 2">
              <v-simple-table>
                <tbody>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Product price:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.product.price}}</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Delivery fee:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.product.price}}</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Vat 15%:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.vat}}</td>
                  </tr>
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Total:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.price}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-sheet>
          
          </v-sheet>
        </v-tab-item>
      </v-tabs-items>
    </v-sheet>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { TYPE_MOVE_FURNITURE, TYPE_MAINTENANCE } from '@/plugins/constants.js'
import { useServicesStore } from '@/store/services';
import { useOrdersStore } from '@/store/orders';
const ordersStore = useOrdersStore();
const servicesStore = useServicesStore();

export default Vue.extend({
  data(): any {
    return {
      tab: 0,
      items: [],
      data: [],
      tabs: ['Order Details', 'Delivery Details', 'Invoice Details'],
      dialog: false,
      TYPE_MOVE_FURNITURE,
      TYPE_MAINTENANCE,
      form: {
        name: '',
        description: '',
        colors: '',
        weight: '',
        price: '',
      }
    }
  },
  mounted() {
    ordersStore.showOrder(this.$route.query.id)
    .then(res => {
      this.data = res
    })
  }
})
</script>