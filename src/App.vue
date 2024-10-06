<script>

 import Navbar from './components/partials/Navbar.vue';

  export default {
    components:{
      Navbar
    }
  }
</script>


<template>
  <div class="ms_container">
  <navbar/>
    <router-view ></router-view>
  </div>
</template>



<style lang="scss" scoped>
.ms_container{
  max-width: 1000px;
  border: 3px solid white;
  border-radius: 10px;
  padding: 30px;
}

</style>