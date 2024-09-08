<template>
    <div class="w-screen bg-gray-800 sidebar"
        :class="{'side-bar-visible': dataOpenSideBar, 'side-bar-close': !dataOpenSideBar}">
        <div class="bg-gray-700 h-[50px] flex items-center justify-center">
            <div class="text-xl font-bold text-center text-white" v-show="dataOpenSideBar">Admin</div>
            <img src="https://avatars.githubusercontent.com/u/970215877?v=4" 
            class="p-1 w-8 h-8 rounded-full ring-2 ring-gray-100 dark:ring-gray-500 mb-4" alt="Avatar" v-show="!dataOpenSideBar" />
        </div>

        <div class="profile flex justify-center items-center text-center p-5">
            <div class="text-center text-white" v-show="dataOpenSideBar">
                <img src="https://avatars.githubusercontent.com/u/970215877?v=4"
                    class="p-1 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4" alt="Avatar" />
                <h5 class="text-xl font-medium leading-tight mb-2">My name</h5>
                <p class="text-gray-500">Admin</p>
            </div>
        </div>

        <div>
            <div class="py-3 rounded-sm cursor-pointer text-gray-300 hover:text-white">
                <router-link to="/" class="px-2 flex space-x-2">
                    <span class="pi pi-microsoft" v-tooltip.right="'Dashboard'"></span>
                    <span v-show="dataOpenSideBar">Dashboard</span>
                </router-link>
            </div>

            <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
                <router-link to="/user" class="px-2 flex space-x-2">
                    <span class="pi pi-user" v-tooltip.right="'User'"></span>
                    <span v-show="dataOpenSideBar">User</span>
                </router-link>
            </div>

            <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
                <router-link to="/product" class="px-2 flex space-x-2">
                    <span class="pi pi-cart-plus" v-tooltip.right="'Product'"></span>
                    <span v-show="dataOpenSideBar">Product</span>
                </router-link>
            </div>

            <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
                <router-link to="/contact" class="px-2 flex space-x-2">
                    <span class="pi pi-whatsapp" v-tooltip.right="'Contact'"></span>
                    <span v-show="dataOpenSideBar">Contact</span>
                </router-link>
            </div>

            <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
                <router-link to="/customer" class="px-2 flex space-x-2">
                    <span class="pi pi-shield" v-tooltip.right="'Customer'"></span>
                    <span v-show="dataOpenSideBar">Customer</span>
                </router-link>
            </div>

            <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
                <router-link to="/activation" class="px-2 flex space-x-2">
                    <span class="pi pi-check-circle" v-tooltip.right="'Activation'"></span>
                    <span v-show="dataOpenSideBar">Activation</span>
                </router-link>
            </div>

            <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
                <div class="px-2 flex space-x-2">
                    <span class="pi pi-slack" v-tooltip.right="'Setting'"></span>
                    <span v-show="dataOpenSideBar">Setting</span>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
    export default {
        props: {
            dataOpenSideBar: Boolean
        }
    }
</script>

<style scoped>
    .p-tooltip-text {
        font-size: 10px !important;
    }

    #side-bar {
        overflow: hidden;
        transition: width 300ms;
    }

    .side-bar-visible {
        width: 250px !important;
    }

    .side-bar-close {
        width: 50px !important;
    }
</style>
