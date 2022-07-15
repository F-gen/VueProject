<template>
  <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a @click="changebrand(brand.id)"  :class="{active:filterData.selectedBrand===brand.id}" href="javasript:;" v-for="brand in filterData.brands" :key="brand.id">{{brand.name}}</a>
      </div>
    </div>
    <div class="item" v-for="p in filterData.saleProperties" :key="p.id">
      <div class="head">{{p.name}}：</div>
      <div class="body">
        <a  @click="changeprop(p,attr.id)" :class="{active:p.selectedProp===attr.id}" href="javasript:;" v-for="attr in p.properties" :key="attr.id">{{attr.name}}</a>
      </div>
    </div>
  </div>
  <div v-else class="sub-filter">
    <XtxSkeleton class="item" width="800px" height="40px"  />
    <XtxSkeleton class="item" width="800px" height="40px"  />
    <XtxSkeleton class="item" width="600px" height="40px"  />
    <XtxSkeleton class="item" width="600px" height="40px"  />
    <XtxSkeleton class="item" width="600px" height="40px"  />
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findSubCategoryFilter } from '@/api/category'
export default {
  name: 'SubFilter',
  setup(props, { emit }) {
    // 监听二级类目id变化  获取筛选数据
    const route = useRoute()
    const filterData = ref(null)
    const filterLoading = ref(false)
    watch(() => route.params.id, (newVal) => {
      // 变化后的id 有值  且处于 二级类目下
      filterLoading.value = true
      if (newVal && `/category/sub/${newVal}` === route.path) {
        // 请求数据
        findSubCategoryFilter(route.params.id).then(({ result }) => {
          // 品牌全部
          result.selectedBrand = null
          result.brands.unshift({ id: null, name: '全部' })
          // 销售属性全部
          result.saleProperties.forEach(p => {
            p.selectedProp = undefined
            p.properties.unshift({ id: null, name: '全部' })
          })

          filterData.value = result
          filterLoading.value = false
        })
      }
    })

    // 获取筛选参数
    const getFilterParams = () => {
      const filterParams = {}
      const attrs = []
      filterParams.brandId = filterData.value.selectedBrand
      filterData.value.saleProperties.forEach(p => {
        const attr = p.properties.find(attr => attr.id === p.selectedProp)
        if (attr && attr.id !== undefined) {
          attrs.push({ groupName: p.name, propertyName: attr.name })
        }
      })
      if (attrs.length) filterParams.attrs = attrs
      return filterParams
    }
    // 1.记录当前选择品牌
    const changebrand = (brandId) => {
      if (filterData.value.selectedBrand === brandId) return
      filterData.value.selectedBrand = brandId
      emit('filter-change', getFilterParams())
    }
    // 2.已经选择的销售属性
    const changeprop = (p, attrId) => {
      if (p.selectedProp === attrId) return
      p.selectedProp = attrId
      emit('filter-change', getFilterParams())
    }
    return { filterData, filterLoading, changebrand, changeprop }
  }
}
</script>
<style scoped lang='less'>
  // 筛选区
  .sub-filter {
    background: #fff;
    padding: 25px;
    .item {
      display: flex;
      line-height: 40px;
      .head {
        width: 80px;
        color: #999;
      }
      .body {
        flex: 1;
        a {
          margin-right: 36px;
          transition: all .3s;
          display: inline-block;
          &.active,
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
     .xtx-skeleton {
      padding: 10px 0;
    }
  }

</style>
