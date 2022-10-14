<template>
    <div>
        <h1>{{quote}}</h1>
    </div>
</template>

<script >



export default {
  name: "Quote",
  mounted() {
    this.loadQuote()
    
  },

  data() {
    return {
        quote:''

    };
  },
  methods: {
    
    loadQuote(){
        axios.get("https://zenquotes.io/api/quotes")
        .then(res => {
            this.quote=res.data[0].q
        })
        .catch(err => {
            console.error(err); 
        })
    }

}
}
    
</script>

