<template>
  <div style="margin: 20px;">
    <dy-popover placement="top" width="500">
      <dy-table :columns="columns1" :data="data1" height="200px">
        <template slot="name" slot-scope="{ row, col }">
          <h1>{{ row[col.key] }}</h1>
        </template>
        <template slot="action" slot-scope="{ row, col }">
          <dy-button type="text">删除</dy-button>
        </template>
      </dy-table>
      <dy-button slot="reference">点击删除</dy-button>
    </dy-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
          slot: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "operator",
          slot: "action",
          key: "operator",
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
          age: 22,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 46,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
};
</script>
