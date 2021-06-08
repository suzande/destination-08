<template>
   <header>
     <h1> {{ title }} </h1>
     <h1 class="page-title">Find your destination!</h1>
     <div class="allPhotos">
       <img class="header-photo-1" v-bind:src="list[0].imgSrc" alt="Mt Rainier in Washington">
     </div>

    </header>

    <div id="nav">
      <nav><router-link to="/">Home</router-link></nav>
      <nav><router-link to="/Destinations">Destinations</router-link></nav>
      <nav><router-link to="/CulturalEvents">Cultural Events</router-link></nav>
      <nav><router-link to="/WaterSports">Water Sports</router-link></nav>
      <nav><router-link to="/UploadPhotos">Upload Photos</router-link></nav>
    </div>
    <router-view />

  <footer>
    <div>
     <h2>Visit Tourist Locations in Washington/Oregon!</h2>
     <p>HTMl 130B Sp 21: JavaScript</p>
     <p>4311 11th Ave NE, Seattle, WA 98105</p>
     <p>Hours of operation</p>
     <p>Friday, 9:00p.m. to 5:00p.m.</p>
     <p>Send a note if requesting information.</p>
   </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Welcome to the Destination Site",
      footerText: "Visit Tourist Locations in Washington/Oregon!",
      list: [
        {imgSrc: "./assets/mt-baker-Washington.jpg"}
      ],
    };
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
