<template>
    <section class="flex flex-col gap-6 justify-center items-center h-screen p-10">
        <Icon />
        <section class="pb-5 text-center">
            <h2 class="text-3xl">¿Qué tipo de usuario eres?</h2>
        </section>
        <RouterLink :to="{ name: 'login-cliente' }" class="flex flex-col items-center gap-2 bg-base-200 justify-center rounded-xl border-2 p-4 min-w-[25%] max-w-xl">
            <div>
                <i class="text-4xl fa-solid fa-user"></i>
            </div>
            <div class="text-center">
                <h4 class="font-bold">Cliente</h4>
                <p class="text-sm">Puedes asignar una cita</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'login-emp-admin' }"
            class="flex flex-col flex-wrap items-center gap-2 bg-base-200 justify-center rounded-xl border-2  p-4 max-w-xs ">
            <div>
                <i class="text-4xl fa-solid fa-scissors"></i>
            </div>
            <div class="text-center">
                <h4 class="font-bold">Empleados y Administradores</h4>
                <p class="text-sm">Puedes revisar tus turnos designados y gestionar los usuarios</p>
            </div>
        </RouterLink>
    </section>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default {
    components: {
    Icon: defineAsyncComponent(() => import('@/components/Icon.vue')),
    RouterLink
}
}
</script>