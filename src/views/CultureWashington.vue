<template>
  <h1>Culture in Washington</h1>
  <h2>Coastal Locations in Washington</h2>
  <div>
  <!-- <img class="photoView-2" v-bind:src="imagesOr[imageIndex].src" v-bind:alt="imagesOr[imageIndex].alt">
    <button class="next-1" @click="addOneWa">Next Photo</button>-->
  <img class="photo-wa" src="../assets/SmithTower.jpeg" alt="Smith Tower Downtown Seattle"/>
  <p>Smith Tower Downtown Seattle</p>
  <img class="photo-wa" src="../assets/Ferry.jpg" alt="Seattle Ferries see the Sound"/>
  <p>Seattle Ferries see the Sound</p>
  <img class="photo-wa" src="../assets/snoqualmiePass.jpg" 
      alt="Snoqualmie Pass 3600ft"/>
  <p>Snoqualmie Pass 3600ft</p>
  <img class="photo-wa" src="../assets/SalmonBakeNeahBay.jpg" 
      alt="Salmon Bake Neah Bay Washington, Makah Nation"/>
  <p>Salmon Bake Neah Bay Washington<br>Makah Nation</p>
  <img class="photo-wa" src="../assets/CanoeRaces.jpeg" 
      alt="Makah Days Canoe Races"/>
  <p>Makah Days Canoe Races</p>
  <img class="photo-wa" src="../assets/BeautifulSeattle.jpeg" 
      alt="Beautiful Seattle, Washington"/>
  <p>Beautiful Seattle, Washington</p>
  </div>

</template>

<script>
const waPhotos = [
  {
    id: "1",
    text: "Canoe Journey of Tribes",
    src: "../assets/CanoeJourney.jpg",
    alt: "Canoe Journey Alki Beach",
  },
];
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
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}
@media (min-width: 768px) and (max-width: 979px) {
  * {
    background-color: #f00;
  }
}
</style>