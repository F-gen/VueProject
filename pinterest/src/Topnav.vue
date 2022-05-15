<template>
  <div class="px-3 py-4 flex items-center justify-between">
      <div class="flex  items-center">
        <button class="rounded-full hover:bg-light p-3 flex items-center justify-center " type="button" name="button">
          <img src="logo.png" alt="logo" class="h-6 w-6">
        </button>
        <button v-for="tab in tabItels" :key="tab.key" @click="selectedTab=tab.key" :class="`${selectedTab === tab.key ? 'bg-dark text-white':'text-dark hover:bg-light'} rounded-full py-3 px-4 font-semibold` " type="button" name="button">
          {{tab.name}}
        </button>
      </div>
      <!-- search -->
      <div class="flex-grow relative">
        <span class="material-icons absolute mt-3 ml-3 text-muted">search</span>
        <input type="text" class="w-full hover:bg-lightHover rounded-full bg-light p-3 pr-3 pl-10" placeholder="Search">
      </div>
      <div class="flex items-center relative">
        <button type="button" class="rounded-full hover:bg-light flex items-center justify-center p-3 relative">
          <span class="material-icons text-3xl text-muted">notifications</span>
          <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-5">4</div>
           </button>
            <button type="button" class="rounded-full hover:bg-light flex items-center justify-center p-3 relative">
          <span class="material-icons text-3xl text-muted">textsms</span>
          <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-5">1</div>
           </button>
           <button class="rounded-full hover:bg-light p-3 flex items-center justify-center " type="button" name="button">
         <div class="h-6 w-6 bg-cover bg-center rounded-full" style="background-image:url(profile.jpg)"></div>
        </button>
        <button class="w-6 h-6 hover:bg-light rounded-full flex items-center justify-center">
          <span class="material-icons text-3xl text-muted">expand_more</span>
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  components: {},
  props: {},
  data () {
    return {
      tabItels:[
        {name:"Home",key:"home"},
        {name:"Today",key:"today"},
        ],
        selectedTab:"home"
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
