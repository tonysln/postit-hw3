<template>
  <div></div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style scoped>
.profile {
  width: 47%;
  height: 200px;
  margin: 5px;
  border: 2px solid #eeeeee;
  border-radius: 10px;
  float: left;
}

.profile-picture-div {
  width: 100%;
  height: 90px;
}

.profile-picture {
  display: block;
  height: 90px;
  width: 90px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
}

.profile-name-div {
  width: 100%;
  height: 40px;
  text-align: center;
}

.follow-button-div {
  width: 100%;
  height: 50px;
  text-align: center;
}

.follow-button {
  border: none;
  background-color: #800080;
  color: #ffffff;
  cursor: pointer;
}

.followed-button {
  border: 2px solid #800080;
  background-color: #ffffff;
  color: #800080;
}
</style>