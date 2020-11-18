<template>
  <div class="layout-demo5">
    <dy-row type="flex" class="row-bg">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row type="flex" class="row-bg" justify="center">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row type="flex" class="row-bg" justify="end">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row type="flex" class="row-bg" justify="space-between">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row type="flex" class="row-bg" justify="space-around">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
  </div>
</template>
<style lang="scss" scoped>
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
