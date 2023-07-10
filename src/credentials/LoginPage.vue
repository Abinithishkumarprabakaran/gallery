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

        console.log(loginFormData)
      }
    }
  }
</script>