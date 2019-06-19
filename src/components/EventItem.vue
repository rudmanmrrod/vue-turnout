<template>
  <b-col sm-4>
    <b-card :title="event.title">
      <b-card-text>
        {{ event.description }}
      </b-card-text>
      <b-card-text>
        <b-list-group>
          <b-list-group-item><b>Ubicación: </b>{{event.location}}</b-list-group-item>
          <b-list-group-item><b>Fecha: </b>{{event.date}}</b-list-group-item>
          <b-list-group-item><b>Autor: </b>{{event.email}}</b-list-group-item>  
        </b-list-group>
      </b-card-text>
    </b-card>
  </b-col>
</template>
<script src="./EventItem.js"></script>