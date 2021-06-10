<template>
  <h1> {{ title }} </h1>
  <div>
    <img
      class="photoPic"
      @click="getData"
      src="../assets/BlueMountains-WallaWalla.jpg"
      alt="Picture of the Blue Mountains in Walla Walla"
    />
    <span class="weather"></span>
    {{ list }}
    <h1>Share your Stories</h1>
    <div class="wrapper">
      <form class="form">
        <label id="namefield">Name: </label>
        <input
          class="inputName"
          type="text"
          name="nameField"
          placeholder="name"
        />
        <label id="emailField">Email: </label>
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
       <label class="cityTemp-1" id="cityTemp">Enter City to see weather today:</label>
        <input
          class="cityRequested"
          type="text"
          name="City"
          placeholder="City"
        />
      <input class="enterCity" type="submit" value="submit" name="submit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Washington Events",
  props: {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    rating: {
      type: Number,
    }
  },
  data() {
    return {
      title: "Destinations for Suzanne",
      temp: "",
      list: [],
    };
  },
  methods: {
    getData() {
      // Current Weather Open Weather was used: https://openweathermap.org/current
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&appid=bd2463aff7191ada5d8eed8d6ac5910d"
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
.inputName {
  height: 1.5rem;
  width: 75%;
}
.inputEmail {
  height: 1.5rem;
  width: 75%;
}
.weather {
  display: flex;
  flex-flow: column wrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  width: 90%;
}
.enterCity {
  width: 30%;
}
.cityWhere {
  display: flex;
  width: 75%;
  flex-flow: column wrap;
  align-items: center;
}
.cityRequested {
  width: 75%;
  margin: .5rem;
  align-items: center;
}
.space {
  padding-bottom: 1rem;
}
.photoPic {
  width: 80%;
}
.nameField {
  text-align: left;
}
.emailField {
  text-align: left;
}
</style>