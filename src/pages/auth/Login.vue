<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input v-model="email" type="email" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Password</label>
            <input v-model="password" type="password" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" />
          </div>
          <div class="mb-6 flex items-center justify-between">
            <label class="flex items-center text-gray-700">
              <input type="checkbox" v-model="rememberMe" class="mr-2">
              Remember Me
            </label>
            <router-link to="/auth/forgot-password" class="text-sm text-blue-500 hover:underline">Forgot Password?</router-link>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md">Login</button>
        </form>
  
        <!-- <div class="mt-4 text-center">
          <p class="text-gray-700">Don't have an account? 
            <router-link to="/auth/register" class="text-blue-500 hover:underline">Register</router-link>
          </p>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
    handleLogin() {
      if (!this.email && !this.password) {
        console.log('Remember Me:', this.rememberMe);
        this.$router.push('/');
      } else {
        console.log('Logging in:', this.email, this.password);
        console.log('Remember Me:', this.rememberMe);
        this.$router.push('/');
        
      }
    }
  }
  }
  </script>
  