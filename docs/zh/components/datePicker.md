# DatePicker 日期选择器

用于选择或输入日期

## 选择日

以「日」为基本单位，基础的日期选择控件

<demo-block>
::: slot source
<datepicker-test1></datepicker-test1>
:::

基本单位由`type`属性指定。快捷选项需配置`picker-options`对象中的`shortcuts`，禁用日期通过 `disabledDate` 设置，传入函数

:::slot highlight

```html
<dy-date-picker v-model="value1"></dy-date-picker>
<template>
  <dy-date-picker v-model="value1"></dy-date-picker>
</template>
<script>
  export default {
    data() {
      return {
        value1: new Date(),
      };
    },
  };
</script>
```

:::
</demo-block>

### Attributes

| 参数            | 说明   | 类型                                      | 可选值 | 默认值 |
| --------------- | ------ | ----------------------------------------- | ------ | ------ |
| value / v-model | 绑定值 | date(DatePicker) / array(DateRangePicker) | —      | —      |
