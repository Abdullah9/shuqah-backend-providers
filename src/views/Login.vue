<template>
    <v-app>
    <v-main class="main">
      <v-sheet color="secondary" height="300" class="rounded-lg " :class="$vuetify.breakpoint.mobile?'': 'ma-3'"></v-sheet>
      <v-card max-width="400" class="mx-auto rounded-lg" style="margin-top: -150px">
        <v-card-text>
          <v-sheet color="dark" height="122" class="rounded-lg mt-n12 d-flex align-center justify-center">
            <div class="text-center white--text">
              <h2 class="mt-5">Sign In</h2>
              <p class="my-5">Enter your phone number and password to Sign In</p>
            </div>
          </v-sheet>
          <v-form class="mx-2 my-5" @submit.prevent="submit">
            <label class="">Email or Phone Number</label>
            <v-text-field 
              placeholder="john@mail.com" 
              class="mt-n2 mb-2 body-2" 
              v-model="form.username"
              :error-messages="errors.username"
            />
            <label class="">Password</label>
            <v-text-field placeholder="**************" 
              type="password" 
              class="mt-n2 body-2" 
              v-model="form.password"  
              :error-messages="errors.password"
            />
            <div class="d-flex mb-5">
              <v-switch color="dark" dense class="mt-n1"/>
              <p>Remember me</p>
            </div> 
            <v-btn block color="dark" dark class="rounded-lg" large type="submit">Sign in</v-btn> 
            <p class="text-center my-5">Don't have an account? 
              <b class="black--text">Sign Up</b></p>
          </v-form>
        </v-card-text>
      </v-card>

      <v-app-bar absolute bottom color="light" class="elevation-0 mx-5 body-2 secondary-1--text">
        <div class="">© 2022</div>
        <v-spacer/>
        <div class="">About us</div>
        <div class=" mx-5">Blog</div>
        <div class="">License</div>
      </v-app-bar>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { useAuthStore } from '@/store/auth'
const authStore = useAuthStore();

export default Vue.extend({
  data: () => ({
    form: {
      username: '',
      password: ''
    },
    errors: []
  }), 
  methods: {
    submit() {
      authStore.login(this.form)
      .then((res) => { 
        console.log(res)
       },(errors) => {
        this.errors = errors
      })
    }
  }
  
})
</script>