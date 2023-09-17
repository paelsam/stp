<script setup>
import Card from './Card.vue';


</script>

<template>
    <section  class="py-10 flex items-center flex-col justify-center container mx-auto">
        <div id="servicios" class="pt-10">
            <h2 class="font-semibold text-3xl text-center">Servicios</h2>
        </div>
    
        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:gris-cols-3 pt-10 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
</template>