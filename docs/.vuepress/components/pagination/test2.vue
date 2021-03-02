<template>
  <div style="margin: 20px;">
    <dy-pagination
      :page-size="10"
      :pager-count="11"
      :total="50"
      :current-page.sync="currentPage"
    ></dy-pagination>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      currentPage: 4,
    };
  },
};
</script>
