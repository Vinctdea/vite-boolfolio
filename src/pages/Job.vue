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
            isLoading: true,
            paginatorData:{
              current_page:1,
              links:[]
            }
          }
        },
        methods:{
          getApi(apiUrl){
            axios.get(apiUrl).then(result=>{
              
              this.jobs = result.data.jobs.data;
              this.isLoading = false;
              this.paginatorData.current_page = result.data.jobs.current_page;
              this.paginatorData.links = result.data.jobs.links;
              console.log( this.paginatorData);
              
              
              
              
            }).catch(error=>{
              console.log(error.message);
              
            })
          }
        },
        mounted(){
          this.getApi(store.apiUrl)
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
       <div class="paginator">
        
        <button
          v-for="(link, index) in paginatorData.links"
          :key="index"
          v-html="link.label"
          :disabled="link.active || !link.url"
          @click="getApi(link.url)"
          ></button>
        
       </div>
    </div>
</template>



<style lang="scss" scoped>
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .paginator{
    display: flex;
    justify-content: center;
    margin: 10px 3px 0 10px;
    button{
      background-color: white;
      padding: 3px;
      margin: 10px 3px 0px;
      border-radius: 10px;
      &:hover{
        color: violet;
        cursor: pointer;
      }
    }
  }
</style>