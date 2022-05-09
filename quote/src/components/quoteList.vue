<template>
  <section class="quote-list">
    <div class="quote" v-for="(quote,i) in quotes" :key="i">
      <div class="quote-content" >
        {{quote.content}}---{{quote.character}}
      </div>
    </div>
  </section>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps(['quotes']);
</script>

<style scoped lang='scss'>
.quote-list{
  padding: 32px;
  max-width: 720px;
  margin: 0 auto; 
  .quote{
    background-color: var(--light);
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 16px;
   &-content{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 18px;
      max-height: 18px;
    }
    &:hover{
      .quote-content{
        max-height: unset;
        white-space: unset;
      }
    }
  }
}
</style>
