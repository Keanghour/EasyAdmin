<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label class="block text-gray-700">Full Name</label>
            <input v-model="full_name" type="text" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your full name" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input v-model="email" type="email" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Password</label>
            <input v-model="password" type="password" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Confirm Password</label>
            <input v-model="password_confirmation" type="password" class="w-full px-3 py-2 border rounded-md" placeholder="Confirm your password" required />
          </div>
          <div class="mb-4">
          <label class="block text-gray-700">Role (optional)</label>
          <select v-model="role" class="w-full px-3 py-2 border rounded-md">
            <option value="">Select a role (optional)</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="super-admin">Super Admin</option>
          </select>
        </div>
          <button type="submit" class="w-full bg-green-500 text-white py-2 rounded-md">Register</button>
        </form>
        
        <div class="mt-4 text-center">
          <p class="text-gray-700">Already have an account? 
            <router-link to="/auth/login" class="text-blue-500 hover:underline">Back to Login</router-link>
          </p>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        full_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '' // Optional
      };
    },
    methods: {
      handleRegister() {
        // Validate password confirmation
        if (this.password !== this.password_confirmation) {
          alert('Passwords do not match');
          return;
        }
  
        console.log('Registering:', {
          full_name: this.full_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          role: this.role || 'user' // Default role to 'user' if not provided
        });
        // Implement registration logic here, e.g., send data to your API
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  