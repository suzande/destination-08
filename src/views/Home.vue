<template>
 <h1>{{ title }}</h1>
 <!--<img class="photo-home" src="../assets/westport-crab-pots.jpg" />-->
 <div class="home-photo">
   <ul>
     <li v-for="waLocation in waLocations" :key="waLocation.text">
       {{ waLocation.text }}
     </li>
   </ul>
 </div>
</template>
 
<script>
export default {
 name: "Washington Events",
 data() {
   return {
     title: "Locations in Washington to Visit",
     waLocations: [
       { text: "Canadian Border" },
       { text: "Washington Coast" },
       { text: "Mount Baker" },
       { text: "Mount Rainier" },
       { text: "Pow-wow Time" },
     ],
   }
 }
};
</script>
 
<style lang="scss">
.photo-home {
 width: 70%;
 padding-bottom: 1rem;
}
.h1 {
 font-size: 1rem;
}
li {
 list-style: none;
}
</style>
