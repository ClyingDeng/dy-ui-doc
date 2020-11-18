# Icon 图标

提供了一套常用的图标集合。

## 使用方法

<demo-block>
::: slot source
<icon-test1></icon-test1>
:::

直接通过设置类名为 `dy-icon-iconName` 来使用即可。例如：

:::slot highlight

```html
<dy-icon class="dy-icon-edit"></dy-icon>
<dy-icon class="dy-icon-share"></dy-icon>
<dy-icon class="dy-icon-delete"></dy-icon>
<dy-button type="primary" icon="dy-icon-search">搜索</dy-button>
```

:::
</demo-block>

### 图标集合

<demo-block>
::: slot source
<icon-test2></icon-test2>
:::

:::slot highlight

```html
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'dy-icon-' + name"></i>
      <span class="icon-name">{{'dy-icon-' + name}}</span>
    </span>
  </li>
</ul>
```

:::
</demo-block>
