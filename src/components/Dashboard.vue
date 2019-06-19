<template>
  <div>
    <h1>Eventos</h1><hr>
    <b-container fluid>
      <b-row>
        <EventItem
          v-for="(event_item, index) of $store.state.events"
          :event="event_item"
          :key="index"
        />
      </b-row>
    </b-container>
  </div>
</template>
<script src="./Dashboard.js"></script>