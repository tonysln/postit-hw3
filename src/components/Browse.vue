<template>
  <div>
    <Header/>
    <section class="main-container" id="profiles-container">
        <profile/>
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Profile from "./Profile.vue"

export default {
  name: "Browse",
  components: {
    Header,
      Profile
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