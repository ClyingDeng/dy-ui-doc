<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="infinite-list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="hasMore"
      infinite-scroll-delay="delay"
      infinite-scroll-distance="distance"
      infinite-scroll-immediate="immediate"
      style="overflow:auto"
    >
      <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
  .infinite-list {
    height: 300px;
    // border: 1px solid #f00;
    padding: 0;
    margin: 0;
    list-style: none;
    .infinite-list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #e8f3fe;
      margin: 10px;
      color: #7dbcfc;
    }
  }
  p {
    margin: 10px;
  }
}
</style>
<script scoped>
export default {
  data() {
    return {
      count: 0,
      hasMore: false,
      delay: 300,
      distance: 30,
      immediate: false,
    };
  },
  methods: {
    load() {
        console.log(this.loading)
      this.count += 2;
      //   this.loading = false;
    },
  },
};
</script>
