<template>

  <Header title="The Anime Quote" />
  <Quote  :quote="quote" />
  <div class="btn">
    <button @click="getquote()">Generate</button>
  </div>
  <QuoteList :quotes='quotes' />

</template>

<script>
export default {name: 'App',};
</script>
<script setup>
import { reactive,onMounted ,ref} from 'vue';
import Header from './components/Head.vue'
import Quote from './components/Quote.vue'
import QuoteList from './components/quoteList.vue'
let quote=reactive({
  content:"",
Anime:"",
character:"",
})
let quotes=ref([])
const getquote= async ()=>{
     if(quote.content){
       quotes.value.push(quote);
    }
  const data = await fetch('https://animechan.vercel.app/api/random').then(res=>res.json());
  quote.content=data.quote
  quote.Anime=data.anime
  quote.character=data.character

}
onMounted(()=>{
  getquote()
})

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
