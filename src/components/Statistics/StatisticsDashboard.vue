<template>
    <div class="card-container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <i :class="card.icon"></i>
        <div class="card-content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.value }}</p>
        </div>
      </div>
    </div>
</template>
  
<script setup>
const cards = [
    { title: 'Sales', value: '$10,000', icon: 'pi pi-dollar' },
    { title: 'Orders', value: '150', icon: 'pi pi-shopping-cart' },
    { title: 'Reviews', value: '85', icon: 'pi pi-star' },
    { title: 'Stock', value: '320', icon: 'pi pi-box' },
    { title: 'Total', value: '$50,000', icon: 'pi pi-chart-line' }
];
</script>
  
<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
  
.card {
    flex: 1 1 calc(20% - 1rem); /* 5 cards in 1 row with some margin */
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
}
  
.card i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}
  
.card-content h3 {
    font-size: 1.25rem;
    margin: 0;
}
  
.card-content p {
    font-size: 1rem;
    color: #666;
}
</style>
