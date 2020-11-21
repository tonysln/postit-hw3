<template>
<div>
    <div class="post" v-for="(post, index) in posts" :key="index">
      <div class="post-author">
          <span class="post-author-info">
              <img :src=post.author.avatar alt="Post author">
              <small>{{post.author.firstname | capitalize}} {{post.author.lastname | capitalize}}</small>
          </span>
          <small>{{post.createTime}}</small>
      </div>
      <div v-if=post.media>
        <div class="post-image" v-if="post.media.type === 'video'">
          <video :src=post.media.url controls></video>
        </div>
        <div class="post-image" v-else>
          <img :src=post.media.url alt="">
        </div>
      </div>
      <div class="post-title" v-if=post.text><h3>{{post.text}}</h3></div>
      <div class="post-actions">
          <button @click="togglePostLike(post)" 
                  type="button" name="like"
                  :class="{ liked: post.liked, 'like-button': true }">{{post.likes}}</button>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: "Posts",
    computed: {
        posts: function () {
            return this.$store.getters.getPosts;
        }
    },
    mounted() {
        this.$store.dispatch("getPosts");
    },
    methods: {
      togglePostLike: function(post) {
          post.liked = !post.liked;
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
.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 40px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

.post .post-actions {
  padding: 10px;
}

.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: #01579b;
}
</style>