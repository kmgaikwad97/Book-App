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
          <v-card class="mx-auto" hover style="text-align: center; padding-top:10px">
            <img :src="article.img" max-width="100%" height="200px" />
            <v-card-title>
              <div style="display: block; word-break: break-word; min-height:65px; text-align:left">
                <div class="headline">{{ article.name }}</div>
              </div>
            </v-card-title>
            <v-card-subtitle style="text-align:left">{{ article.writer }}</v-card-subtitle>
            <!-- <v-card-text text-truncate style="text-align:left" h-100>{{ article.description }}</v-card-text> -->
            <!-- <v-card-text class="overflow-hidden d-inline-block" style="text-align:left; text-overflow:ellipsis; height:70px" h-100>{{ article.description }} <span>view</span> </v-card-text> -->
            <!-- <v-card-text class="d-inline-block" style="text-align:left; overflow:hidden; text-overflow:ellipsis; height:70px; ">{{ article.description.slice(0,25)}}...</v-card-text> -->
            <v-card-text style="text-align:left;">{{ article.description.slice(0,120)}}...</v-card-text>




            <v-card-actions>
              <v-btn
                :href="article.link"
                target="_blank"
                color="orange lighten-2"
                text
                >
              <v-icon :href="article.link">mdi-cart</v-icon>

                </v-btn
              >
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "books",
  data() {
    return {
      articles: "",
    };
  },
  async mounted() {
    const data = await axios.get("http://localhost:3200/english");
    console.log(data);
    this.articles = data.data;
  },
};
</script>