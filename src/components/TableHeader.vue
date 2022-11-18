<template>
  <thead>
    <tr>
      <th class=" caption font-weight-medium secondary-2--text" v-for="item in headers" :key="item">
        {{$vuetify.lang.t(`$vuetify.table_header.${item}`)}}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: ['headers']
}
</script>
