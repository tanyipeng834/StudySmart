<template>
  <h2>{{ title }}</h2>
  <div>
    <img src= " {{ image }} " alt="image">
  </div>
  <p> {{ content }} <a href= "{{ url }}">read more</a></p>
  
</template>

<script>
import axios from "axios";

export default {
  name: "News",

  data() {
    return {
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
        this.title = data['title'];
        this.url = data['url'];
        this.image = data['urlToImage'];
        console.log(this.image)

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

</style> 
