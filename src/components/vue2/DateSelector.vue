<template>
  <div class="date-selector">
    <button @click="prevMonth()">前月</button>
    <span class="year">{{ this.year }}</span>
    /
    <span class="month">{{ this.month }}</span>
    <button @click="nextMonth()">次月</button>
  </div>
</template>

<script>
export default {
  props: {
    year: { type: Number, require: true },
    month: { type: Number, require: true },
  },
  data() {
    return {};
  },
  methods: {
    prevMonth() {
      this.$emit('clickPrevMonth');
    },
    nextMonth() {
      this.$emit('clickNextMonth');
    },
  },
};
</script>

<style lang="scss" scoped>
.date-selector {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  span {
    text-align: center;
    &.year {
      width: 45px;
    }
    &.month {
      width: 20px;
    }
  }
}
</style>
