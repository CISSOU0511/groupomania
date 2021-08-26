<template>
  <v-container class="container">
    <v-layout row wrap class="mb-4">
      <v-flex xs12 sm6 class="text-xs-center mb-4">
        <v-btn large router to="/Post" class="red darken-4 white--text p-3">Articles</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn large router to="/comment" class="red darken-4 white--text">Commentaires</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="Articles in Articles"
            :src="Articles.imageUrl"
            :key="Articles.id">
            <div class="title">
              {{ Articles.title}}
              </div>              
            </v-carousel-item>          
        </v-carousel>
      </v-flex>      
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {
        Articles: [
          { imageUrl: 'https://www.nyc.fr/wp-content/uploads/2015/07/New_York_City-770x385.jpg', title:'New York'},
          { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Eiffel_trocadero_i.jpg/240px-Eiffel_trocadero_i.jpg', title:'Paris'}
        ]
      }
    }
  }

</script>
<style scoped>
.title {
  position:absolute;
  bottom:50px;
  background-color: rgba(0,0,0,0.5);
  color:white;
  font-size: 2em;
  padding: 20px;
}
.container {
  padding: 40px;
}
</style>


