<script>

    export default {
        name: 'Navbar'
    }
</script>

<template>
    <div class="container">
        <ul>
           <li><router-link :to="{name:'home'}">Home</router-link></li>
           <li><router-link :to="{name:'job'}">I miei lavori</router-link></li>
           
        </ul>
    </div>
</template>



<style lang="scss" scoped>
.container{
    margin: 10px 0;
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 20px;

        li{
            
            text-transform: uppercase;
           
            a{
                text-decoration: none;
                color: white;
                border: 1px solid white;
                padding: 5px;
                border-radius: 10px;
                &:hover,
                &.active{
                    color: violet;
                    border-color: violet;
                    
                }
                
            }
        }
    }
    }
</style>