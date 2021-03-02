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
