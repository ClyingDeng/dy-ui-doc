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
