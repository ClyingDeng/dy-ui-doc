# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

设置`total`表示总条目数，`size`用于设置每页显示的页码数量。

<demo-block>
::: slot source
<pagination-test1></pagination-test1>
:::

:::slot highlight

```html
<span class="demonstration">页数较少时的效果</span>
<dy-pagination
  :page-size="10"
  :total="5"
  :current-page.sync="currentPage"
></dy-pagination>
<span class="demonstration">大于 7 页时的效果</span>
<dy-pagination
  :page-size="10"
  :total="10"
  :current-page.sync="currentPage1"
></dy-pagination>
<script scoped>
  export default {
    data() {
      return {
        currentPage: 4,
        currentPage1: 4,
      };
    },
  };
</script>
```

:::
</demo-block>

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过`pager-count`属性可以设置最大页

<demo-block>
::: slot source
<pagination-test2></pagination-test2>
:::

:::slot highlight

```html
<dy-pagination
  :page-size="10"
  :pager-count="11"
  :total="50"
  :current-page.sync="currentPage"
></dy-pagination>
```

:::
</demo-block>

## 带有背景色的分页

设置`background`属性可以为分页按钮添加背景色。

<demo-block>
::: slot source
<pagination-test3></pagination-test3>
:::

:::slot highlight

```html
<dy-pagination
  :page-size="10"
  :pager-count="5"
  :total="10"
  background
  :current-page.sync="currentPage"
></dy-pagination>
```

:::
</demo-block>

## 禁用分页

<demo-block>
::: slot source
<pagination-test4></pagination-test4>
:::

:::slot highlight

```html
<dy-pagination
  :page-size="10"
  :pager-count="5"
  :total="10"
  disabled
></dy-pagination>
<dy-pagination
  :page-size="10"
  :pager-count="5"
  :total="10"
  background
  disabled
></dy-pagination>
```

:::
</demo-block>

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| small | 是否使用小型分页样式 | boolean | — | false |
| background | 是否为分页按钮添加背景色 | boolean | — | false |
| page-size | 每页显示条目个数，支持 .sync 修饰符 | number | — | 10 |
| total | 总条目数 | number | — | — |
| page-count | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number | — | — |
| pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 5 且小于等于 21 的奇数 | 7 |
| current-page | 当前页数，支持 .sync 修饰符 | number | — | 1 |
| layout | 组件布局，子组件名用逗号分隔| String | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total'  |
| page-sizes | 每页显示个数选择器的选项设置 | number[] | — |  [10, 20, 30, 40, 50, 100] |
| popper-class | 每页显示个数选择器的下拉框类名 | string | — | — |
| prev-text | 替代图标显示的上一页文字 | string | — | — |
| next-text | 替代图标显示的下一页文字 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| hide-on-single-page | 只有一页时是否隐藏 | boolean | — | - |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| size-change | pageSize 改变时会触发 | 每页条数 |
| current-change | currentPage 改变时会触发 | 当前页 |
| prev-click | 用户点击上一页按钮改变当前页后触发 | 当前页 |
| next-click | 用户点击下一页按钮改变当前页后触发 | 当前页 |

### Slot
| name | 说明 |
|------|--------|
| — | 自定义内容，需要在 `layout` 中列出 `slot` |
