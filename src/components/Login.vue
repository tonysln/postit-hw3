<template>
  <section class="login-page">
    <section id="login-container">
      <div>
        <h1>Welcome to postIt!</h1>
      </div>
      <div>
        <h4>
          <a href="#">Create an Account</a>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div>
        <h3>Please Log In</h3>
        <form action="index.html" method="post">
          <div>
            <input type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input type="password" name="password" placeholder="Password">
          </div>
          <div>
            <button class="button" name="login" @click=navHome>Log In</button>
          </div>
          <div>
            <small>
              <a href="#">Forgot password?</a>
            </small>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Login",
  methods: {
    navHome: function() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-container {
  /* TODO background image from assets */
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: 15px 15px;
  min-width: 25%;
  padding: 45px 45px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}

#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}
</style>