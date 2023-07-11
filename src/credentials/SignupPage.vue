<template>
  <div class="signup-card">
    <v-form v-model="valid">
      <v-card
        class="mx-auto my-12"
        width="672"
      >
        <div class="card-container">
          <v-card-title>
            <h2>Signup</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                cols="6"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="6"
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
              <v-col cols="12" class="text-field">
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
                cols="6"
              >
                <v-text-field
                  v-model="password"
                  
                  :rules="passwordRules"
                  type='password'
                  name="input-10-1"
                  label="Password"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col
                cols="6"
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

          </v-card-text>
            <p 
              class="validation-error"
              v-if="password !== confirmPassword && showValidationErrors"
            >
              Passwords doesn't match
            </p>
            <v-card-actions class="card-actions">
              <v-btn 
                rounded
                dark
                elevation="2"
                @click.prevent="submitSignupForm"
              >
                Sign Up
              </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-form>
  </div>
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
        show1: false,
        password: '',
        confirmPassword: '',
        passwordRules: [
          v => !!v || 'Required.',
          v => (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) && v.length >= 8) || 'Must contain a-z, A-Z, 0-9 and should be minimum 8 characters',
        ],
        // confirmPasswordRules: [
        //   v => (v.password !== v.confirmPassword) ? "Passwords Doesn't Match" : ""
        // ],
        showValidationErrors: false,
      }
    },
    methods: {

      submitSignupForm() {
        // console.log('Form is Triggered')

        if ( this.password === this.confirmPassword ) {
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
        else {
          this.showValidationErrors = true;
          // alert("Passwords doesn't Match")
        }
      }
    }
  }
</script>

<style scoped>

.signup-card {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.validation-error {
  color: red;
}

</style>