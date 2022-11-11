<template>
  <p>{{ quote }}</p>
</template>

<script>
import axios from "axios";

export default {
  name: "Quote",

  data() {
    return {
      quote: "",
    };
  },

  mounted() {
    axios
      .get("https://api.api-ninjas.com/v1/facts", {
        headers: {
          "X-Api-Key": "fjsi9Ri0Wh4IBEwwIdlqRg==vIg0o3IgilQ5HVJi",
        },
      })
      .then((res) => {
        console.log(res.data)
        this.quote = res.data[0].fact+'!';
      })
      .catch((err) => {
        alert(err.message);
      });
  },
};
</script>
<style scoped>
.quote {
  display: flex;
  margin-left: 50px;
}
</style> 
