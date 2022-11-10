<template>
  <!-- <div id="news" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#news" data-slide-to="0" class="active"></li>
    <li data-target="#news" data-slide-to="1"></li>
    <li data-target="#news" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" :src="image" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" :src="image" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" :src="image" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#news" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#news" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->

  <div class="container" v-for="story in news">
    <h2>{{ story.title }}</h2>
    <h5>{{  story.id }}</h5>
    <div>
      <img :src="story.image" alt="image" />
    </div>
    <p>{{ story.content }} <a :href="url" target="_blank">read more</a></p>
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
        for (let i = 0; i < 2; i++) {
          var data = res.data["articles"][i];
       
          var story = {}

          var headline = data["title"].split("- ");
          this.title = headline[0];
          this.id = headline[1];
          story.title = this.title;
          story.id= this.id;

          this.url = data["url"];
          this.image = data["urlToImage"];
          story.url = this.url;
          story.image = this.image;

          var contents = data["content"].split("[");
          this.content = contents[0];
          story.content = this.content;
  
          this.news.push(story)
          console.log(this.news)
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
  height: 425px;
  width: auto;
}
h5 {
  font-style: italic;
  font-weight: 400;
}
</style>
