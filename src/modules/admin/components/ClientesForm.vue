<template>
    <section class="container p-5">
        <h2 class="text-center text-2xl font-semibold ">Agregar Cliente:</h2>
        <form class="  grid grid-cols-2 gap-2  ">
            <div>
                <label class="label">
                    <span class="text-base label-text">Nombre</span>
                </label>
                <input type="text" placeholder="Pepito" class="w-full input input-bordered" required/>
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Apellido</span>
                </label>
                <input type="text" placeholder="Pérez" class="w-full input input-bordered" required/>
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Número de documento</span>
                </label>
                <input type="text" placeholder="Ejem: 123456789" class="w-full input input-bordered" required/>
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Celular</span>
                </label>
                <input type="text" placeholder="3123456789" class="w-full input input-bordered" required/>
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Correo Electrónico</span>
                </label>
                <input type="email" placeholder="example123@email.com" class="w-full input input-bordered" required/>
            </div>
            <div class="self-center w-full">
                <button class="btn btn-block">Agregar</button>
            </div>
        </form>
    </section>
</template>