<template>
  <!-- <div class="container">
    <div class="col-6">
        <div class="description">
            <h2>Discover your next great read</h2>
            <p>Enjoy unlimited books and ebooks in languages of your choice. Add Books to the Cart that suits your need.</p>
        </div>
    </div>
    <div class="col-6">
        <img src="https://i.guim.co.uk/img/media/884f26ad690eec7766347d299c3939aa260ec8ef/0_0_2500_1500/master/2500.jpg?width=1020&quality=85&fit=max&s=0ea919798d8c90b767b9eeb4c9b642cd" alt="">
    </div>
  </div> -->

   <v-container>
    <v-row >
      <v-col
        cols="6"
        sm="6"
        md="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <div class="description">
            <h2>Discover your next great read</h2>
            <p>Enjoy unlimited books and ebooks in languages of your choice. Add Books to the Cart that suits your need.</p>
        </div>
        </v-card>
      </v-col>

      <v-col
        cols="6"
        md="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <div class="home-img">
        <img style="width:100%" src="https://i.guim.co.uk/img/media/884f26ad690eec7766347d299c3939aa260ec8ef/0_0_2500_1500/master/2500.jpg?width=1020&quality=85&fit=max&s=0ea919798d8c90b767b9eeb4c9b642cd" alt="">
    </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
    .description{
        align-items: center;
        min-height:355px;
        display: flex;
    }
</style>