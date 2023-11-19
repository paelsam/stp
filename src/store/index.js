import { createStore } from "vuex";

import auth from '../modules/auth/store/index'
import empleado from '../modules/empleado/store/index'

const store = createStore({
    modules: {
        auth,
        empleado
    }
})

export default store;