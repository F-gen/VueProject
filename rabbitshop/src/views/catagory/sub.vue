<template>
<div class="SubCategory">
  <div class="container">
    <!-- 面包屑 -->
    <SubBread />
    <!-- 筛选区 -->
    <SubFilter />
    <!-- 测试复选框 -->
    <XtxCheckbox> </XtxCheckbox>

  </div>
</div>
</template>

<script>
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter'
export default {
  name: 'SubCategory',
  components: { SubBread, SubFilter }

}
</script>
<style lang="less" scoped>

</style>
