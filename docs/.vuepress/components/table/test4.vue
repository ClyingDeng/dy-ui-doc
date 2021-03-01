<template>
  <div class="content">
    <dy-table
      :columns="columns1"
      :data="data1"
      @on-select="select"
      @on-select-all="selectAll"
      @on-sort-change="sortChange"
      height="150px"
    >
    </dy-table>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Date",
          key: "date"
        },
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
  methods: {
    select(selection, row) {
      // selection 表示选中的所有的 row表示当前是哪一行
      console.log(selection, row);
    },
    selectAll(selection) {
      console.log(selection);
    },
    sortChange(col, type) {
      console.log(col, type);
    },
  },
};
</script>
<style scoped lang="scss">
// .content {
//   width: 100%;
//   .dy-table {
//     width: 100%;

//     table {
//       width: 100%;
//       tbody {
//         width: 100%;
//       }
//     }
//   }
// }
</style>
