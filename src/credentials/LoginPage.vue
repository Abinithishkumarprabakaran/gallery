<template>
  <v-form v-model="valid">

    <v-container fluid class="d-flex">
      <h1 class="justify-center">Login Page</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

      </v-row>

      <v-btn 
        block
        elevation="2"
        @click.prevent="submitLoginForm"
      >
        Submit
      </v-btn>

    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';

  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
      password: '',
      passwordRules: [
        v => !!v || 'Required.',
        v => v.length >= 8 || 'Min 8 characters',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
      ],
    }),
    methods: {
      submitLoginForm() {
        const loginFormData = {
          email: this.email,
          password: this.password,
        }

        axios.post('http://localhost:4000/users/login', loginFormData)
          .then(response => {
            // console.log(response.data)
            if(response.data.token) {
              localStorage.setItem('token', response.data.token)
              this.$router.push('/profile')
            }
            // console.log("token", response.data.token)
          })
          .catch(error =>{
            // console.error(error);  
            if (error.response.status === 404) {
              // console.log("Please Sign up")
              alert("Please Sign up")
            }
            else if (error.response.status === 401) {
              // console.log("Invalid Credentials")
              alert("Invalid Credentials")
            }
          })
        // console.log(loginFormData)
      }
    }
  }
</script>