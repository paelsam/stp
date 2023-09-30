
<template>
    <TurnosTable/>
</template>


<script>
import { defineAsyncComponent } from 'vue';


export default {
    components: {
        TurnosTable: defineAsyncComponent(() => import('../components/TurnosTable.vue'))
    }
}
</script>