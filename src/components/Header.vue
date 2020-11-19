<template>
  <header>
    <div id="drop-down-menu" v-show=showMenu>
      <span id="user-name"></span><br>
      <span id="user-email"></span><hr>
      <router-link to="/browse">Browse</router-link><hr>
      <router-link to="/login">Log Out</router-link>
    </div>

    <nav>
      <div class="logo-container">
        <img id="top-left-logo" src="../assets/logo.png" alt="postIt" @click=navHome>
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img src="" class="avatar" alt="Me" id="user-avatar" @click=toggleMenu>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
    components: {
    },
    data: () => {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleMenu: function() {
        this.showMenu = !this.showMenu;
      },
      navHome: function() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}

#user-avatar, #top-left-logo {
  cursor: pointer;
}

#drop-down-menu {
  z-index: 999;
  position: absolute;
  right: 0;
  top: 50px;
  background: #ffffff;
  padding: 8px;
}
</style>