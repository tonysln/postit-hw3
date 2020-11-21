<template>
  <div>
    <Header/>
    <section class="main-container" id="profiles-container">
        <Profiles />
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Profiles from "./Profiles.vue"

export default {
  name: "Browse",
  components: {
    Header,
      Profiles
  }
}
</script>

<style scoped>
.main-container {
  width: 50%;
  min-height: 100%;
  height: 100vh;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
</style>