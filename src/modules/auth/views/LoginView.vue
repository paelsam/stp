<template>
    <section class="h-screen flex justify-center items-center">
        <div class="flex flex-col items-center w-3/4 justify-center px-6 py-8 mx-auto max-w-screen-sm
        rounded-lg bg-base-200 border-2 border-base-300">
            <!-- Icono -->
            <Icon />
            <!-- Fin Icono -->
            <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 mt-3">
                <h1 class="mt-2  text-2xl font-bold text-center leading-tight tracking-tight text-crow">
                    Inicio de sesión
                </h1>
                <form @submit.prevent="onSubmit" class="space-y-4 md:space-y-6">
                    <div class="mt-3">
                        <label class="label label-text" for="rol">Rol:</label>
                        <select v-model="useForm.rol" class="select w-full" required>
                            <option disabled selected value="">Elige un rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Empleado">Empleado</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <label class="label label-text" for="correo">
                            Correo Electrónico:
                        </label>
                        <input v-model="useForm.email" type="email" name="correo" id="correo"
                            class="input border-2 sm:text-sm rounded-lg block w-full p-2.5"
                            placeholder="Ejemplo: 1111234567" required="">
                    </div>
                    <div class="mt-3">
                        <label class="label label-text" for="password">
                            Contraseña:
                        </label>
                        <input v-model="useForm.password" type="password" maxlength="12" name="password" id="password"
                            class="input border-2 sm:text-sm rounded-lg block w-full p-2.5" placeholder="barberiaxd"
                            required="">
                    </div>
                    <button type="submit"
                        class="w-full bg-base-100 font-medium rounded lg text-sm px-5 py-2 5 text-center">Ingresar</button>
                </form>
            </div>
            <div class="text-center text-sm mt-5">
                En caso de no estar registrado, contacta al administrador.
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import Icon from '@/components/Icon.vue';
import useAuth from '../composables/useAuth'


const router = useRouter();
const { loginUsuario } = useAuth();

const useForm = ref({
    rol: '',
    email: '',
    password: ''
})

const onSubmit = async () => {
    const { ok, message } = await loginUsuario(useForm.value);

    if ( !ok ) Swal.fire('Error', message, 'error');
    else {
        if ( useForm.value.rol === 'Administrador' ) 
            router.push({ name: 'admin-dashboard'})
        else if ( useForm.value.rol === 'Empleado' )
            router.push({ name: 'tabla-turnos-empleado' })
    }
}

</script>