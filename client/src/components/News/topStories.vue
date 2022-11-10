<template>
    <div class="container d-flex">
        <div class="card col-md-4 col-4" style="min-width: 20rem" v-for="story in news">
        <img class="card-img-top" :src="story.image" alt="Card image cap" />
        <div class="card-body">
      <h5 class="card-title">{{ story.title }}</h5>
      <p class="card-text">
        <div id="id">{{ story.id }}</div>
        {{ story.content }}
      </p>
      <a :href="story.url" target="_blank" class="btn btn-primary">Read More</a>
    </div>
    </div>
  
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "News",

  data() {
    return {
      id: "",
      title: "",
      url: "",
      image: "",
      content: "",
      news: [],
    };
  },

  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=sg&apiKey=796bf7e93e914141a649d4eadb2695a9",
        {
          headers: {},
        }
      )
      .then((res) => {
        for (let i = 0; i < 3; i++) {
          var data = res.data["articles"][i];

          var story = {};

          var headline = data["title"].split("- ");
          story.title = headline[0];
          story.id = headline[1];

          story.url = data["url"];
          story.image = data["urlToImage"];

          var contents = data["content"].split("[");
          story.content = contents[0];
          console.log(story.content)

          this.news.push(story);
          console.log(this.news);
        }

        // var data = res.data["articles"][0];

        // var headline = data["title"].split("- ");
        // this.title = headline[0];
        // this.id = headline[1];

        // this.url = data["url"];
        // this.image = data["urlToImage"];

        // var contents = data["content"].split("[");
        // this.content = contents[0];
      })
      .catch((err) => {
        alert(err.message);
      });
  },
};
</script>
<style scoped>
img {
  height: 200px;
  width: auto;
}
#id {
  font-style: italic;
  font-weight: 400;
}
.btn {
    background-color: #253F63 !important;
}
.card {
    margin-right: 35px;
}
</style>
