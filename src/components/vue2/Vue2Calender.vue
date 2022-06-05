<template>
  <ContentsLayout>
    <!-- コンテンツタイトル -->
    <template v-slot:title>
      <h1>Vue.js 2.x</h1>
    </template>

    <!-- カレンダーメイン部分 -->
    <DateSelector
      :year="monthObj.year"
      :month="monthObj.month"
      @clickPrevMonth="prevMonth"
      @clickNextMonth="nextMonth"
    />
    <CalenderTable :month="month" :selectedDate="selected" @select-date="selectDate" />

    <!-- サイドコンテンツ部分 -->
    <template v-slot:side-contents>
      {{ formatDate(selected) }}
    </template>
  </ContentsLayout>
</template>

<script>
import Day from '@/days/Day.js';
import Month from '@/days/Month.js';

import ContentsLayout from '@/components/ContentsLayout.vue';
import DateSelector from '@/components/vue2/DateSelector.vue';
import CalenderTable from '@/components/vue2/CalenderTable.vue';
export default {
  components: {
    ContentsLayout,
    DateSelector,
    CalenderTable,
  },
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

<style lang="scss" scoped></style>
