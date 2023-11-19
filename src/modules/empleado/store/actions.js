import stpApi from '@/api/stpApi'

export const getTurnos = async ({ commit }, correoEmpleado ) => {   
    try {
        const resp = await stpApi.get(`/turnos/empleado/${ correoEmpleado }`);
        commit('setTurnos', resp.data)

        return { ok: true, turnos: resp.data }
    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }
}

export const tomarTurno = async ({ commit }, idTurno ) => {
    try {
        const resp = await stpApi.put(`/turnos/${idTurno}`, { estado: "EN CURSO" });
        console.log(resp);
        return { ok: true }
    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }
}