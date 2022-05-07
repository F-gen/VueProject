<template>
  <section class="quote">
    <div class="quote-content">
     {{quote.content}}
    </div>
    <div class="quote-info">
       <div class="quote-Anime">
        {{quote.Anime}}
      </div>
      <div class="quote-auther">
       {{quote.character}}
      </div>
     
    </div>
  </section>
</template>

<script>
export default {
  props:['quote']
}
</script>

<style lang="scss" scoped>
  .quote{
    position: relative;
    margin: 0 auto;
    padding: 32px;
    max-width: 720px;
    &-content {
      position: relative;
      font-size: 28px;
      font-weight: 600;
      background-color:var(--dark);
      color:var(--light);
      padding: 48px 32px;
      border-radius: 16px;
      &::before,&:after{
        content: '"';
        color: var(--gray);
        margin: 0 2px;

        }
    }
    &-info {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 32px;
      .quote-auther,.quote-Anime{
        position: absolute;
        padding: 12px 16px;
        font-size: 24px;
        font-weight: 700;
        border-radius: 99px;
        text-align: center;
        color: var(--light);
      }
      .quote-auther{
        top: calc(100% - 32px);
        right: 0;
        transform: translateY(-50%);
        background-color:var(--secondary);
      }
      .quote-Anime{
        top: 0;
        left: 0;
        background-color: var(--tertiary);  
        color: var(--dark);

      }
    }
  }
</style>
