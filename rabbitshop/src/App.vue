<template>
  <div class="container">

    App
    <button @click="fn">test</button>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
    const fn=()=>{
      request('/member/profile','post',{a:10})
    }
    return {}
  }
}
</script>
