<template>
<div class="app">
  <Header title="The Anime Quote" />
  <Quote  :quote="quote" />
  <div class="btn">
    <button @click="getquote()">Generate</button>
  </div>
<QuoteList :quotes='quotes' />
</div>
</template>

<script>
import Header from './components/Head.vue'
import Quote from './components/Quote.vue'
import QuoteList from './components/quoteList.vue'

export default {
  name: 'App',
  components: { Header,Quote,QuoteList},
  data() {
    return {
        quotes:[],
        quote:{}
    }
  },
  created(){
    this.getquote()
  },
  methods:{
    async getquote(){
      if(this.quote.content){
          this.quotes = [...this.quotes,this.quote]
      }
      const data = await fetch('https://animechan.vercel.app/api/random').then(res=>res.json());
      this.quote = {
        content:data.quote,
        Anime:data.anime,
        character:data.character
      }
    }
  }
}
</script>

<style lang="scss">
:root{
  --primary:#D81E58;
  --secondary:#8A4FFF;
  --tertiary:#32cbFF;
  --dark:#131A26;
  --light:#EEE;
  --gray:#848484;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}
.btn{
  display: flex;
  justify-content: center;
  padding: 0 32px;
  margin: 64px auto;
  button{
    border: none;
    outline: none;
    padding: 16px 32px;
    border-radius: 99px;
    color: var(--light);
    font-size: 28px;
    text-transform: uppercase;
    cursor: pointer;
    transform: 0.3s;
    background-color:var(--primary);
    &:hover{
      background-color:var(--secondary);
    }
  }
}
</style>
