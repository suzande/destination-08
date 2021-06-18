<template>
 <div class="locations">
    <h2 class="topLocation"> {{ titleWa }} </h2>
 <!--<img class="photo-home" src="./assets/westport-crab-pots.jpg" />-->
   <ul>
     <li v-for="waLocation in waLocations" :key="waLocation.text">
       {{ waLocation.text }}
     </li>
   </ul>
   <h2> {{ titleOr }} </h2>
    <ul>
      <li v-for="orLocation in orLocations" :key="orLocation.text">
          {{ orLocation.text }}
      </li>
    </ul>
 <section class="ps-5">
   <h2 class="fs-4 ps-2 pb-3">Find out more about areas in Washington and Oregon</h2>
    <div class="ps-5 accordion accordion-flush p-1 w-60" id="accordionFlushElement">
     <div class="accordion-item border border-primary border-2">
       <h2 class="accordion-header" id="flush-headingOne">
       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
       Select to read about places in Washington.</button>
       </h2>
     <div id="flush-collapseOne" class="ps-4 accordion-collage collapse" data-bs-parent="#accordionFlushElement">
     <div class="pb1 accordion-body lh-base">Enjoy locations in Washington State. Head West and you'll find the Ocean. Head East and you'll find the Cascade Mountain Range, Head further East and you'll find the plateau. Head SouthEast past the mountains and you'll meet Wine Country.</div>
     </div>
    </div>
    <div class="accordion-item border border-secondary border-2">
      <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button"   data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
      Select to read about places in Oregon</button></h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushElement">
      <div class="pb2 accordion-body lh-base">Enjoy locations in Oregon State. From the Northern Border on Interstate 5. Head West and you'll find the Ocean. Head East and you'll be driving up the Columbia River, with numerous dam's. Head further east and it will be plateau as can be found in Washington. Head South and you'll find many beautiful areas to visit. Table Rock, Famous tall flat rock special to Indigenous Peoples of Oregon.
      </div>
     </div>
     </div>
    </div>
  </section>
 </div>
</template>
 
<script>
export default {
 name: "Washington Events",
 data() {
   return {
     titleWa: "Locations in Washington to Visit",
     titleOr: "Locations in Oregon to Visit",
     waLocations: [
       { text: "Canadian Border" },
       { text: "Washington Coast" },
       { text: "Mount Baker" },
       { text: "Mount Rainier" },
       { text: "Pow-wow Time" },
     ],
     orLocations: [
       { text: "Portland" },
       { text: "Oregon Coast" },
       { text: "Mount Hood" },
       { text: "Table Rock" },
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
@media (min-width: 1025px) and (max-width: 1201px) {
  .locations {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
  }
  .topLocation {
    padding-top: 1rem;
  }
}
</style>
