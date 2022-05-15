<template>
  <div class="relative" @mouseover="hover=true" @mouseleave="hover=false">
    <img :src="src" alt="" class="rounded-lg">
    <div v-if="hover" class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
    <div v-if="hover" class="absolute top-0  w-full h-full flex flex-col justify-between p-2">
      <div class="flex items-center justify-between">
        <!-- 下拉 -->
        <button class="flex items-center">
          <p class="text-white font-semibold">{{board}}</p>
           <span class="material-icons  text-white">expand_more</span>
        </button>
        <!-- save -->
        <button class="rounded-full py-3 px-5 text-white bg-primary font-semibold">
            Save
        </button>
      </div>
      <!-- 分享 ... -->
      <div class="flex items-center w-full">
        <button class="ml-auto mr-2 bg-white rounded-full flex justify-center items-center w-8 h-8 text-dark opacity-75 hover:opacity-100">
          <span class="material-icons text-base">ios_share</span>
        </button>
           <button class="bg-white rounded-full flex justify-center items-center w-8 h-8 text-dark opacity-75 hover:opacity-100">
          <span class="material-icons text-base">more_horiz</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ["src","board"],
  data () {
    return {
      hover:false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'></style>
