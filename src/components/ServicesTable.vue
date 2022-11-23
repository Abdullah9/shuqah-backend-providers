<template>
  <v-simple-table>
    <template v-slot:default>
      <TableHeader :headers="headers"/>
      <tbody>
        <tr v-for="item in data.data" :key="item.id">
         
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.type == 'Maintenance' ? `${item.type} (${item.sub_type})` : item.type }`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.customer.name}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.date}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.time}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.status ? item.status: ''}`}}</td>
          <td >
            <v-btn text small 
              @click="$router.push({ name: 'service-details', query: { id: item.id } })"
              class="subtitle-2 secondary-3--text text-capitalize" 
            >
              View
            </v-btn>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text small 
                  v-bind="attrs"
                  v-on="on"
                  class="subtitle-2 secondary-3--text text-capitalize" 
              
                >
                  Change Status
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item link v-for="(type, i) in types" :key="i">
                  <v-list-item-title class="subtitle-2 secondary-3--text text-capitalize"
                  @click="$emit('changeStatus', {id: item.id, status: type})"
                  >
                    {{type}}
                  </v-list-item-title>
                </v-list-item>
               
              </v-list>
            </v-menu>
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn      
                  v-bind="attrs"
                  v-on="on" text small  
                  class="subtitle-2 secondary-3--text text-capitalize" 
                >
                  Send Offer
                </v-btn>
              </template>
              <PriceOffer :id="item.id"/>
            </v-menu>
           
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import TableHeader from './TableHeader.vue';
import PriceOffer from './PriceOffer.vue';
export default {
  props: ['data'],
  components : { TableHeader, PriceOffer },
  data: () => ({
    headers: ['TYPE', 'CUSTOMER NAME', 'DATE', 'TIME', 'STATUS', 'ACTION'],
    types: ['Arrived', 'Paused', 'Completed'],
  }),

  mounted() {},
  methods: {
    // send(e) {
    //   this.$emit('sendOffer', {id: e.id, price_offer: })
    // }
  }
}
</script>