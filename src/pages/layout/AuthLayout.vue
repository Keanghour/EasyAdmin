<template>
    <div class="auth-layout">
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthLayout'
  }
  </script>
  
  <style scoped>
  .auth-layout {
    min-height: 100vh;
    background-color: #f3f4f6;
  }
  </style>
  