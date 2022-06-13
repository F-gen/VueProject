<template>
<div class="SubCategory">
  <div class="container">
    <!-- 面包屑 -->
    <SubBread />
    <!-- 筛选区 -->
    <SubFilter />

      <!-- 结果区域 -->
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort />
        <!-- 列表 -->
      </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter'
import SubSort from './components/sub-sort'
export default {
  name: 'SubCategory',
  setup() {
    const isChecked = ref(true)
    return {
      isChecked
    }
  },
  components: { SubBread, SubFilter, SubSort }

}
</script>
<style lang="less" scoped>
.goods-list {
  background: #fff;
 padding: 0 25px;
  margin-top: 25px;
}
</style>
