<template>
    <div class="w-full bg-gray-100">
        <div class="flex justify-between items-center h-[50px] bg-gray-200">
            <div class="p-4 cursor-pointer hover:bg-gray-50" @click="clickHambuger">
                <i class="pi pi-align-justify"></i>
            </div>

            <!-- <div class="py-2">
                <InputText v-model="value" class="h-[30px]" placeholder="Search..." />
            </div> -->

            <div class="flex space-x-3 items-center justify-center px-3">
                <div class="text-md">Admin</div>
                <Avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
                <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
            </div>
        </div>
    </div>
</template>

<script>


export default {
     props: {
    dataOpenSideBar: Boolean,
    clickHambuger: Function
    },
    data() {
        return {
            value: '', 
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Update successful' });
                    }
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$router.push('auth/login');
                    }
                }
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
}
</script>

<style scoped>
</style>
