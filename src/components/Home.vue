<template>
  <div>
    <Header/>
    <section class="main-container" id="posts-container">
        <Posts />
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Posts from "./Posts.vue";

export default {
  name: "Home",
  components: {
    Header, Posts
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