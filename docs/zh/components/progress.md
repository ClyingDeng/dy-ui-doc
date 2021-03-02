# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 线形进度条

<demo-block>
::: slot source
<progress-test1></progress-test1>
:::
Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。通过 `format` 属性来指定进度条文字内容

:::slot highlight

```html
<dy-progress :percentage="50"></dy-progress>
<dy-progress :percentage="100" :format="format"></dy-progress>
<dy-progress :percentage="100" status="success"></dy-progress>
<dy-progress :percentage="100" status="warning"></dy-progress>
<dy-progress :percentage="50" status="exception"></dy-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? "满" : `${percentage}%`;
      },
    },
  };
</script>
```

:::
</demo-block>

## 自定义颜色

可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。

<demo-block>
::: slot source
<progress-test2></progress-test2>
:::

:::slot highlight

```html
<dy-progress :percentage="percentage" :color="customColor"></dy-progress>

<dy-progress :percentage="percentage" :color="customColorMethod"></dy-progress>

<dy-progress :percentage="percentage" :color="customColors"></dy-progress>
<div>
  <dy-button-group>
    <dy-button @click="decrease"> 减10% </dy-button>
    <dy-button @click="increase"> 加10% </dy-button>
  </dy-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: "#409eff",
        customColors: [
          { color: "#f56c6c", percentage: 20 },
          { color: "#e6a23c", percentage: 40 },
          { color: "#5cb87a", percentage: 60 },
          { color: "#1989fa", percentage: 80 },
          { color: "#6f7ad3", percentage: 100 },
        ],
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return "#909399";
        } else if (percentage < 70) {
          return "#e6a23c";
        } else {
          return "#67c23a";
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      },
    },
  };
</script>
<style>
  .plusmiMinus {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>
```

:::
</demo-block>

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number         |     0-100          |     0    |
| format          | 进度条文字          | function     | — | — |
<!-- | type          | 进度条类型           | string         | line/circle/dashboard | line | -->
<!-- | stroke-width  | 进度条的宽度，单位 px | number          | — | 6 | -->
<!-- | text-inside  | 进度条显示文字内置在进度条内（只在 type=line 时可用） | boolean | — | false | -->
| status  | 进度条当前状态 | string | success/exception/warning | — |
| color  | 进度条背景色（会覆盖 status 状态颜色） | string/function/array | — | '' |
<!-- | width  | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number |  | 126 | -->
<!-- | show-text  | 是否显示进度条文字内容 | boolean | — | true | -->
<!-- | stroke-linecap  | circle/dashboard 类型路径两端的形状 | string | butt/round/square | round | -->