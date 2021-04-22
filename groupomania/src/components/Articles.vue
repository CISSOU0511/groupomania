<template>
    <div class="article">
        <div id="article">
                <div class="userArticles">{{userNom}} {{userPrenom}}</div>
                <div class="contentArticle flex-grow-1">{{article}}</div>
            <v-btn class="indigo darken-4 white--text" @click="deleteArticle()">supprimer</v-btn>
        </div>
    
    </div>
</template>

<script>
import Axios from "axios";

export default {    
    props: {
        article: String,
        userNom: String,
        userPrenom: String,
        createAt: String,
        articleId: Number,
    },
    methods: {
        deleteArticle: function(){
            Axios
            .delete("http://localhost:3000/api/articles/" + this.articleId,{
            })
            .then(() => {
                console.log('article supprimé');
            })
            .catch((error) => {
                console.log('impossible de supprimer cet article');
                console.log(error.response.data.msg);
            })
        }
    }    
}
</script>