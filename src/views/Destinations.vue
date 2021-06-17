<template>
  <h1>{{ title }}</h1>
  <div>
    <!--TODO: Add function to take getData function and pass result
        into new http fetch command.  I just didn' have time to do that. -->
    <img
      class="photoPic"
      @click="getData"
      src="../assets/SpaceNeedle.jpg"
      alt="Picture of the Seattle's Space Needle"
    />
    <p class="spaceNeedle-1">Space Needle Seattle, Washington</p>
    <span class="weather"></span>
    {{ list }}
    <p class="spaceNeedle-2">Select picture above for Seattle Temp</p>
    <div class="site">
      <h2 :siteName="siteName">{{ siteName }}</h2>
      <h3 :where="where">{{ where }}</h3>
      <h3 :author="author">{{ author }}</h3>
      <p :rating="rating">{{ rating }}</p>
    </div>

    <h1>Share your Stories</h1>
    <div class="wrapper">
      <form class="form">
        <label class="label-fix" id="namefield">Name: </label>
        <input
          class="inputName"
          type="text"
          name="nameField"
          placeholder="name"
        />
        <label class="label-fix" id="emailField">Email: </label>
        <input
          class="inputEmail"
          type="email"
          name="emailfield"
          placeholder="email"
        />
        <span class="space"></span>
        <input class="enterCity" type="submit" value="submit" name="submit" />
      </form>
    </div>
    <div class="weather">
      <label class="cityTemp-1" id="cityTemp"
        >Enter City to see weather today:</label >
    </div>
    <div class="inputField">
      <input
        class="cityRequested"
        type="text"
        name="City"
        placeholder="City"
      /><!--Input for City Naame-->
      </div>
      <div class="city-width">
       <input class="enterCity" type="submit" value="submit" name="submit" />
      </div>
    </div>
</template>

<script>
export default {
  name: "Washington Events",
  props: {
    siteName: {
      type: String,
      required: true,
    },
    where: {
      type: String,
    },
    author: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  data() {
    return {
      title: "Destinations in Washington",
      list: "",
      author: "Who's site: Suzanne DePoe",
      rating: "Site Rates a low 8",
      siteName: "Destination Site",
      where: "Where would you like to go?",
    };
  },
  // TODO: Use v-model to do this function
  // TODO: create function first of getData to take input and replace city.
  //let weather = "http://api.openweathermap.org/data/2.5/weather?q=city&units=imperial&//appid=bd2463aff7191ada5d8eed8d6ac5910d";
  //CorrectCity = weather.replace("city", "Seattle");
  //console.log(CorrectCity);
  methods: {
    getData() {
      // Current Weather Open Weather was used: https://openweathermap.org/current
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=bd2463aff7191ada5d8eed8d6ac5910d"
      )
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("The request failed due to network issues");
          }
        })
        .then((json) => {
          this.list = "The temp today in " + json.main.temp;
        })
        .catch((err) => {
          console.log("ERROR Spelling or City may not be available.", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: column wrap;
}
.wrapper label input {
  font-size: 1rem;
  padding: 0.5rem;
}
.wrapper input[type="submit"] {
  font-size: 1rem;
  color: blue;
  background-color: #dcdcdc;
  width: 50%;
}

.form {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
h3 {
  font-size: 1rem;
  padding: 0;
}
.label-fix {
  color: #000000;
  display: inline;
  align-items: flex-start;
}
.inputName {
  height: 1.5rem;
  width: 75%;
}
.inputEmail {
  height: 1.5rem;
  width: 75%;
}
.inputField {
  padding-left: 3rem;
  margin: 0;
  width: 80%;

}
.weather {
  display: flex;
  flex-flow: column wrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  width: 90%;
}
.spaceNeedle-1 {
  padding-top: 0.5rem;
  margin: 0;
}
.spaceNeedle-2 {
  padding-top: 1rem;
  margin: 0;
  font-weight: bold; 
}
.site {
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.enterCity {
  width: 40%;
}
.cityWhere {
  display: flex;
  width: 75%;
  flex-flow: column wrap;
  align-items: center;
}
.cityRequested {
  width: 100%;
  margin: .5rem;
  align-items: center;
}
.space {
  padding-bottom: 1rem;
}
.photoPic {
  width: 80%;
  height: 50%;
}
.nameField {
  text-align: left;
}
.emailField {
  text-align: left;
}
.cityTemp-1 {
  padding-left: 2rem;
}
@media (min-width: 768px) and (max-width: 979px) {
  * {
    background-color: #f00;
  }
}
</style>