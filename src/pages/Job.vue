<script>
import { store } from '../store/store';
import axios from 'axios';
import loader from '@/components/partials/loader.vue';

    export default {
      name:'Job',
      components:{
        loader
      },
        
        data(){
          return{
            jobs:[],
            isLoading: true
          }
        },
        methods:{
          getApi(){
            axios.get(store.apiUrl).then(result=>{
              
              this.jobs = result.data.jobs.data;
              this.isLoading = false;
              console.log( this.jobs);
              
              
              
              
            }).catch(error=>{
              console.log(error.message);
              
            })
          }
        },
        mounted(){
          this.getApi()
        }
    }
</script>


<template>
    <div>
        <h1>I miei progetti</h1>
        <div v-if="isLoading" class="loading">
         <loader/>

        </div>
       <ul v-else>
        <li v-for="job in jobs" :key="job.id">
          {{ job.title }}
        </li>
       </ul>
    </div>
</template>



<style lang="scss" scoped>
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>