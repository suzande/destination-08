<template>
  <h1>{{ title }}</h1>
  <!--<img class="photo-home" src="../assets/westport-crab-pots.jpg" />-->
  <div class="home-photo">
    <img src=../assets/CanoeJourney.jpg alt="Canoe Journey Alki Beach">
    <img src=../assets/haystack-rock-NeahBay.jpg alt="Haystack Rock in the Pacific Ocean, Neah Bay, WA">
    <img src=../assets/mt-baker-Washington.jpg alt="Mount Baker east of Bellingham, Washington">
    <img src=../assets/MtRainier.jpg alt="Mount Raineir east of Seattle, Washington">
    <img src=../assets/westport-crab-pots.jpg alt="Westport on the Washington Coast">
    <img src=../assets/Dawn_dancing_2.jpg alt= "University of Washington Spring Pow-wow">
    <img src=../assets/BlueMountains-WallaWalla.jpg alt="Blue Mountain Range in Walla Walla, WA"> 
    <img :src="getImagePath(list[0]).imgSrc" alt="Mt Rainier in Washington">
  
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
      list: [
      {imgSrc: "@/assets/mt-baker-Washington.jpg"}
      ],
    };
  },
  methods: {
    getImagePath(path) {
      return(require(path))
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