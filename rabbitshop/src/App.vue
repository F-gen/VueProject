<template>
<div>
<h1>{{$store.state.userName}}</h1>
<h2>{{$store.getters['newName']}}</h2>
</div>
<button @click="mutation">changename</button>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.userName)
    console.log(store.getters.newName)
    const mutation = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }

    return { mutation }
  }
}
</script>
