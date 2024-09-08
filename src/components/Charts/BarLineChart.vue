<template>
    <div class="card flex-1">
        <div class="text-black py-2 text-xl">Bar and Line Mixed Chart</div>
        <Chart type="bar" :data="barLineChartData" :options="barLineChartOptions" class="h-[30rem]" />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    name: 'BarLineChart',
    setup() {
        const barLineChartData = ref();
        const barLineChartOptions = ref();

        const setBarLineChartData = () => {
            const documentStyle = getComputedStyle(document.documentElement);
            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--p-orange-500') || '#FF5722',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500') || '#9E9E9E',
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500') || '#00BCD4',
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };
        };

        const setBarLineChartOptions = () => {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color') || '#333';
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color') || '#666';
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color') || '#ddd';

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        };

        onMounted(() => {
            barLineChartData.value = setBarLineChartData();
            barLineChartOptions.value = setBarLineChartOptions();
        });

        return {
            barLineChartData,
            barLineChartOptions
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
