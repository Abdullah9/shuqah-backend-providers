<template>
  <v-simple-table>
    <template v-slot:default>
      <TableHeader :headers="headers"/>
      <tbody v-if="data.data.length > 0">
        <tr v-for="item in data.data" :key="item.id">
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.product.name}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.product.type}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.customer.name}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.date}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.time}`}}</td>
          <td class="subtitle-2 font-weight-normal secondary-3--text">{{`${item.status ? item.status: ''}`}}</td>
          <td >
            <v-btn text small 
              @click="$router.push({ name: 'order-details', query: { id: item.id } })"
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
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr><td colspan="6" class="text-center grey--text">No data found</td></tr>
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
    headers: ['PRODUCT NAME', 'TYPE', 'CUSTOMER NAME', 'DATE', 'TIME', 'STATUS', 'ACTION'],
    types: ['Arrived', 'Paused', 'Completed'],
  }),
}
</script>