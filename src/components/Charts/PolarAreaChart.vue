<template>
    <div class="card flex-1">
        <div class="text-black py-2 text-xl">Polar Area Chart</div>
        <Chart type="polarArea" :data="polarAreaChartData" :options="polarAreaChartOptions" class="w-full md:w-[30rem]" />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    name: 'PolarAreaChart',
    setup() {
        const polarAreaChartData = ref();
        const polarAreaChartOptions = ref();

        const setPolarAreaChartData = () => {
            const documentStyle = getComputedStyle(document.documentElement);
            return {
                datasets: [{
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--p-pink-500') || '#E91E63',
                        documentStyle.getPropertyValue('--p-gray-500') || '#9E9E9E',
                        documentStyle.getPropertyValue('--p-orange-500') || '#FF5722',
                        documentStyle.getPropertyValue('--p-purple-500') || '#9C27B0',
                        documentStyle.getPropertyValue('--p-cyan-500') || '#00BCD4'
                    ],
                    label: 'My dataset'
                }],
                labels: ['Pink', 'Gray', 'Orange', 'Purple', 'Cyan']
            };
        };

        const setPolarAreaChartOptions = () => {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color') || '#333';
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color') || '#ddd';

            return {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        };

        onMounted(() => {
            polarAreaChartData.value = setPolarAreaChartData();
            polarAreaChartOptions.value = setPolarAreaChartOptions();
        });

        return {
            polarAreaChartData,
            polarAreaChartOptions
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
