<template>
  <h1>Great Destinations in Washington</h1>
  <div class="wa-wrapper">
    <!-- <img class="photoView-2" v-bind:src="imagesOr[imageIndex].src" v-bind:alt="imagesOr[imageIndex].alt">
    <button class="next-1" @click="addOneWa">Next Photo</button>-->

    <img class="photo-wa" src="../assets/BeautifulSeattle.jpeg" 
      alt="Beautiful Seattle, Washington"/>
    <p class="words">Beautiful Seattle, Washington</p>
    <img class="photo-wa" src="../assets/SmithTower.jpeg" alt="Smith Tower Downtown Seattle"/>
    <p class="words">Smith Tower Downtown Seattle</p>
    <img class="photo-wa" src="../assets/Ferry.jpg" alt="Seattle Ferries see the Sound"/>
    <p class="words">Seattle Ferries see the Sound</p>
    <img class="photo-wa" src="../assets/snoqualmiePass.jpg" 
      alt="Snoqualmie Pass 3600ft"/>
    <p class="words">Snoqualmie Pass 3600ft</p>
    <img class="photo-wa" src="../assets/SalmonBakeNeahBay.jpg" 
      alt="Salmon Bake Neah Bay Washington, Makah Nation"/>
    <p class="words">Salmon Bake Neah Bay Washington<br>Makah Nation</p>
    <img class="photo-wa" src="../assets/CanoeRaces.jpeg" 
      alt="Makah Days Canoe Races"/>
    <p class="words">Makah Days Canoe Races</p>
  </div>

</template>

<script>
export default {
  name: "Washington Events",
  data() {
    return {
      title: "Cultural Events in Oregon",
      imageIndex: 0,
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
  },
  methods: {
    addOneWa() {
      this.imageIndex = (this.imageIndex + 1) % this.imagesWa.length;
    },
  },
};
</script>
<style scoped>
.photo-wa {
  width: 85%;
  display: flex;
  flex-flow: column wrap;
  padding-left: 15%;
  padding-top: 1rem;
}
.words {
  padding-top: 1rem;
}
@media (min-width: 1025px) and (max-width: 1201px) {
  .photo-wa {
    width: 50%;
  }
  .wa-wrapper {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-right: 0;
  }
  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }

}
</style>