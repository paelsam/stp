import stpApi from "@/api/stpApi"


export const findTurnoCliente = async({ commit }, numeroDocumento) => {

    try {
        const { data: turno } = await stpApi.get(`/turnos/cliente/${numeroDocumento}`);
        return { ok: true, turno }
    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }
}

export const loginUsuario = async({ commit }, usuario) => {
    const { rol, email: correo, password } = usuario
    let idToken = ''
    try {
        if ( rol === "Administrador" ) {
            const { data } = await stpApi.post('/administradores/login', { correo, password })
            idToken = data.token
        } 
        if ( rol === "Empleado" ) {
            const { data } = await stpApi.post('/empleados/login', { correo, password })
            idToken = data.token
        }

        delete usuario.password
        commit('loginUsuario', { usuario, idToken })

        return { ok: true }
        
    } catch (error) {
        return { ok: false, message: error.response.data.message }
    }
}

export const checkAuthentication = async ({ commit }) => {
    const idToken = localStorage.getItem('idToken');

    if ( !idToken ) {
        commit('logout')
        return { ok: false, message: 'Acceso no autorizado, inicia sesión'}
    }
}