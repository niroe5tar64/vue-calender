<template>
  <section class="vue2">
    <h1>Vue.js 2.x</h1>
    <CalenderTable />
  </section>
</template>

<script>
import CalenderTable from '@/components/vue2/CalenderTable.vue';
export default {
  components: {
    CalenderTable,
  },
};
</script>

<style lang="scss" scoped>
section.vue2 {
  display: block;
  width: 235px;
  margin: 0 auto;
}
</style>
