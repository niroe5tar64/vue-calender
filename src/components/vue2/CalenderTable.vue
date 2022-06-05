<template>
  <table>
    <thead>
      <CalenderHead />
    </thead>
    <tbody>
      <template v-for="(week, index) in month" :key="index">
        <CalenderRow :week="week" @select-date="selectDate" :selectedDate="selected" />
      </template>
    </tbody>
  </table>
  {{ formatDate(selected) }}
</template>

<script>
import Day from '@/days/Day.js';

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
  },
  data() {
    return {
      selected: new Day('dummy'),
    };
  },
  computed: {
    formatDate() {
      return (date) => {
        if (typeof date.formatDate !== 'function') return '';
        return date.formatDate('yyyy-MM-dd');
      };
    },
  },
  methods: {
    selectDate(dayObj) {
      if (this.selected.isSameDate(dayObj)) {
        this.selected = new Day('dummy');
        return;
      }
      this.selected = dayObj;
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
