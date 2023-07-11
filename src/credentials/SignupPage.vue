<template>
  <v-form v-model="valid">
    <v-container fluid class="d-flex">
      <h1 class="justify-center">Signup Page</h1>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>

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
      </v-row>

      <v-row>
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

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="confirmPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

      </v-row>

      <v-btn 
        block
        elevation="2"
        @click.prevent="submitSignupForm"
      >
        Submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>

import axios from 'axios'

  export default {
    data() {
      return {
        valid: true,
        firstname: '',
        lastname: '',
        nameRules: [
          v => !!v || 'Name is required',
          // v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        // password: '',
        // confirmpassword: '',
        show1: false,
        password: '',
        confirmPassword: '',
        passwordRules: [
          v => !!v || 'Required.',
          v => v.length >= 8 || 'Min 8 characters',
          v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
        ],
      }
    },
    methods: {

      submitSignupForm() {
        // console.log('Form is Triggered')
        const formData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        }

        axios.post('http://localhost:4000/users/signup', formData)
          .then(response => {
            if (response.data) {
              this.$router.push('/login')
            }
          })
          .catch(error => {
            // console.error(error);
            if (error.response.status === 404) {
              // console.log("Already Signed up, Please Log in")
              alert("Already Signed up, Do Login")
            }
          })
      }
    }
  }
</script>