<script setup>
import { RouterLink } from 'vue-router';
import Hero from './Hero.vue';
import Icon from '@/components/Icon.vue';

</script>

<template>
    <div class="drawer sticky z-10">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar bg-base-300">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div class="flex-1 px-2 mx-2">
                    <Icon />
                </div>
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal">
                        <!-- Navbar menu content here -->
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li class="space-x-5">
                            <RouterLink :to="{ name: 'auth-options' }" class="font-bold rounded-lg bg-base-200">
                                <ol class="fa fa-calendar"></ol>
                                INGRESAR AL SISTEMA
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Hero />
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200">
                <!-- Sidebar content here -->
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <RouterLink :to="{ name: 'auth-options' }" class="btn bg-base-300">
                    <ol class="fa fa-calendar"></ol>
                    INGRESAR AL SISTEMA
                </RouterLink>

            </ul>

        </div>
    </div>
</template>

