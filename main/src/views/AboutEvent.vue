<template>
  <div class="about">
    <div class="about-card" v-if="event">
      <h1>{{ event.title }}</h1>
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
import EventService from "../services/EventService";
export default {
  props :['id'],
  data() {
    return {
      event: null,
    };
  },props :['id'],
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((err) => {
        this.event = err;
      });
  },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.about-card {
  width: 400px;
  border: 1px solid black;
  background-color: azure;
  color: black;
}
</style>

