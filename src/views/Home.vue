<template>
  <h1>{{ title }}</h1>
  <!--<img class="photo-home" src="../assets/westport-crab-pots.jpg" />-->
  <div class="home-photo">
    <img class="photoView-1" v-bind:src='../assets/imagesWa[imageIndex].src" v-bind:alt="imagesWa[imageIndex].alt">
    <button class="next-1" @click="addOneWa">Next Photo</button>
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
      imageIndex: 0,
      waLocations: [
        { text: "Canadian Border" },
        { text: "Washington Coast" },
        { text: "Mount Baker" },
        { text: "Mount Rainier" },
        { text: "Pow-wow Time" },
      ],
      imagesWa: [
        {
          id: 1,
          src: "../assets/CanoeJourney.jpg",
          alt: "Canoe Journey Alki Beach",
        },
        {
          id: 2,
          src: "../assets/haystack-rock-NeahBay.jpg",
          alt: "Haystack Rock in the Pacific Ocean, Neah Bay, WA",
        },
        {
          id: 3,
          src: "../assets/mt-baker-Washington.jpg",
          alt: "Mount Baker east of Bellingham, Washington",
        },
        {
          id: 4,
          src: "../assets/MtRainier.jpg",
          alt: "Mount Raineir east of Seattle, Washington",
        },
        {
          id: 5,
          src: "../assets/westport-crab-pots.jpg",
          alt: "Westport on the Washington Coast",
        },
        {
          id: 6,
          src: "../assets/Dawn_dancing_2.jpg",
          alt: "University of Washington Spring Pow-wow",
        },
        {
          id: 7,
          src: "../assets/BlueMountains-WallaWalla.jpg",
          alt: "Blue Mountain Range in Walla Walla, WA",
        },
      ],
    };
  methods: {
    addOneWa() {
      this.imageIndex = (this.imageIndex + 1) % this.imagesWa.length;
    },
  }
}
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