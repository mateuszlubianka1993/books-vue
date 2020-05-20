<template>
  <div>
    <h4 class="animated fadeIn">Today in History - {{ day.date }}</h4>
    <h5 class="text-left">Births</h5>
    <mdb-carousel
      class="h-auto d-inline-block small items-box align-middle mb-4"
      :interval="6000"
      slide
      :items="day.births"
      indicators
      v-animateOnScroll="'fadeInRight'"
    ></mdb-carousel>
    <h5 class="text-left">Deaths</h5>
    <mdb-carousel
      class="h-auto d-inline-block small items-box align-middle mb-4"
      :interval="6000"
      slide
      :items="day.deaths"
      indicators
      v-animateOnScroll="'fadeInRight'"
    ></mdb-carousel>
    <h5 class="text-left">Events</h5>
    <mdb-carousel
      class="h-auto d-inline-block small items-box align-middle mb-4"
      :interval="6000"
      slide
      :items="day.events"
      indicators
      v-animateOnScroll="'fadeInRight'"
    ></mdb-carousel>
  </div>
</template>

<script>
import { mdbCarousel, animateOnScroll } from "mdbvue";

export default {
  name: "DayInPast",
  directives: {
      animateOnScroll
  },
  data() {
    return {
      today: new Date().getDate(),
      thisMonth: new Date().getMonth() + 1,
      day: {
        date: "",
        events: [],
        births: [],
        deaths: [],
      },
    };
  },
  components: {
    mdbCarousel,
  },
  methods: {
    getDayEvents() {
      this.$http
        .get(
          `https://byabbe.se/on-this-day/${this.thisMonth}/${this.today}/events.json`
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.day.date = data.date;
          this.day.events = data.events.map((event) => {
            return {
              img: true,
              // Zdjęcie autorstwa Caio z Pexels
              src: require('@/assets/events.jpg'),
              mask: "black-light",
              alt: "First Slide",
              caption: {
                title: `${event.description} - ${event.year}`,
              },
            };
          });
        });
    },
    getDayBirths() {
      this.$http
        .get(
          `https://byabbe.se/on-this-day/${this.thisMonth}/${this.today}/births.json`
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.day.births = data.births.map((el) => {
            return {
              img: true,
              // Zdjęcie autorstwa Kaboompics .com z Pexels
              src: require('@/assets/births.jpg'),
              mask: "black-light",
              alt: "First Slide",
              caption: {
                title: el.description,
              },
            };
          });
        });
    },
    getDayDeaths() {
      this.$http
        .get(`https://byabbe.se/on-this-day/${this.thisMonth}/${this.today}/deaths.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.day.deaths = data.deaths.map((el) => {
            return {
              img: true,
              // Zdjęcie autorstwa Wendy van Zyl z Pexels
              src: require('@/assets/deaths.jpg'),
              mask: "black-light",
              alt: "First Slide",
              caption: {
                title: el.description,
              },
            };
          });
        });
    },
  },
  mounted: function() {
    this.getDayEvents();
    this.getDayBirths();
    this.getDayDeaths();
  },
};
</script>

<style scoped>
.items-box {
  font-size: 0.5rem;
}
.carousel-caption {
  top: 50% !important;
  transform: translateY(-50%);
}
</style>
