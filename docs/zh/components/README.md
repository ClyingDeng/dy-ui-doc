# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。

<demo-block>
::: slot source
<layout-test1></layout-test1>
:::

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

:::slot highlight

```html
<dy-row>
  <dy-col :span="24"><div class="grid-content bg-purple-dark"></div></dy-col>
</dy-row>
<style>
  .dy-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
</demo-block>

## 分栏间隔

分栏之间存在间隔。

<demo-block>

::: slot source
<layout-test2></layout-test2>
:::

Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

:::slot highlight

```html
<dy-row :gutter="20">
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<style>
  .dy-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
</demo-block>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<demo-block>

::: slot source
<layout-test3></layout-test3>
:::

Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

:::slot highlight

```html
<dy-row :gutter="20">
  <dy-col :span="16"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<dy-row :gutter="20">
  <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<dy-row :gutter="20">
  <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="16"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<style>
  .dy-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
</demo-block>

## 分栏偏移

支持偏移指定的栏数。

<demo-block>

::: slot source
<layout-test4></layout-test4>
:::

通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

:::slot highlight

```html
<dy-row :gutter="20">
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></dy-col>
</dy-row>
<dy-row :gutter="20">
  <dy-col :span="6" :offset="6">
    <div class="grid-content bg-purple"></div
  ></dy-col>
  <dy-col :span="6" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></dy-col>
</dy-row>
<dy-row :gutter="20">
  <dy-col :span="12" :offset="6"
    ><div class="grid-content bg-purple"></div
  ></dy-col>
</dy-row>
<style>
  .dy-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
</demo-block>

## 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

<demo-block>

::: slot source
<layout-test5></layout-test5>
:::

通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

:::slot highlight
将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```html
<dy-row type="flex" class="row-bg">
  <dy-col :span="6">
    <div class="grid-content bg-purple"></div>
  </dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<dy-row type="flex" class="row-bg" justify="center">
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<dy-row type="flex" class="row-bg" justify="end">
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6">
    <div class="grid-content bg-purple-light"></div>
  </dy-col>
  <dy-col :span="6">
    <div class="grid-content bg-purple"></div>
  </dy-col>
</dy-row>
<dy-row type="flex" class="row-bg" justify="space-between">
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<dy-row type="flex" class="row-bg" justify="space-around">
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
  <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
</dy-row>
<style>
  .dy-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .dy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::
</demo-block>

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

<demo-block>

::: slot source
<layout-test6></layout-test6>
:::

:::slot highlight

```html
<dy-row :gutter="10">
  <dy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></dy-col>
  <dy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></dy-col>
  <dy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></dy-col>
</dy-row>
<style>
  .dy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```

:::
</demo-block>

### Row Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |