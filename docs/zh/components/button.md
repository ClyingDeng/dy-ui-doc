# Button 组件

常用的操作按钮

## 基础用法

按钮的基础用法。

<demo-block>
::: slot source
<button-test1></button-test1>
:::

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

:::slot highlight

```html
<dy-button>默认按钮</dy-button>
<dy-button type="info">默认按钮</dy-button>
<dy-button type="success">默认按钮</dy-button>
<dy-button type="primary">默认按钮</dy-button>
<dy-button type="warning">默认按钮</dy-button>
```

:::
</demo-block>

## 禁用状态

按钮的不可用状态。

<demo-block>
::: slot source
<button-disabled></button-disabled>
:::
可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
:::slot highlight
```html
<dy-button type="info" disabled>禁用按钮</dy-button>
<dy-button type="success" disabled>禁用按钮</dy-button>
<dy-button type="primary" disabled>禁用按钮</dy-button>
<dy-button type="warning" disabled>禁用按钮</dy-button>
```
:::
</demo-block>

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<demo-block>
::: slot source
<button-icon></button-icon>
:::
设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。
:::slot highlight
```html
<dy-button type="primary" icon="dy-icon-edit"></dy-button>
<dy-button type="success" icon="dy-icon-share"></dy-button>
<dy-button type="warning" icon="dy-icon-refresh"></dy-button>
<dy-button type="primary" icon="dy-icon-play" icon-position="left">按钮</dy-button>
<dy-button type="primary" icon="dy-icon-star" icon-position="right">按钮</dy-button>
```
:::
</demo-block>

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

<demo-block>
::: slot source
<button-group></button-group>
:::
使用`<dy-button-group>`标签来嵌套按钮。
:::slot highlight
```html
<dy-button-group>
    <dy-button type="primary" icon="dy-icon-arrow-left" icon-position="left">上一页</dy-button>
    <dy-button type="primary" icon="dy-icon-arrow-right" icon-position="right">下一页</dy-button>
</dy-button-group>
<dy-button-group>
    <dy-button type="primary" icon="dy-icon-edit" icon-position="left" ></dy-button>
    <dy-button type="primary" icon="dy-icon-share" icon-position="right"></dy-button>
    <dy-button type="primary" icon="dy-icon-setting" icon-position="right"></dy-button>
</dy-button-group>
```
:::
</demo-block>
