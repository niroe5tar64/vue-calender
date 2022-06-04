<template>
  <tr>
    <td
      v-for="(d, index) in week.days"
      :key="index"
      :class="{ saturday: isSaturday(d), sunday: isSunday(d), 'this-month': isThisMonth(d, week) }"
    >
      {{ d.day }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    week: {
      type: Object,
      require: true,
    },
  },
  computed: {
    isSaturday() {
      return (d) => {
        return d.dayOfWeek === 6;
      };
    },
    isSunday() {
      return (d) => {
        return d.dayOfWeek === 0;
      };
    },
    isThisMonth() {
      return (week, day) => {
        return day.month === week.month;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  text-align: center;
  td {
    border: 1px solid #333;
    color: #333;
    background: #fff;
    &.saturday {
      color: #00f;
      background: #ddf;
    }
    &.sunday {
      color: #f00;
      background: #fdd;
    }
    &:not(.this-month) {
      color: #999;
      background-color: #eee;
      &.saturday {
        color: #99f;
        background: #eef;
      }
      &.sunday {
        color: #f99;
        background: #fee;
      }
    }
  }
}
</style>
