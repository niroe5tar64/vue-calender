<template>
  <table>
    <thead>
      <CalendarHead />
    </thead>
    <tbody>
      <template v-for="(week, index) in month" :key="index">
        <CalendarRow :week="week" :selectedDate="selectedDate" @select-date="selectDate" />
      </template>
    </tbody>
  </table>
</template>

<script>
import CalendarHead from '@/components/vue2/CalendarHead.vue';
import CalendarRow from '@/components/vue2/CalendarRow.vue';
export default {
  components: {
    CalendarHead,
    CalendarRow,
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
    selectDate(date) {
      this.$emit('select-date', date);
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
