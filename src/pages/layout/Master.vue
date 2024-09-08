<template>
    <div class="w-full h-full flex">
        <Sidebar :dataOpenSideBar = "openSidebar"/>

    <div class="w-full h-full">
        <Header :dataOpenSideBar = "openSidebar" :clickHambuger="toggleSidebar"/>
        <div class="w-full h-[calc(100vh-50px)]">
            <router-view></router-view>
        </div>
    </div>

    </div>
</template>
  
  <script>
  
  import Header from './../../components/Header.vue'; 
  import Sidebar from './../../components/Sidebar.vue'; 

  export default {
    components: {
      Header,
      Sidebar
    },
    data() {
    return {
      openSidebar: true
    }
  },
  methods: {
    toggleSidebar() {
        this.openSidebar = !this.openSidebar 
    }
  }
  }
  </script>
  
  <style scoped>
  
  </style>
  