<template>
  <h2>{{ title }}</h2>
  <h5>{{ id }}</h5>
  <div>
    <img :src=image alt="image">
  </div>
  <p> {{ content }} <a :href= "url" target="_blank">read more</a></p>
  
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
    };
  },

  mounted() {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=sg&apiKey=796bf7e93e914141a649d4eadb2695a9", {
        headers: {
          
        },
      })
      .then((res) => {
        var data = res.data['articles'][0];

        var headline = data['title'].split('- ');
        this.title = headline[0];
        this.id = headline[1];
        
        this.url = data['url'];
        this.image = data['urlToImage'];

        var contents = data['content'].split('[');
        this.content = contents[0];
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
