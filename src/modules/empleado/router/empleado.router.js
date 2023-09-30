import EmpleadoLayout from '../layouts/EmpleadoLayout.vue'


export default {
    name: 'empleado-dashboard',
    component: EmpleadoLayout,
    children: [
        {
            path: 'turnos',
            name: 'tabla-turnos-empleado',
            component: () => import('../views/TurnosView.vue')
        },
        {
            path: 'ajustes',
            name: 'ajustes-empleado',
            component: () => import('../views/EmpleadoSettingsView.vue')
        }
    ]
}