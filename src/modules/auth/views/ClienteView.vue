<template>
    <section class="h-screen flex justify-center items-center">
        <div class="flex flex-col items-center w-3/4 justify-center px-6 py-8 mx-auto max-w-screen-sm
        rounded-lg border-2 border-base-300 bg-base-200">
            <!-- Icono -->
            <Icon />
            <!-- Fin Icono -->
            <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 mt-3">
                <h1 class=" text-lg font-bold text-center leading-tight tracking-tight">
                    Consultar cita cliente
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
                    <div class="mt-3">
                        <label class="label-text" for="numeroDocumento">
                            Numero de Documento:
                        </label>
                        <input type="text" v-model="numeroDocumento" maxlength="12" name="numeroDocumento"
                            id="numeroDocumento" class="input sm:text-sm rounded-lg block w-full p-2.5"
                            placeholder="Ejemplo: 1111234567" required>
                    </div>
                    <button type="submit" class="btn w-full border-2 bg-base-100">Buscar</button>
                </form>
            </div>
        </div>
    </section>
</template>


<script setup>

import { reactive, ref } from 'vue';
import Icon from '@/components/Icon.vue'
import useAuth from '../composables/useAuth';
import Swal from 'sweetalert2'

const { findTurnoCliente } = useAuth();

const numeroDocumento = ref('');
const turnoCliente = ref({});

const onSubmit = async () => {
    const { ok, message, turno } = await findTurnoCliente(numeroDocumento.value);

    if (!ok) {
        Swal.fire('Error', message, 'error');
    } else {
        turnoCliente.value = turno;
        Swal.fire({
            title: `Tienes el turno ${turnoCliente.value.numero_turno}`,
            html: `
                Tu barbero es: <b>${turnoCliente.value.Empleado.nombre}.</b><br>
                Estado del turno: <b>${turnoCliente.value.estado}.</b>
            `,
            icon: "success"
        });
    }

}

</script>