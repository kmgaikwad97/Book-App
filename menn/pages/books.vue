<template>
  <div>
    <v-container>
      <v-layout row nowrap>
        <v-flex xs12 pb-5>
          <h1>Books Library</h1>
        </v-flex>
        <v-flex
          v-for="article in articles"
          :key="article.title"
          mb-5
          px-3
          xs12
          sm6
          md4
          lg4
        >
          <v-card
            class="mx-auto"
            hover
            style="text-align: center; padding-top: 10px"
          >
            <img :src="article.img" max-width="100%" height="200px" />
            <v-card-title>
              <div>
                <div class="headline">{{ article.name }}</div>
              </div>
            </v-card-title>
            <v-card-subtitle style="text-align: left">{{
              article.writer
            }}</v-card-subtitle>
            <!-- <v-card-text text-truncate style="text-align:left" h-100>{{ article.description }}</v-card-text> -->
            <!-- <v-card-text class="overflow-hidden d-inline-block" style="text-align:left; text-overflow:ellipsis; height:70px" h-100>{{ article.description }} <span>view</span> </v-card-text> -->
            <!-- <v-card-text style="text-align:left;">{{ article.description }}  </v-card-text> -->
            <v-card-text style="text-align:left;">{{ article.description.slice(0,115)}} <span v-if="article.description.length > 25">...</span></v-card-text>


            <v-card-actions>
              <v-btn
                :href="article.link"
                target="_blank"
                color="orange lighten-2"
                text
              >
                <v-icon :href="article.link">mdi-cart</v-icon>
              </v-btn>
              <v-spacer />
              <v-btn
                :href="article.img"
                target="_blank"
                color="orange lighten-2"
                text
                >View Image</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>


  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "books",
  data() {
    return {
      articles: "",
      page: 1,
    };
  },
  async mounted() {
    const data = await axios.get("http://localhost:3200/getbooks");
    console.log(data);
    this.articles = data.data;
  },
};
</script>