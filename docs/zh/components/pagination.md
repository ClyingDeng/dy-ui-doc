# Popover 弹出框

## 基础用法

Popover 的属性与 Tooltip 很类似，它们都是基于`Vue-popper`开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

<demo-block>
::: slot source
<popover-test1></popover-test1>
:::

`trigger`属性用于设置何时触发 Popover，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 Popover 的元素，有两种写法：使用 `slot="reference"` 的具名插槽，或使用自定义指令`v-popover`指向 Popover 的索引`ref`。

:::slot highlight

```html
<dy-popover
  placement="left"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">hover 激活</dy-button>
</dy-popover>
<dy-popover
  placement="top"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">hover 激活</dy-button>
</dy-popover>
<dy-popover
  placement="bottom"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">hover 激活</dy-button>
</dy-popover>
<dy-popover
  placement="right"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">hover 激活</dy-button>
</dy-popover>
<dy-popover
  placement="left"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">click 激活</dy-button>
</dy-popover>
<dy-popover
  placement="top"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">click 激活</dy-button>
</dy-popover>
<dy-popover
  placement="bottom"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">click 激活</dy-button>
</dy-popover>
<dy-popover
  placement="right"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容。"
>
  <dy-button slot="reference">click 激活</dy-button>
</dy-popover>
```

:::
</demo-block>

## 嵌套信息

可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。

<demo-block>
::: slot source
<popover-test2></popover-test2>
:::

利用分发取代`content`属性

:::slot highlight

```html
<template>
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
```

:::
</demo-block>

### Attributes

| 参数            | 说明                                                                                                    | 类型           | 可选值                                                                                                    | 默认值                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| trigger         | 触发方式                                                                                                | String         | click/focus/hover/manual                                                                                  | click                                                   |
| title           | 标题                                                                                                    | String         | —                                                                                                         | —                                                       |
| content         | 显示的内容，也可以通过 `slot` 传入 DOM                                                                  | String         | —                                                                                                         | —                                                       |
| width           | 宽度                                                                                                    | String, Number | —                                                                                                         | 最小宽度 150px                                          |
| placement       | 出现位置                                                                                                | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| disabled        | Popover 是否可用                                                                                        | Boolean        | —                                                                                                         | false                                                   |
| value / v-model | 状态是否可见                                                                                            | Boolean        | —                                                                                                         | false                                                   |
| offset          | 出现位置的偏移量                                                                                        | Number         | —                                                                                                         | 0                                                       |
| transition      | 定义渐变动画                                                                                            | String         | —                                                                                                         | fade-in-linear                                          |
| visible-arrow   | 是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper)        | Boolean        | —                                                                                                         | true                                                    |
| popper-options  | [popper.js](https://popper.js.org/documentation.html) 的参数                                            | Object         | 参考 [popper.js](https://popper.js.org/documentation.html) 文档                                           | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class    | 为 popper 添加类名                                                                                      | String         | —                                                                                                         | —                                                       |
| open-delay      | 触发方式为 hover 时的显示延迟，单位为毫秒                                                               | Number         | —                                                                                                         | —                                                       |
| close-delay     | 触发方式为 hover 时的隐藏延迟，单位为毫秒                                                               | number         | —                                                                                                         | 200                                                     |
| tabindex        | Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number         | —                                                                                                         | 0                                                       |

### Slot

| 参数      | 说明                          |
| --------- | ----------------------------- |
| —         | Popover 内嵌 HTML 文本        |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events

| 事件名称    | 说明                   | 回调参数 |
| ----------- | ---------------------- | -------- |
| show        | 显示时触发             | —        |
| after-enter | 显示动画播放完毕后触发 | —        |
| hide        | 隐藏时触发             | —        |
| after-leave | 隐藏动画播放完毕后触发 | —        |
