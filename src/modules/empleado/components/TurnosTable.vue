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
                    <th>Fecha de Turno</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr class="text-center">
                    <th>1</th>
                    <td>Elkin Angulo</td>
                    <td>Samir Panameño</td>
                    <td>Tapper Feid</td>
                    <td>21 Jul 2024</td>
                    <td>
                        <button class="px-2 fa fa-trash text-error"></button>
                        <button class="px-2 fa fa-check text-success"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup> 



</script>