<template>
  <div>
    <dy-pagination
      :page-size="10"
      :pager-count="5"
      :total="10"
      background
      :current-page.sync="currentPage"
    ></dy-pagination>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>
