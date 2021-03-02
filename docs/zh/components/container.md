# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<el-container>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<el-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<el-container>`。

## 常见页面布局

<demo-block>
::: slot source
<container-test1></container-test1>
:::

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

:::slot highlight

```html
<dy-container>
  <dy-header>Header</dy-header>
  <dy-main>Main</dy-main>
</dy-container>

<dy-container>
  <dy-header>Header</dy-header>
  <dy-main>Main</dy-main>
  <dy-footer>Footer</dy-footer>
</dy-container>

<dy-container>
  <dy-aside width="200px">Aside</dy-aside>
  <dy-main>Main</dy-main>
</dy-container>

<dy-container>
  <dy-header>Header</dy-header>
  <dy-container>
    <dy-aside width="200px">Aside</dy-aside>
    <dy-main>Main</dy-main>
  </dy-container>
</dy-container>
<dy-container>
  <dy-header>Header</dy-header>
  <dy-container>
    <dy-aside width="200px">Aside</dy-aside>
    <dy-container>
      <dy-main>Main</dy-main>
      <dy-footer>Footer</dy-footer>
    </dy-container>
  </dy-container>
</dy-container>

<dy-container>
  <dy-aside width="200px">Aside</dy-aside>
  <dy-container>
    <dy-header>Header</dy-header>
    <dy-main>Main</dy-main>
  </dy-container>
</dy-container>

<dy-container>
  <dy-aside width="200px">Aside</dy-aside>
  <dy-container>
    <dy-header>Header</dy-header>
    <dy-main>Main</dy-main>
    <dy-footer>Footer</dy-footer>
  </dy-container>
</dy-container>
<style scoped>
  .dy-header,
  .dy-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .dy-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .dy-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .dy-container {
    line-height: 260px;
  }
</style>
```

:::
</demo-block>

### Container Attributes

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
