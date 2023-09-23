<template>
    <header>
        <Navbar/>
    </header>
    <main class="flex flex-col justify-center items-center"> 
        <RouterView/>
    </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';


    export default {
        components: {
    Navbar
}
    }
</script>