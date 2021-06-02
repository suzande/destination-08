<template>
    <header>
      <h1>{{ title }}</h1>
    <img class="header-photo-1" src=./assets/teepee.svg alt="cartoon of teepee home sweet home">
     <h1 class="page-title">Find your destination!</h1>
    <img class="header-photo-2" src=./assets/CannonBeachOregon.jpg alt="Cannon Beach Oregon">

    </header>

    <div id="nav">
      <nav><router-link to="/Home">Home</router-link></nav>
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
    };
  }
};
</script>

<style lang="scss">
//Global CSS for webpage
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-photo-1 {
  display: none;
}
.header-photo-2 {
  height: 15rem;
}
.nav {
  display: flex;
  flex-wrap: row wrap;
}
</style>
