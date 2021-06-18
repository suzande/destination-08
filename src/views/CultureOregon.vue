<template>
  <h1>Great Destinations in Oregon</h1>
  <div class="or-wrapper">
   <img class="photo-or" src="../assets/CannonBeachOregon.jpg" alt="Cannon Beach Oregon"/>
   <p class="words">Cannon Beach Oregon</p>
   <img class="photo-or" src="../assets/Dad_grandEntry_2.jpg" alt="Grand Entry Pow-wow"/>
   <p class="words">Grand Entry Native American Pow-wow</p>
   <img class="photo-or" src="../assets/veterans.jpg" alt="Veterans Recognized in Grand Entry" />
   <p class="words">Veteran's in Grand Entry<br>Recognizing thier service</p>
   <img class="photo-or" src="../assets/Dawn_dancing_2.jpg" alt="Dawn Dancing"/>
   <p class="words">Former Princess of University of Washington</p>
   <img class="photo-or" src="../assets/winnings.jpg" alt="Madelyn and her dance winnings"/>
   <p class="words">Madelyn with her dance winnings</p>
    <img class="photo-or" src="../assets/DePoeBay.jpg" alt="Story of DePoe Bay Oregon"/>
   <p class="words">DePoe Bay Naming</p>
   <img class="photo-or" src="../assets/FleetofFlowers.png" alt="Chief Chewesclaw out on flower boats"/>
   <p class="words">Chief Chewesclas @ Fleet of Flowers<br>DePoe Bay</p>
   <img class="photo-or" src="../assets/parade-float.jpg" alt="Annual Nesika Illahee Pow-wow"/>
   <p class="words">Annual Nesika Illahee Pow-wow</p>
   <img class="photo-or" src="../assets/Parade.jpg" alt="Annual Nesika Illahee Pow-wow - Dad"/>
   <p class="words">Annual Nesika Illahee Pow-wow Dad left</p>
  </div>
</template>



<style scoped>
.photo-or {
  width: 85%;
  display: flex;
  flex-flow: column wrap;
  padding-left: 15%;
  padding-top: 1rem;
}
.words {
  padding-top: 1rem;
}
h1 {
  font-size: 1.5rem;
  padding-top: 1rem;
}
@media (min-width: 1025px) and (max-width: 1201px) {
 .or-wrapper {
   display: flex;
   flex-flow: column wrap;
   align-items: center;
   margin-right: 0;
 }
 .or-wrapper p {
   font-size: 1.5rem;
 }
 .photo-or {
   width: 50%;
 }
 h1 {
   font-size: 2rem;
 }
  
 }
</style>

