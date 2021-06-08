<template>
   <header>
     <h1> {{ title }} </h1>
     <h1 class="page-title">Find your destination!</h1>
     <div class="allPhotos">
       <img class="header-photo-1" :src="getImagePath(list[0]).imgSrc" alt="Mt Rainier in Washington">
     </div>

    </header>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
      {imgSrc: "@/assets/mt-baker-Washington.jpg"}
      ],
    };
  },
  methods: {
    getImagePath(path){
      return(require(path))
    }
  }
};
</script>

<style lang="scss">

// Web site created for Galaxy S5 
// Need more time to figure out Media Queries
// Common Font Sizes


//Global CSS for webpage
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  $font-verdana: Verdana, Geneva, Tahoma, sans-serif;
  $font-tahoma: Tahoma, sans-serif;
  $font-small: 0.6rem;
  $font-medium: 1rem;
  $font-large: 1.5rem;
  $font-veryLarge: 2rem;
}
* {
  box-sizing: border-box;
}
.globalElements {
  display: flex;
  flex-flow: column wrap;
  background-color: #e0ffff;
}
.header {
  display: flex;
  flex-flow: column wrap;
}
.header-photo-1 {
  width: 80%;
}
.header-photo-2 {
  display: none;
}
.header-photo-3 {
  display: none;
}
.footer {
  display: flex;
  flex-flow: column wrap;
}
</style>
