<script>
   import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/counter';
export default {

    computed : {
        ...mapState(useMainStore, ['movie'])
    },
    methods: {
        ...mapActions(useMainStore,['fetchOneMovie'])
    },
    created(){
        this.fetchOneMovie(this.$route.params.detailId);
    }
}
</script>


<template>
    <!-- <pre>{{ movie }}</pre> -->
    <div class="cover">
        <div class="d-flex flex-row">
            <i @click="()=>{
                this.$router.go(-1)
            }"  class="fa-solid fa-angle-left iconBack text-white"></i>
            <h4>Back</h4>
        </div>

        <div class="body">
            <img :src="movie?.image?.original" class="image"/>
            <h2>{{ movie?.name }}</h2>
            <div class="ratingCard">
                <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>    
                <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>    
                <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>    
                <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>  
                <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>  
                <i style="
                font-weight:bold;
                font-style: normal;
                margin-left:10px;
                color: white;
                ">8.5</i> 
            </div>

            <div v-text="movie?.summary" class="text-white summary">
            </div>
        </div>

        
    </div>




</template>

<style scoped>
.summary {
    position: absolute;
    top:50%;
    left: 10%;
}
.body {
    position:relative;
}
.body h2 {
    color: white;
    position: absolute;    
    top: 30%;
    left: 10%;
}

.body .ratingCard {
    color: rgb(249, 196, 5);
    position: absolute;    
    top: 40%;
    left: 10%;
}

.cardRating {
    margin-left: 10px;
}
.cover h4 {
    height: 50px;
    width: 50px;
    color: rgb(239, 169, 18);
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
}
.cover .iconBack {
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
    font-size: 1rem;
}

.cover .iconBack:hover {
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    background-color: rgb(45, 43, 43);
    cursor: pointer;
    font-size: 1rem;
}

.image {
    height: 100%;
    width: 100%;
    opacity: 70%;
    margin-bottom: 100px;
}
</style>