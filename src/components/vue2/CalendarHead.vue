<template>
  <tr>
    <th v-for="sd in sevendays" :key="sd.dayOfWeek" :class="sd.class">
      {{ sd.dispName }}
    </th>
  </tr>
</template>

<script>
export default {
  props: {
    week: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      sevendays: [
        { dayOfWeek: 0, dispName: '日', class: 'sunday' },
        { dayOfWeek: 1, dispName: '月', class: '' },
        { dayOfWeek: 2, dispName: '火', class: '' },
        { dayOfWeek: 3, dispName: '水', class: '' },
        { dayOfWeek: 4, dispName: '木', class: '' },
        { dayOfWeek: 5, dispName: '金', class: '' },
        { dayOfWeek: 6, dispName: '土', class: 'saturday' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
tr {
  text-align: center;
  th {
    height: 30px;
    border: 1px solid #333;
  }
  .saturday {
    color: #00f;
    background: #ddf;
  }
  .sunday {
    color: #f00;
    background: #fdd;
  }
}
</style>
