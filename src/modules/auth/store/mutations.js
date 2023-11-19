

export const loginUsuario = ( state, { usuario, idToken }) => {

    if ( idToken ) {
        localStorage.setItem('idToken', idToken)
        state.idToken = idToken
    }

    state.usuario = usuario
    state.status = 'authenticated'
}

export const logout = (state) => {
    state.usuario = null
    state.idToken = null
    state.status = 'not-authenticated'

    localStorage.removeItem('idToken')
}