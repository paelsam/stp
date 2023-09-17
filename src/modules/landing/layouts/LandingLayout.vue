<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <Servicios/>
    <hr>
    <Nosotros/>
    <hr>
    <Contacto/>
  </main>
  <Footer/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        Nosotros: defineAsyncComponent(() => import('../components/Nosotros.vue')),
        Servicios: defineAsyncComponent(() => import('../components/Servicios.vue')),
        Contacto: defineAsyncComponent(() => import('../components/Contacto.vue'))
    }
}   
</script>