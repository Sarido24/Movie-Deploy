<script>
import Navbar from '../components/Navbar.vue'
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/counter';
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
  components : {
    Navbar,
  },
  computed : {
    ...mapState(useMainStore, ['movies','seasons'])
  },
  methods: {
    ...mapActions(useMainStore, ['fetchMovies','fetchSeasons']),
},
  created(){
    this.fetchMovies()
    this.fetchSeasons()
  }
}

</script>

<template>
<!-- <pre>{{ seasons }}</pre> -->

<Navbar />
  <div class="cover mt-5">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div  class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-image-container">
            <h3 class="movieTitle">{{movies[0]?.name}}</h3>
            <div class="rating">
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
            </div>
            <img
              :src="movies[0]?.image.original"
              class="d-block w-100 carousel-image"
              alt="..."
            />
            <button @click="$router.push('/detail/'+ movies[0]?.id)" class="btn btn-warning">Watch Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-image-container">
            <h3 class="movieTitle">{{movies[1]?.name}}</h3>
            <div class="rating">
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
            </div>
            <img
            :src="movies[1]?.image.original"
              class="d-block w-100 carousel-image"
              alt="..."
            />
            <button @click="$router.push('/detail/'+ movies[1]?.id)" class="btn btn-warning">Watch Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-image-container">
            <h3 class="movieTitle">{{movies[2]?.name}}</h3>
            <div class="rating">
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
            </div>
            <img
            :src="movies[2]?.image.original"
              class="d-block w-100 carousel-image"
              alt="..."
            />
            <button @click="$router.push('/detail/'+ movies[2]?.id)" class="btn btn-warning">Watch Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-image-container">
            <h3 class="movieTitle">{{movies[3]?.name}}</h3>
            <div class="rating">
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
            </div>
            <img
            :src="movies[3]?.image.original"
              class="d-block w-100 carousel-image"
              alt="..."
            />
            <button @click="$router.push('/detail/'+ movies[3]?.id)" class="btn btn-warning">Watch Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-image-container">
            <h3 class="movieTitle">{{movies[4]?.name}}</h3>
            <div class="rating">
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
              <span class="material-symbols-sharp"> grade </span>
            </div>
            <img
            :src="movies[4]?.image.original"
              class="d-block w-100 carousel-image"
              alt="..."
            />
            <button @click="$router.push('/detail/'+ movies[4]?.id)" class="btn btn-warning">Watch Now</button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h3 id="headList">List Season</h3>
    <div class="body">
        <div class="wrapper">
            
        <ul class="carousel2">

            <li v-for="season in seasons" :key="season?.id" class="card">
              <h2 class="text-white">Season {{ season?.number }}</h2>
                <div class="img">
                    <img :src="season?.image?.original">
                </div>
                <button @click="$router.push('/list/'+ season?.id)" class="btn btn-warning">More info</button>
            </li>
           

        </ul>

        <!-- <i class="fa-solid fa-angle-right"></i> -->


    </div>

    </div>


    
  </div>
</template>

<style scoped>


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
     max-width: 100%;
     height: 300px;
     opacity: 70%;
     border-radius: 10px;
}

/* .card h2 {
    font-weight: 500;
    font-size: 1.56rem;
    margin: 30px 0 5px;    
}

.card span {
    color : #6a6d78;
    font-size: 1.31rem;
} */
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
    height: 342px;
    list-style: none;
    background: #000000;
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.card h2 {
  position: absolute;
  color: white;
  top: 15%;
  left: 15%;
}

.card .btn {
  position: absolute;
  top:80%;
  right: 15%;
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
