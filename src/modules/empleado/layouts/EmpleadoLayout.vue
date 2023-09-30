

<template>
    <header>
        <Navbar/>
    </header>
    <main class="flex flex-col justify-center items-center"> 
        <RouterView/>
    </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';


export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue'))
    }
}

</script>
