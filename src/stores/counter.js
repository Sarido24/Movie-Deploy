import { ref, computed } from "vue";
import { defineStore} from "pinia";
import axios from 'axios';

export const useMainStore = defineStore("main", {
  state: () => ({
    movies: [],
    moviesById: [],
    movie: null,
    seasons: [],
    randomSliders: []
  }),
  actions: {
    async fetchOneMovie(id){
      try {
        if(id){
          const {data} = await axios({
            method: 'get',
            url: `https://api.tvmaze.com/episodes/${id}`
          })
          this.movie = data
        }
      } catch (error) {
        console.log(error);
        
      }
    },
    async fetchMoviesById(id){
      try {
        if(id){
          console.log("ini episeodesss", id);
          const {data} = await axios({
            method: 'get',
            url: `https://api.tvmaze.com/seasons/${id}/episodes`
          })
          this.moviesById = data
        }
      } catch (error) {
        console.log(error);
        
      }
    },
    async fetchMovies(){
      try {
      const {data} = await axios({
        method: "GET",
        url: "https://api.tvmaze.com/shows/82/episodes"
      })

        for (var i = 0; i < 5; i++) {
          // Pilih indeks acak dari array
          var randomIndex = Math.floor(Math.random() * data.length);
      
          // Ambil data dari indeks acak dan masukkan ke array hasil acak
          this.movies.push(data[randomIndex])
      
          // Hapus data yang sudah dipilih dari array asli
          data.splice(randomIndex, 1);
        }
      } catch (error) {
        console.log(error);
        
      }
    },

    async fetchSeasons(id){
      try {
        const {data} = await axios({
          method: 'get',
          url: 'https://api.tvmaze.com/shows/82/seasons'
        })
        this.seasons = data
      } catch (error) {
        console.log(error);
        
      }
    }
  }
});
