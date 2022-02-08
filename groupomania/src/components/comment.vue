<template>
  <div class="comment">
    <div id="comment">
      <div class="btn">
        <v-btn to="/Post" class="indigo darken-4 white--text"
          >Nouveau commentaire</v-btn
        >
        <v-btn class="indigo darken-4 white--text">Modifier</v-btn>
        <v-btn class="indigo darken-4 white--text">Supprimer</v-btn>
      </div>
    </div>
  </div>
</template>



<style scoped>
#comment {
  display: block;
  padding-top: 10px;
}
.btn {
  display: flex;
  justify-content: space-around;
}
</style>
