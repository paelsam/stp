import { useStore } from "vuex"


const useEmpleado = () => {

    const store = useStore();

    const getTurnos = async( correo ) => {
        const resp = await store.dispatch('empleado/getTurnos', correo);
        return resp;
    }

    const tomarTurno = async( idTurno ) => {
        const resp = await store.dispatch('empleado/tomarTurno', idTurno )
        return resp;
    }

    return {
        getTurnos,
        tomarTurno
    }
}

export default useEmpleado;