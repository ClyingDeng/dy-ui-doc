<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load1"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  computed: {
    disabled() {
      return this.loading || this.noMore;
    },
    noMore() {
      return this.count >= 20;
    },
  },
  methods: {
    load1() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style scoped lang="scss">
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
  .list {
    // height: 300px;
    list-style: none;
    padding: 0;
    margin: 0;
    .list-item {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #fff6f6;
      color: #ff8484;
    }
  }
  p {
    margin: 10px;
  }
}
</style>
