<template>
  <DateSelector
    :year="monthObj.year"
    :month="monthObj.month"
    @clickPrevMonth="prevMonth"
    @clickNextMonth="nextMonth"
  />
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
import Month from '@/days/Month.js';
import Day from '@/days/Day.js';

import DateSelector from '@/components/vue2/DateSelector.vue';
import CalenderHead from '@/components/vue2/CalenderHead.vue';
import CalenderRow from '@/components/vue2/CalenderRow.vue';
export default {
  components: {
    DateSelector,
    CalenderHead,
    CalenderRow,
  },
  props: {},
  data() {
    return {
      monthObj: new Month(),
      selected: new Day('dummy'),
    };
  },
  computed: {
    month() {
      return this.monthObj.weeks;
    },
    formatDate() {
      return (date) => {
        if (typeof date.formatDate !== 'function') return '';
        return date.formatDate('yyyy-MM-dd');
      };
    },
  },
  methods: {
    prevMonth() {
      this.monthObj.prev();
    },
    nextMonth() {
      this.monthObj.next();
    },
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
