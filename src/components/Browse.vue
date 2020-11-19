<template>
  <div>
    <Header/>
    <section class="main-container" id="profiles-container">
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Browse",
  components: {
    Header
  }
}
</script>

<style scoped>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
</style>