<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Forgot Password</h2>
        <form @submit.prevent="handleForgotPassword">
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input v-model="email" type="email" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" required />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md">Submit</button>
        </form>
  
        <div class="mt-4 text-center">
          <router-link to="/auth/login" class="text-blue-500 hover:underline">Back to Login</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      handleForgotPassword() {
        console.log('Forgot password for:', this.email);
        // Implement forgot password logic here
      }
    }
  }
  </script>
  