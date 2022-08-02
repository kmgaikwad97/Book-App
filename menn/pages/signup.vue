<template>
  <!-- <div class="home">
        <div class="container">
            <h1>Welcome</h1>
        </div>
    </div> -->

  <div class="colorsss">

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.colorsss{
  background-image: linear-gradient(
    to left,
    rgba(255, 165, 0, 0.5),
    rgba(0, 0, 0, 0.9)
  ) ,
    url("https://www.whichbook.net/bookgrids/homepage?mode=desktopttps://www.whichbook.net/images/whichbook-share-homepage.jpg") !important;
  /* background-image: url("https://images.pexels.com/photos/12258844/pexels-photo-12258844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); */
  /* background-color: rgba(39,62,84,0.82); */
  /* filter: hue-rotate(360deg); */
  /* background-image:  !important; */
 
  background-size: 100%;
  background-position: center;
  /* height: 100%; */
  background-size: cover;
  background-repeat: no-repeat;

  /* background-size: 100%; */
  /* background-repeat: no-repeat; */
  /* font-family: var(--myfont); */
  /* display: flex; */
  /* align-items: center;
    justify-content: center; */
  min-height: 100vh;
  max-width: 100%;
}

.container{
    max-width: 100%;
    padding: 0;
}
</style>