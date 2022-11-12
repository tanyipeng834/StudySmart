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
      this.init()
    },
    methods: {
      init() {
        axios
          .get("https://api.api-ninjas.com/v1/facts", {
            headers: {
              "X-Api-Key": "fjsi9Ri0Wh4IBEwwIdlqRg==vIg0o3IgilQ5HVJi",
            },
          })
          .then((res) => {
            console.log(res.data[0].fact)
            if (res.data[0].fact.length > 140) {
              this.init()
              // return

            } else {
              this.quote = res.data[0].fact + '!';
            }


          })
          .catch((err) => {
            alert(err.message);
          });
      }
    }
  };
</script>
<style >
  html {
  font-family: 'Roboto';
  }
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
</style>