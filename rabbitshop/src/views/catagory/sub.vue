<template>
<div class="SubCategory">
  <div class="container">
    <!-- 面包屑 -->
    <SubBread />
    <!-- 筛选区 -->
    <SubFilter />
    <!-- 测试复选框 -->
    <XtxCheckbox v-model="isChecked"> 全选</XtxCheckbox>

  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter'
export default {
  name: 'SubCategory',
  setup() {
    const isChecked = ref(true)
    return {
      isChecked
    }
  },
  components: { SubBread, SubFilter }

}
</script>
<style lang="less" scoped>

</style>
