<template>
  <div>
    <div class="profile" v-for="(profile, index) in profiles" :key="index">
        <div class="profile-picture-div">
            <img class="profile-picture" :src=profile.avatar>
        </div>
        <div class="profile-name-div">
            <h3 class="profile-name">{{profile.firstname | capitalize}} {{profile.lastname | capitalize}}</h3>
        </div>
        <div class="follow-button-div">
            <button :class="{ 'followed-button': profile.following, 'follow-button': true }"
                    @click="toggleFollow(profile)">{{ profile.following ? "Followed" : "Follow" }}</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Profiles",
    computed: {
        profiles: function () {
            return this.$store.state.profiles
        }
    },
    mounted() {
        this.$store.dispatch("getProfiles");
    },
    methods: {
      toggleFollow: function(profile) {
          profile.following = !profile.following;
      }
    },
    filters: {
      capitalize: function(name) {
        if (!name) return ''
        return name.toString().charAt(0).toUpperCase() + name.toString().slice(1)
      }
    }
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