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
      
    }

}
}
    
</script>

