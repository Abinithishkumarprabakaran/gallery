<template>
  <div class="signup-card">
    <v-form v-model="valid">
      <v-card
        class="mx-auto my-12"
        width=""
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
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="show1 ? 'text' : 'password'"
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
          <v-card-actions class="card-actions">
            <v-btn 
              block
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
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
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

</style>