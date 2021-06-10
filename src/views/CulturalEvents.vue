<template>
  <h1>Cultural Events</h1>
  <div>
    <img class="photoView-1" src="imagesWa.src" alt="imagesWa.alt" />
    <button class="next-1" @click="addOneWa">Next Photo</button>
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
          src: "..assets/CanoeJourney.jpg",
          alt: "Canoe Journey Alki Beach",
        },
        {
          id: 2,
          src: "..assets/haystack-rock-NeahBay.jpg",
          alt: "Haystack Rock in the Pacific Ocean, Neah Bay, WA",
        },
        {
          id: 3,
          src: "..assets/mt-baker-Washington.jpg",
          alt: "Mount Baker east of Bellingham, Washington",
        },
        {
          id: 4,
          src: "..assets/MtRainier.jpg",
          alt: "Mount Raineir east of Seattle, Washington",
        },
        {
          id: 5,
          src: "..assets/westport-crab-pots.jpg",
          alt: "Westport on the Washington Coast",
        },
        {
          id: 6,
          src: "..assets/Dawn_dancing_2.jpg",
          alt: "University of Washington Spring Pow-wow",
        },
        {
          id: 7,
          src: "..assets/BlueMountains-WallaWalla.jpg",
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