<template>
<AppTopnav />
<AppHeader />
<AppHeaderSticky />
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>

<AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppHeaderSticky from '@/components/app-header-sticky'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
    return {

    }
  }
}
</script>
<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
