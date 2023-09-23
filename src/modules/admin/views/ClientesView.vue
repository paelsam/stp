<template>
    <ClientesForm />
    <ClientesTable />
</template>

<script>
import ClientesForm from '../components/ClientesForm.vue';
import ClientesTable from '../components/ClientesTable.vue';

export default {
    components: {
        ClientesForm,
        ClientesTable
    }
}
</script>