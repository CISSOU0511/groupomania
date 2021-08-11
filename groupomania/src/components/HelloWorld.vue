<template>
  <div class="HelloWorld"> 
  <div class="user">{{userNom}} {{userPrenom}} {{userPassword}}</div>
  </div>
</template>
<script> 
import Axios from 'axios'; 

export default {
  props: {
        userNom: String,
        userPrenom: String,
        userPassword: String,
        createAt: String,
    },
    methods: {
        deleteUser: function(){
            Axios
            .delete("http://localhost:3000/api/user/" + this.userId,{
            })
            .then(() => {
                console.log('utilisateur supprimé');
            })
            .catch((error) => {
                console.log('impossible de supprimer cet utilisateur');
                console.log(error.response.data.msg);
            })
        }
    }
}
</script>
