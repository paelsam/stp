<template>
    <ServiciosTable />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        ServiciosTable: defineAsyncComponent(() => import('../components/ServiciosTable.vue'))
    }
}
</script>