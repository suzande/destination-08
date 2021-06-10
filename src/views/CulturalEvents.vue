<template>
  <h1>Cultural Events</h1>
  <div>
    <img class="photoView-1" src="waPhotos.src" alt="waPhotos.alt" />
    <button class="next-1" @click="addOneWa">Next Photo</button>
  </div>
</template>

<script>
const waPhotos = [
  {
    id: "1",
    text: "Canoe Journey of Tribes",
    src: "..assets/CanoeJourney.jpg",
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
      index = 0;
      for (waPhotos = 0; i < waPhotos.length; waPhotos++);
    },
  },
};
</script>