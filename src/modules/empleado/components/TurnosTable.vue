<template>
    <div class="overflow-x-auto w-full p-5">
        <h2 class="text-2xl font-semibold py-2 text-center">Turnos</h2>
        <table class="table">
            <!-- head -->
            <thead>
                <tr class="text-center">
                    <th>Numero Turno</th>
                    <th>Cliente</th>
                    <th>Empleado</th>
                    <th>Servicio</th>
                    <th>Estado</th>
                    <th>Fecha de Turno</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="turnosEmpleado">
                    <tr v-for="turno in turnosEmpleado" :key="turno.id_turno" class="text-center">
                        <th>{{ turno.numero_turno }}</th>
                        <td>{{ turno.Cliente.nombre }}</td>
                        <td>{{ turno.Empleado.nombre }}</td>
                        <td>Tapper Feid</td>
                        <td><b>{{ turno.estado }}</b></td>
                        <td>{{ new Date(turno.createdAt).toDateString() }}</td>
                        <td>
                            <button @click="tomarTurnoActual(turno.id_turno)"
                                class="px-2 font-extrabold fa fa-check text-success"></button>
                            <button class="px-2 font-extrabold fa fa-trash text-error"></button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import useEmpleado from '../composables/useEmpleado';
import { useStore } from 'vuex';

const store = useStore();

const { getTurnos, tomarTurno } = useEmpleado();
const turnosEmpleado = ref([]);

const tomarTurnoActual = async (idTurno) => {
    await tomarTurno(idTurno);
    const { turnos } = await getTurnos(store.state.empleado.empleado.email);
    turnosEmpleado.value = turnos
}


onMounted(async () => {
    if (store.state.empleado.empleado) {
        const { turnos } = await getTurnos(store.state.empleado.empleado.email);
        turnosEmpleado.value = turnos
    }
})



</script>