<template>
  <header class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="header-content">
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  text-align: center;
  color: white;
}

.header h1 {
  font-size: 3rem;
  margin: 0;
}
</style>
