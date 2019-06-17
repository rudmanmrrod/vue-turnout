<template>
  <b-container fluid>
    <h1>Sign In</h1>
    <b-alert 
      variant="danger"
      v-model="error" 
      v-show="error"
    >
      {{error}}
    </b-alert>
    <b-row>
      <b-col sm="12">
        <b-form-input 
          v-model="email" 
          placeholder="Ingresa tú correo"
        ></b-form-input>
      </b-col>
      <b-col sm="12">
        <b-form-input 
          v-model="password" 
          placeholder="Ingresa tú contraseña"
          type="password"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-button 
      variant="primary"
      @click="SignIn"
    >
    Signin
    </b-button>
  </b-container>
</template>
<script src="./Signin.js"></script>