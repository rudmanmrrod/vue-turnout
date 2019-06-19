<template>
	<b-container fluid>
    <h1>Agregar Evento</h1>
    <hr>
    <b-form>
      <b-form-group
        label="Titulo:"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="event.title" 
          placeholder="Ingresa el título"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Descripción:"
        label-for="description"
      >
        <b-form-input 
          id="description"
          v-model="event.description" 
          placeholder="Ingresa la descripción"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Ubicación:"
        label-for="location"
      >
        <b-form-input 
          id="location"
          v-model="event.location" 
          placeholder="Ingresa la ubicación"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Fecha:"
        label-for="dates"
      >
        <b-form-input 
          id="dates"
          v-model="event.date" 
          placeholder="Ingresa la fecha"
          type="date"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button 
      variant="primary"
      @click="addEvent"
    >
    Agregar Evento
    </b-button>
  </b-container>
</template>
<script src="./AddEvent.js"></script>