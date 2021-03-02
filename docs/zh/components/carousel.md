# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

## 基础用法

适用广泛的基础用法

结合使用`dy-carousel`和`dy-carousel-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`dy-carousel-item`标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。

<demo-block>
::: slot source
<carousel-test></carousel-test>
:::

:::slot highlight

```html
<dy-carousel
  height="200px"
  :autoplay="true"
  :delay="2000"
  :initial-index="0"
  :loop="true"
  @change="change"
>
  <dy-carousel-item v-for="item in 4" :key="item">
    <h3 class="small">{{ item }}</h3>
  </dy-carousel-item>
</dy-carousel>
<style scoped>
  .small {
    color: #fff;
  }
  .dy-carousel-item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .dy-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .dy-carousel-item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
<script scoped>
  export default {
    data() {
      return {};
    },
    methods: {
      change() {
        console.log("index");
      },
    },
  };
</script>
```

:::
</demo-block>

### Carousel Attributes

| 参数               | 说明                                  | 类型    | 可选值              | 默认值     |
| ------------------ | ------------------------------------- | ------- | ------------------- | ---------- |
| height             | 走马灯的高度                          | string  | —                   | —          |
| initial-index      | 初始状态激活的幻灯片的索引，从 0 开始 | number  | —                   | 0          |
| autoplay           | 是否自动切换                          | boolean | —                   | true       |
| interval           | 自动切换的时间间隔，单位为毫秒        | number  | —                   | 3000       |
| arrow              | 切换箭头的显示时机                    | string  | always/hover/never  | hover      |
| type               | 走马灯的类型                          | string  | card                | —          |
| loop               | 是否循环显示                          | boolean | -                   | true       |

### Carousel Events

| 事件名称 | 说明             | 回调参数                               |
| -------- | ---------------- | -------------------------------------- |
| change   | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |
