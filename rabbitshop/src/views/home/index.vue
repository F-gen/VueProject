<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
         <!-- 轮播图 -->
         <HomeBanner />
      </div>
    </div>
    <!-- 新鲜好物 -->
<HomeNew />
<!-- 人气推荐 -->
<HomeHot />
<!-- 使用transition组件 -->

  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot },
  setup() {

  }
}
</script>
<style scoped lang="less">

</style>
