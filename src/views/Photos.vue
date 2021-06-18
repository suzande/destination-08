<template>
 <h1> {{ title }} </h1>
 <div class="centerPhoto">
   <img class="photoView-1" v-bind:src="imagesWa[imageIndex].src" v-bind:alt="imagesWa[imageIndex].alt" v-bind:text="imagesWa[imageIndex]">
   <button class="next-1" v-on:click="addOneWa">Next Photo</button>
   <p>Select the button to see next photo to view next.</p>
 
    <!--Here is where I can calling for the text list of locations.-->
    <!--<p v-if="name === 'Beautiful'">Beautiful!</p>-->
  </div>
</template>
 
<script>
export default {
 name: "Washington Events",
 data() {
   return {
     title: "Photos of Destinations in Washington and Oregon",
     imageIndex: 0,
     imagesWa: [
       {
         id: 1,
         src: "../images/CanoeJourney.jpg",
         alt: "Canoe Journey Alki Beach",
         text: "Canoe Journey Alki Beach",
       },
       {
         id: 2,
         src: "../images/haystack-rock-NeahBay.jpg",
         alt: "Haystack Rock in the Pacific Ocean, Neah Bay, WA",
       },
       {
         id: 3,
         src: "../images/mt-baker-Washington.jpg",
         alt: "Mount Baker east of Bellingham, Washington",
       },
       {
         id: 4,
         src: "../images/MtRainier.jpg",
         alt: "Mount Raineir east of Seattle, Washington",
       },
       {
         id: 5,
         src: "../images/westport-crab-pots.jpg",
         alt: "Westport on the Washington Coast",
       },
       {
         id: 6,
         src: "../images/Dawn_dancing_2.jpg",
         alt: "University of Washington Spring Pow-wow",
       },
       {
         id: 7,
         src: "../images/BlueMountains-WallaWalla.jpg",
         alt: "Blue Mountain Range in Walla Walla, WA",
       },
     ],
   };
 },
 methods: {
   addOneWa() {
     this.imageIndex = (this.imageIndex + 1) % this.imagesWa.length;
   },
 },
};
</script>

<style lang="scss">
.centerPhoto {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
.photoView-1 {
  display: flex;
  margin: 0;
  width: 60%;
  }
  .next-1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

@media (min-width: 1025px) and (max-width: 1201px) {
  .miscPhotos {
    display: flex;
    flex-flow: row wrap;
  }
  .photoView-1 {
    display: flex;
    flex-flow: row wrap;
    padding-left: 20rem;
    width: 50%;
  }
  .next-1 {
    margin-top: 2rem;
    width: 15%;
    height: 1.5rem;
  }
  h1 {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
}
</style>