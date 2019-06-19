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
  </div>
</template>
<script src="./Dashboard.js"></script>