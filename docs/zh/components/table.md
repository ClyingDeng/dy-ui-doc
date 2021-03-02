# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

<demo-block>
::: slot source
<table-test1></table-test1>
:::

当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。

:::slot highlight

```html
<dy-table :columns="columns1" :data="data1"></dy-table>
<script>
  export default {
    data() {
      return {
        columns1: [
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
          {
            title: "date",
            key: "date",
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
  };
</script>
```

:::
</demo-block>

## 可选择

通过给 `columns` 数据设置一项，指定 `type: 'selection'`，即可自动开启多选功能。
正确使用好以下事件，可以达到需要的效果：

`@on-select`，选中某一项触发，返回值为 `selection` 和 `row，分别为已选项和刚选择的项。`
`@on-select-all`，点击全选时触发，返回值为 `selection`，已选项。
`@on-selection-change`，只要选中项发生变化时就会触发，返回值为 `selection`，已选项。

<demo-block>
::: slot source
<table-test2></table-test2>
:::

:::slot highlight

```html
<dy-table
  :columns="columns1"
  :data="data1"
  @on-select="select"
  @on-select-all="selectAll"
>
</dy-table>
<script scoped>
  export default {
    data() {
      return {
        columns1: [
          {
            type: "selection",
            width: 60,
            align: "center",
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
    },
  };
</script>
```

:::
</demo-block>

## 排序

通过给 `columns` 数据的项，设置 `sortable: true`，即可对该列数据进行排序。

排序默认使用升序和降序，也可以通过设置属性 `sortMethod` 指定一个自定义排序函数，接收三个参数 a 、 b 和 type。

通过给某一列设置 `sortType` 可以在初始化时使用排序。

如果使用远程排序，可以设置 `sortable: 'custom'`，然后在触发排序事件 `@on-sort-change`后，进行远程排序，并手动设置新的 data，详见 API。

注意，排序并不会影响到源数据 data。

<demo-block>
::: slot source
<table-test3></table-test3>
:::

:::slot highlight

```html
<dy-table :columns="columns1" :data="data1"> </dy-table>
<script scoped>
  export default {
    data() {
      return {
        columns1: [
          {
            title: "Date",
            key: "date",
          },
          {
            title: "Name",
            key: "name",
          },
          {
            title: "Age",
            key: "age",
            sortable: true,
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
  };
</script>
```

:::
</demo-block>

## 固定表头

在 `columns` 的某列声明 slot 后，就可以在 `Table` 的 `slot` 中使用 `slot-scope`。

`slot-scope` 的参数有 3 个：当前行数据 row，当前列数据 column，当前行序号 index。

<demo-block>
::: slot source
<table-test4></table-test4>
:::

:::slot highlight

```html
<dy-table :columns="columns1" :data="data1" height="150px"> </dy-table>
<script scoped>
  export default {
    data() {
      return {
        columns1: [
          {
            title: "Date",
            key: "date",
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
```

:::
</demo-block>

## 自定义列模板

在 `columns` 的某列声明 slot 后，就可以在 `Table` 的 `slot` 中使用 `slot-scope`。

`slot-scope` 的参数有 3 个：当前行数据 row，当前列数据 column，当前行序号 index。

<demo-block>
::: slot source
<table-test5></table-test5>
:::

:::slot highlight

```html
<dy-table :columns="columns1" :data="data1">
  <template slot="name" slot-scope="{ row, col }">
    <h1>{{ row[col.key] }}</h1>
  </template>
  <template slot="action" slot-scope="{ row, col }">
    <dy-button type="primary" plain>删除</dy-button>
  </template>
</dy-table>
<script scoped>
  export default {
    data() {
      return {
        columns1: [
          {
            title: "Date",
            key: "date",
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
  };
</script>
```

:::
</demo-block>
