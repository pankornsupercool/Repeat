<template>
  <div class="events">
    <img class="events-image" alt="Vue logo" src="../images/love.png" width="150">
    <!-- Binding event object from EventCard with looping items in events list by event keyword. -->
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService';
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data(){
    return  {
      events : null
    }
  },
  created(){
    EventService.getEvents().then(response =>{
      this.events = response.data
    }).catch(err =>{
      this.events = err;
    })
  }
}

</script>
<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items : center;
  padding-top: 10px;
  
}
.events-image{
  margin-bottom: 20px;
  padding-bottom: 20px;
}
</style>