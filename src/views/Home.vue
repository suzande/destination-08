<template>
 <h1>{{ title }}</h1>
 <!--<img class="photo-home" src="./assets/westport-crab-pots.jpg" />-->
 <div>
   <ul class="locations">
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
.locations {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0;
  padding: 0;
}
.h1 {
 font-size: 1rem;
}
li {
 list-style: none;
}
@media (min-width: 768px) and (max-width: 979px) {
  * {
    background-color: #f00;
  }
}
</style>
