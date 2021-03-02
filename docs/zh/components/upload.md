# Upload 上传

通过点击或者拖拽上传文件

## 点击上传

<demo-block>
::: slot source
<upload-test></upload-test>
:::

通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置`limit`和`on-exceed`来限制上传文件的个数和定义超出限制时的行为。可通过设置`before-remove`来阻止文件移除操作。

:::slot highlight

```html
<dy-upload
  name="avatar"
  action="http://localhost:3000/upload"
  :file-list="fileList"
  multiple
  :limit="3"
  accept="image/jpeg"
  :beforeUpload="beforeUpload"
  :beforeRemove="beforeRemove"
  :on-remove="handleRemove"
  :on-exceed="handleExceed"
  :on-change="handleChange"
  :on-success="handleSuccess"
  :on-error="handleError"
  :on-progress="handleProgress"
>
  <dy-button icon="dy-icon-image">点击上传</dy-button>
  <div slot="tip">只能上传jpg/png文件，且不能超过500kb</div>
</dy-upload>
<script>
  export default {
    data() {
      return {
        fileList: [
          {
            name: "food2.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
        ],
      };
    },
    methods: {
      handleExceed(file, fileList) {
        console.log("用户传递上限！");
      },
      handleChange(file) {
        console.log(file, "当前更新了！");
      },
      beforeUpload(rawFile) {
        let limitSize = rawFile.size / 1024 > 500;
        if (!limitSize) {
          console.log(rawFile.size, "当前文件超过了500k");
          return false;
        } else if (!rawFile.name.endsWith(".jpg")) {
          console.log("文件类型不对！");
          return false;
        }
        return true;
      },
      beforeRemove(file, fileList) {
        console.log("删除之前确认");
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleSuccess() {},
      handleError() {},
      handleProgress() {},
    },
  };
</script>
```

:::
</demo-block>

### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| action | 必选参数，上传的地址 | string | — | — |
| headers | 设置上传的请求头部 | object | — | — |
| multiple | 是否支持多选文件 | boolean | — | — |
| data | 上传时附带的额外参数 | object | — | — |
| name | 上传的文件字段名 | string | — | file |
| with-credentials | 支持发送 cookie 凭证信息 | boolean | — | false |
| show-file-list | 是否显示已上传文件列表 | boolean | — | true |
| drag | 是否启用拖拽上传 | boolean | — | false |
| accept | 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效）| string | — | — |
| on-preview | 点击文件列表中已上传的文件时的钩子 | function(file) | — | — |
| on-remove | 文件列表移除文件时的钩子 | function(file, fileList) | — | — |
| on-success | 文件上传成功时的钩子 | function(response, file, fileList) | — | — |
| on-error | 文件上传失败时的钩子 | function(err, file, fileList) | — | — |
| on-progress | 文件上传时的钩子 | function(event, file, fileList) | — | — |
| on-change | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | function(file, fileList) | — | — |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file) | — | — |
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。| function(file, fileList) | — | — |
| list-type | 文件列表的类型 | string | text/picture/picture-card | text |
| auto-upload | 是否在选取文件后立即进行上传 | boolean | — | true |
| file-list | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array | — | [] |
| http-request | 覆盖默认的上传行为，可以自定义上传的实现 | function | — | — |
| disabled | 是否禁用 | boolean | — | false |
| limit | 最大允许上传个数 |  number | — | — |
| on-exceed | 文件超出个数限制时的钩子 | function(files, fileList) | — | - |

### Slot
| name | 说明 |
|------|--------|
| trigger | 触发文件选择框的内容 |
| tip | 提示说明文字 |

### Methods
| 方法名      | 说明          | 参数 |
|----------- |-------------- | -- |
| clearFiles | 清空已上传的文件列表（该方法不支持在 before-upload 中调用） | — |
| abort      | 取消上传请求    | （ file: fileList 中的 file 对象 ） |
| submit     | 手动上传文件列表 |  —                                |
