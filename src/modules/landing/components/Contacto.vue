<template>
    <section id="contacto" class="p-10">
        <div class="pt-10">
            <h2 class="font-semibold text-3xl text-center">Contacto</h2>
            <p class="mt-5 text-center">Tienes algún inconveniente? Escríbenos. Te responderemos inmediatamente.</p>
        </div>
        <div class="py-10 lg:py-16 px-5 mx-auto max-w-screen-sm">
            <form action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" id="email"
                        class="shadow-sm border text-sm rounded-lg focus:ring-crow block w-full p-2.5"
                        placeholder="name@ejemplo.com" required>
                </div>

                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium">Asunto</label>
                    <input type="text" id="subject"
                        class="shadow-sm border text-sm rounded-lg focus:ring-crow block w-full p-2.5"
                        placeholder="En qué podemos ayudarte?" required>
                </div>

                <div>
                    <label for="mensaje" class="block mb-2 text-sm font-medium">Mensaje</label>
                    <textarea id="mensaje" rows="6" class="block p-2 5 w-full border text-sm rounded-lg font-medium"
                        required></textarea>
                </div>
                <button type="submit" class="btn mt-3 ">Enviar mensaje</button>
            </form>
        </div>
    </section>
</template>