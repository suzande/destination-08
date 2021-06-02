<template>
  <h1>Home Page</h1>
   <img v-bind:src="'../images/westport-crab-pots.jpg'">

</template>

<script type="text/javascript">
const waEvents = {
  data() {
    return {
      showButton: true,
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
          src: "./images/CanoeJourney.jpg",
          alt: "Canoe Journey Alki Beach",
        },
        {
          id: 2,
          src: "./images/haystack-rock-NeahBay.jpg",
          alt: "Haystack Rock in the Pacific Ocean, Neah Bay, WA",
        },
        {
          id: 3,
          src: "./images/mt-baker-Washington.jpg",
          alt: "Mount Baker east of Bellingham, Washington",
        },
        {
          id: 4,
          src: "./images/MtRainier.jpg",
          alt: "Mount Raineir east of Seattle, Washington",
        },
        {
          id: 5,
          src: "./images/westport-crab-pots.jpg",
          alt: "Westport on the Washington Coast",
        },
        {
          id: 6,
          src: "./images/Dawn_dancing_2.jpg",
          alt: "University of Washington Spring Pow-wow",
        },
        {
          id: 7,
          src: "./images/BlueMountains-WallaWalla.jpg",
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