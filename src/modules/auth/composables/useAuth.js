import { useStore } from 'vuex'

//
const useAuth = () => {

    const store = useStore();

    const loginUsuario = async( usuario ) => {
        const resp = await store.dispatch('auth/loginUsuario', usuario);
        return resp;
    }

    const findTurnoCliente = async( numeroDocumento ) => {
        const resp = await store.dispatch('auth/findTurnoCliente', numeroDocumento);
        console.log( resp );
        return resp;
    }

    const logout = () => {
        store.commit('auth/logout');
    }

    return {
        loginUsuario,
        findTurnoCliente,
        logout
    }

}

export default useAuth;