<template>
    <div class="overflow-x-auto w-full p-5">
        <h2 class="text-2xl font-semibold py-2 text-center">Servicios</h2>
        <table class="table">
            <!-- head -->
            <thead>
                <tr class="text-center">
                    <th></th>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Tiempo Estimado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr class="text-center">
                    <th>1</th>
                    <td>La sombra</td>
                    <td>https://google.com</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                    <td>2000.00</td>
                    <td>30 minutos</td>
                    <td>
                        <button class="fa fa-trash text-error"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>