
export default {
    name: 'auth', 
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
           path: '',
           name: 'auth-options',
           component: () => import('../views/OptionsView.vue')
        },
        {
            path: 'cliente',
            name: 'login-cliente',
            component: () => import('../views/ClienteView.vue')
        },
        {
            path: 'admin',
            name: 'login-emp-admin',
            component: () => import('../views/LoginView.vue')
        }
    ]
}