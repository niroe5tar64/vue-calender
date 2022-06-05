<template>
  <section class="vue2">
    <h1>Vue.js 2.x</h1>
    <DateSelector
      :year="monthObj.year"
      :month="monthObj.month"
      @clickPrevMonth="prevMonth"
      @clickNextMonth="nextMonth"
    />
    <CalenderTable :month="month" />
  </section>
</template>

<script>
import Month from '@/days/Month.js';

import DateSelector from '@/components/vue2/DateSelector.vue';
import CalenderTable from '@/components/vue2/CalenderTable.vue';
export default {
  components: {
    DateSelector,
    CalenderTable,
  },
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
section.vue2 {
  display: block;
  width: 280px;
  margin: 0 auto;
}
</style>
