<!-- <template>
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
      .get("https://api.api-ninjas.com/v1/quotes?category=education", {
        headers: {
          "X-Api-Key": "fjsi9Ri0Wh4IBEwwIdlqRg==vIg0o3IgilQ5HVJi",
        },
      })
      .then((res) => {
        var data = res.data[0]["quote"];
        this.quote = data;
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
</style>  -->
