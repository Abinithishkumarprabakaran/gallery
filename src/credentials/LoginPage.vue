<template>
  <div class="login-card">
    <v-form v-model="valid">
      <v-card
        class="mx-auto my-12"
        width="300"
      >
        <div class="card-container">
          <v-card-title>
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
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
              <v-col cols="12" class="text-field">
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
          </v-card-text>
          <v-card-actions class="card-actions">
            <p 
              class="validation-error"
              v-if="showValidationErrors"
            >
              Invalid Credentials
            </p>

            <v-btn
              rounded
              dark
              elevation="2"
              @click.prevent="submitLoginForm"
            >
              Log in
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-form>
  </div>
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
        v => (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) && v.length >= 8) || 'Must contain a-z, A-Z, 0-9 and should be minimum 8 characters',
      ],
      showValidationErrors: false,
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
              this.$router.push(`/profile/${response.data.user._id}`)
              // this.$router.push('/profile')
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
              // alert("Invalid Credentials")
              this.showValidationErrors = true;   
            }
          })
        // console.log(loginFormData)
      }
    }
  }
</script>

<style scoped>

  .login-card {
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

  .card-actions {
    display: flex;
    flex-direction: column;
  }

</style>