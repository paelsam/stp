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
                <form class="space-y-4 md:space-y-6">
                    <div class="mt-3">
                        <label class="label-text"  for="numeroDocumento">
                            Numero de Documento:
                        </label>
                        <input type="text" maxlength="12" name="numeroDocumento" id="numeroDocumento"
                            class="input sm:text-sm rounded-lg block w-full p-2.5"
                            placeholder="Ejemplo: 1111234567" required="">
                    </div>
                    <button type="submit"
                        class="btn w-full border-2 bg-base-100">Buscar</button>
                </form>

            </div>
            <div v-if="error" class="mt-4 text-error">
                <p>Documento no entrado</p>
            </div>
            <div class="text-center text-sm mt-5">
                En caso de no estar registrado, ve a la peluquería a registrarte.
            </div>
        </div>
    </section>
</template>


<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Icon: defineAsyncComponent(() => import('@/components/Icon.vue'))
    },
    data() {
        return {
            error: true,
        }
    }
}
</script>