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
                  <tr>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">
                      {{data.type == TYPE_MOVE_FURNITURE ? 'Pickup Address:' : 'Address:'}}
                    </td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.pickup_address}}</td>
                  </tr>
                  <tr v-if="data.type == TYPE_MOVE_FURNITURE">
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Drop-off Address:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.drop_off_address}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
             
              <v-sheet width="300" class="my-5" v-if="data.type == TYPE_MOVE_FURNITURE">
                <v-simple-table >
                  <tbody>
                    <tr>
                      <th class="subtitle-2 font-weight-normal secondary-3--text">Shipment Type</th>
                      <th class="subtitle-2 font-weight-normal secondary-3--text">Quantity</th>
                    </tr>
                    <tr v-for="item in data?.shipments" :key="item.id">
                      <td class="subtitle-2 font-weight-normal secondary-3--text">{{item.name}}</td>
                      <td class="subtitle-2 font-weight-normal secondary-3--text">{{item.quantity}}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-sheet>
            

              <v-sheet width="300" outlined class="pa-5 rounded mt-2">
                <div class="caption mb-2">More info</div>
                <div class="subtitle-2 font-weight-normal secondary-3--text">{{data?.instruction}}</div>
              </v-sheet>
            </div>
            <v-sheet width="200" class="" v-if="tab == 1">
              <v-simple-table>
                <tbody>
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
                    <td class="subtitle-2 font-weight-normal secondary-3--text">Book Request:</td>
                    <td class="subtitle-2 font-weight-normal secondary-3--text">{{data.price}}</td>
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
const servicesStore = useServicesStore();

export default Vue.extend({
  data(): any {
    return {
      tab: 0,
      items: [],
      data: [],
      tabs: ['Service Details', 'Appointment Details', 'Invoice Details'],
      dialog: false,
      TYPE_MOVE_FURNITURE,
      TYPE_MAINTENANCE,
    }
  },
  mounted() {
    servicesStore.showService(this.$route.query.id)
    .then(res => {
      this.data = res
    })
  }
})
</script>