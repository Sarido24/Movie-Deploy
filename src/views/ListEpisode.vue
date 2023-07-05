<script>
import { mapActions, mapState } from 'pinia'
import {useMainStore} from '../stores/counter'


export default {
    mounted(){
        const carousel = document.querySelector(".carousel2");
        let isDragging = false, startX, startScrollLeft;

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging")
            startX = e.pageX
            startScrollLeft = carousel.scrollLeft
        }
        const dragEnd = ()=>{
            isDragging = false;
            carousel.classList.remove("dragging")

        }

        const dragging = (e)=>{
            if(!isDragging) return

            carousel.scrollLeft =startScrollLeft-  (e.pageX - startX)
        }

        carousel.addEventListener("mousedown",dragStart)
        carousel.addEventListener("mousemove",dragging)
        document.addEventListener("mouseup",dragEnd)

    },
    computed: {
        ...mapState(useMainStore,['moviesById'])
    },
    methods: {
        ...mapActions(useMainStore, ['fetchMoviesById'])

    },
    created(){
        // console.log(this.$route.params.id, '>>>>>> INI ID List');
        this.fetchMoviesById(this.$route.params.id)
    },
   
}

</script>
<template>
    <!-- <pre>{{ moviesById }}</pre> -->
    <div class="cover">
        <div class="d-flex flex-row">
            <i @click="$router.push('/')"  class="fa-solid fa-angle-left iconBack text-white"></i>
            <h4>Back</h4>
        </div>

        <h2 >SEASON {{ moviesById[0]?.season }} - LIST EPISODES</h2>

    <div class="body">
        <div class="wrapper">
        <ul class="carousel2">
            <li @click="$router.push('/detail/'+ movie.id)" v-for="movie in moviesById" class="card">
                <div class="img">
                    <img :src="movie?.image?.original">
                </div>
                <span class="rating">{{ movie?.rating?.average }}</span>
                <h2>{{ movie?.name }}</h2>
                <div class="d-flex flex-row">
                    <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>    
                    <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>    
                    <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>    
                    <i class="fa-sharp fa-solid fa-star fa-xs cardRating"></i>   
                </div>
                <span>Episodes 0{{ movie?.number }}</span>
            </li>
            

        </ul>

        <!-- <i class="fa-solid fa-angle-right"></i> -->


    </div>

    </div>
</div>

   


</template>

<style scoped>
.cardRating {
    color: orange
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
.cover h2 {
    margin-left: 50px;
    color: white;
    line-height: 50px;
}

.body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 35px;
    background: black

}

.wrapper {
    max-width: 1100px;
    width: 100%;
    position: relative;
}

/* .wrapper i {
    height: 50px;
    width: 50px;
    background: #ffffff;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    font-size: 1.25rem;
    transform: translateY(-50%);
    box-shadow: 0 3px 6px black;
}

.wrapper i:first-child {
    left: -22px;
}
.wrapper i:last-child {
    right: -22px;
} */
.wrapper .carousel2 {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100%/3) - 12px);
    gap:16px;
    overflow: hidden;
}

.card .img img {
     width: 250px;
     height: 300px;
     border-radius: 10px;
     opacity: 80%;
}
.card .img img:hover {
     width: 250px;
     height: 300px;
     border-radius: 10px;
     opacity: 100%;
}

.card h2 {
    color: #fff;
    font-weight: 500;
    font-size: 1.56rem;  
}

.card span {
    color : #f8f8f8;
    font-size: 1.31rem;
}
.carousel2 :where(.card, .img){
    display: flex;
    align-items: center;
    justify-content: center;

}

.carousel2.dragging .card {
    cursor: grab;
    user-select: none;
}
.carousel2 .card {
    height: 450px;
    list-style: none;
    background: #000000;
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.rating {
    color:rgb(255, 255, 255);
    padding: 5px;
    width:50px;
    border-radius: 30%;
    background-color: orange;
    
    position: absolute;
    top: -3%;
    left:88%;
}


@media screen and (max-width: 900px){
    .wrapper .carousel2 {
        grid-auto-columns: calc((100%/2) - 9px);

    }
}

@media screen and (max-width: 600px){
    .wrapper .carousel2 {
        grid-auto-columns: 100%;

    }
}

</style>