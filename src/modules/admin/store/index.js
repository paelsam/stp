import state from './state'
import * as actions from '../../empleado/store/actions'
import * as getters from '../../empleado/store/getters'
import * as mutations from './mutations'

const administradorModule = {
    namespace: true,
    actions,
    getters,
    mutations,
    state
}

export default administradorModule;