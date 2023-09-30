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
                <form class="space-y-4 md:space-y-6">
                    <div class="mt-3">
                        <label class="label label-text" for="rol">Rol:</label>
                        <select v-model="rol"  class="select w-full ">
                            <option disabled selected value="">Elige un rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Empleado">Empleado</option>
                        </select>
                    </div>
                    <div class="mt-3">
                        <label class="label label-text" for="numeroDocumento">
                            Numero de Documento:
                        </label>
                        <input v-model="documento" type="text" maxlength="12" name="numeroDocumento" id="numeroDocumento"
                            class="input border-2 sm:text-sm rounded-lg block w-full p-2.5"
                            placeholder="Ejemplo: 1111234567" required="">
                    </div>
                    <div class="mt-3">
                        <label class="label label-text" for="password">
                            Contraseña:
                        </label>
                        <input v-model="password" type="password" maxlength="12" name="password" id="password"
                            class="input border-2 sm:text-sm rounded-lg block w-full p-2.5"
                            placeholder="barberiaxd" required="">
                    </div>
                    <button type="submit"
                    @click="pushURL"
                        class="w-full bg-base-100 font-medium rounded lg text-sm px-5 py-2 5 text-center">Ingresar</button>
                </form>

            </div>
            <div v-if="error" class="mt-4 text-error">
                <p>Documento no entrado</p>
            </div>
            <div class="text-center text-sm mt-5">
                En caso de no estar registrado, contacta al administrador de la peluquería.
            </div>
        </div>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Icon: defineAsyncComponent(() => import('../../../components/Icon.vue')),
    },

    data() {
        return {
            error: false,
            documento: '',
            password: '',
            rol: ''
        }
    },

    methods: {
        pushURL() {
            if ( this.rol == 'Empleado' )
                this.$router.push({ name: 'tabla-turnos-empleado' })
            else 
                this.$router.push({ name: 'tabla-clientes' })

        }
    }
}
</script>