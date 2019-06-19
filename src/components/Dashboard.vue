<template>
  <div>
    <h1>Dashboard</h1>
    <b-button 
      variant="danger"
      @click="signOut"
    >
    Signout
    </b-button>
    <AddEvent/>
    <h1>Eventos</h1>
    <b-row>
      <EventItem
        v-for="(event_item, index) of $store.state.events"
        :event="event_item"
        :key="index"
      />
    </b-row>
  </div>
</template>
<script src="./Dashboard.js"></script>