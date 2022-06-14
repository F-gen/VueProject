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
         <ul>
          <li v-for="i in 20" :key="i" >
            <GoodsItem :goods="{}" />
          </li>
        </ul>
      </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter'
import SubSort from './components/sub-sort'
import GoodsItem from './components/goods-item'
export default {
  name: 'SubCategory',
  setup() {
    const isChecked = ref(true)
    return {
      isChecked
    }
  },
  components: { SubBread, SubFilter, SubSort, GoodsItem }

}
</script>
<style lang="less" scoped>
.goods-list {
  background: #fff;
 padding: 0 25px;
  margin-top: 25px;
 ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
