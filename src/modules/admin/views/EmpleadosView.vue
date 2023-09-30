<template> 
    <EmpleadosForm/>
    <EmpleadosTable/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        EmpleadosForm: defineAsyncComponent(() => import('../components/EmpleadosForm.vue')),
        EmpleadosTable: defineAsyncComponent(() => import('../components/EmpleadosTable.vue'))
    }
}

</script>