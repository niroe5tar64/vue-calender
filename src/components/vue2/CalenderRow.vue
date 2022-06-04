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
      @click="selectDate(d)"
    >
      <div :class="{ today: d.isToday(), selected: isSelected(d) }">
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
    selectedDate: {
      type: Object,
      require: false,
    },
  },
  computed: {
    isThisMonth() {
      return (week, day) => {
        return day.month === week.month;
      };
    },
    isSelected() {
      return (day) => {
        return day.isSameDate(this.selectedDate);
      };
    },
  },
  methods: {
    selectDate(dayObj) {
      if (!this.isThisMonth(dayObj, this.week)) return;
      this.$emit('select-date', dayObj);
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  text-align: center;
  td {
    cursor: pointer;
    border: 1px solid #333;
    color: #333;
    background: #fff;
    &:hover {
      background: #eff;
    }
    &.saturday {
      color: #00f;
      background: #ddf;
      &:hover {
        background: #ccf;
      }
    }
    &.sunday {
      color: #f00;
      background: #fdd;
      &:hover {
        background: #fcc;
      }
    }

    &:not(.this-month) {
      cursor: default;
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

      position: relative;
      &.selected:before {
        content: '✔︎';
        position: absolute;
        bottom: 2px;
        left: 8px;
        font-size: 24px;
        color: rgba($color: #f00, $alpha: 0.5);
      }
    }
  }
}
</style>
