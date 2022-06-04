<template>
  <tr>
    <td
      v-for="(d, index) in week.days"
      :key="index"
      :class="{
        saturday: d.isSaturday(),
        sunday: d.isSunday(),
        'this-month': isThisMonth(d, week),
      }"
    >
      <div :class="{ today: d.isToday() }">
        {{ d.day }}
      </div>
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
    div {
      height: 30px;
      width: 30px;
      line-height: 30px;
      margin: auto;
      &.today {
        height: 26px;
        width: 26px;
        line-height: 26px;
        border-radius: 50%;
        border: 2px solid #f55;
        font-weight: bold;
      }
    }
  }
}
</style>
