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
        <CalenderRow :week="week" />
      </template>
    </tbody>
  </table>
</template>

<script>
import Month from '@/days/Month.js';

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
    };
  },
  computed: {
    month() {
      return this.monthObj.weeks;
    },
  },
  methods: {
    prevMonth() {
      this.monthObj.prev();
    },
    nextMonth() {
      this.monthObj.next();
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
