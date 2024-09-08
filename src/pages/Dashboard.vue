<template>

    <div class="w-full h-[calc(100vh-50px)]">
        <!-- Card -->
        <div class="col-lg-9 mb-4">
            <div class="card h-full">
                <h5 class="text-lg font-bold">Dashboard</h5>
            </div>

            <StatisticsDashboard />

            <div class="flex flex-col md:flex-row gap-4 justify-center mt-6">
                <!-- Bar and Line Mixed Chart -->
               <BarLineChart />

                <!-- Polar Area Chart -->
                <PolarAreaChart />
            </div>
        </div>
    </div>

</template>

<script setup>

    import StatisticsDashboard from '../components/Statistics/StatisticsDashboard.vue';

    import BarLineChart from '../components/Charts/BarLineChart.vue';
    import PolarAreaChart from '../components/Charts/PolarAreaChart.vue';
    
</script>

<style scoped>
    .card {
        background-color: #fff;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
</style>