<template>
  <dy-date-picker v-model="value1"></dy-date-picker>
</template>
<script scoped>
export default {
    data() {
        return {
            value1: new Date(),
        }
    }
}
</script>
