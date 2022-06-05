<template>
  <table>
    <thead>
      <CalenderHead />
    </thead>
    <tbody>
      <template v-for="(week, index) in month" :key="index">
        <CalenderRow :week="week" :selectedDate="selectedDate" @select-date="selectDate" />
      </template>
    </tbody>
  </table>
</template>

<script>
import CalenderHead from '@/components/vue2/CalenderHead.vue';
import CalenderRow from '@/components/vue2/CalenderRow.vue';
export default {
  components: {
    CalenderHead,
    CalenderRow,
  },
  props: {
    month: {
      type: Array,
      require: true,
    },
    selectedDate: {
      type: Object,
      require: true,
    },
  },
  methods: {
    selectDate(dayObj) {
      this.$emit('select-date', dayObj);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: 1px solid #333;
}
</style>
