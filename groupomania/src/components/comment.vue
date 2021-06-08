<template>
    <div class="comment">
        <div id="comment">
                <div to="/comment" class="userComments">{{userNom}} {{userPrenom}}</div>
                <div class="contentComment flex-grow-1">{{commentaire}}</div>
            <v-btn class="indigo darken-4 white--text" @click="deleteCommentaire()">supprimer</v-btn>
        </div>

    </div>
</template>

<script>

import Axios from "axios";

export default {    
    props: {
        commentaire: String,
        userNom: String,
        userPrenom: String,
        createAt: String,
        commentaireId: Number,
    },
    methods: {
        deleteCommentaire: function(){
            Axios
            .delete("http://localhost:3000/api/comment/" + this.commentaireId,{
            })
            .then(() => {
                console.log('commentaire supprimé');
            })
            .catch((error) => {
                console.log('impossible de supprimer ce commentaire');
                console.log(error.response.data.msg);
            })
        }
    }    
}
</script>
