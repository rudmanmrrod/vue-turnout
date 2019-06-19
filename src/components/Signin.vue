<template>
  <b-container fluid>
    <h1>Ingresar</h1>
    <hr>
    <b-alert 
      variant="danger"
      v-model="error" 
      v-show="error"
    >
      {{error}}
    </b-alert>
    <b-form>
      <b-form-group
        label="Correo:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="email" 
          placeholder="Ingresa tú correo"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Contraseña:"
        label-for="password"
      >
        <b-form-input 
          id="password"
          v-model="password" 
          placeholder="Ingresa tú contraseña"
          type="password"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button 
      variant="primary"
      @click="SignIn"
    >
    Ingresar
    </b-button>
    <br><br>
    <b-row class="text-center">
      <b-col> 
        <router-link to="signup">Tienes un usuario? Regístrate acá</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script src="./Signin.js"></script>