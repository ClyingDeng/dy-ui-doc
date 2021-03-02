<template>
  <div style="margin: 20px;">
    <span class="demonstration">页数较少时的效果</span>
    <dy-pagination
      :page-size="10"
      :total="5"
      :current-page.sync="currentPage"
    ></dy-pagination>
    <span class="demonstration">大于 7 页时的效果</span>
    <dy-pagination
      :page-size="10"
      :total="10"
      :current-page.sync="currentPage1"
    ></dy-pagination>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      currentPage: 4,
      currentPage1: 4,
    };
  },
};
</script>
