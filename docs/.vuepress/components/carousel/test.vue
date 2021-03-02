<template>
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
</template>
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
