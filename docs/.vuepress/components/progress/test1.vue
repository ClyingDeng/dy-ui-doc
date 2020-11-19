<template>
  <div class="test1">
    <dy-progress :percentage="50"></dy-progress>
    <dy-progress :percentage="100" :format="format"></dy-progress>
    <dy-progress :percentage="100" status="success"></dy-progress>
    <dy-progress :percentage="100" status="warning"></dy-progress>
    <dy-progress :percentage="50" status="exception"></dy-progress>
  </div>
</template>
<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
  },
};
</script>
