<template>
  <ContentsLayout>
    <!-- コンテンツタイトル -->
    <template v-slot:title>
      <h1>Vue.js 2.x</h1>
    </template>

    <!-- カレンダーメイン部分 -->
    <DateSelector
      :year="calendar.year"
      :month="calendar.month"
      @clickPrevMonth="prevMonth"
      @clickNextMonth="nextMonth"
    />
    <CalendarTable :month="month" :selectedDate="selected" @select-date="selectDate" />

    <!-- サイドコンテンツ部分 -->
    <template v-slot:side-contents>
      {{ formatDate(selected) }}
    </template>
  </ContentsLayout>
</template>

<script>
import MyDate from '@/days/MyDate.js';
import CalendarMonth from '@/days/CalendarMonth.js';

import ContentsLayout from '@/components/ContentsLayout.vue';
import DateSelector from '@/components/vue2/DateSelector.vue';
import CalendarTable from '@/components/vue2/CalendarTable.vue';
export default {
  components: {
    ContentsLayout,
    DateSelector,
    CalendarTable,
  },
  data() {
    return {
      calendar: new CalendarMonth(),
      selected: new MyDate('dummy'),
    };
  },
  computed: {
    month() {
      return this.calendar.weeks;
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
      this.calendar.prev();
    },
    nextMonth() {
      this.calendar.next();
    },
    selectDate(date) {
      if (this.selected.isSameDate(date)) {
        this.selected = new MyDate('dummy');
        return;
      }
      this.selected = date;
    },
  },
};
</script>

<style lang="scss" scoped></style>
