<template>
  <div class="upload">
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
  </div>
</template>
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
