<template>
  <div class="Post">
    <div id="Post">
      <v-textarea class="pt-12">
        <h3>{{ comment }}</h3>
      </v-textarea>
      <v-btn color="success">Enregistrer</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      mode: "Post",
      comment: "",

    }
  },
};
</script>
