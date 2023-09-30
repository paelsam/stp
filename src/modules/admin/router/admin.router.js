import AdminLayout from '../layouts/AdminLayout.vue'
import ClientesView from '../views/ClientesView.vue'
import EmpleadosView from '../views/EmpleadosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import AdminSettingsView from '../views/AdminSettingsView.vue'
import TurnosView from '../views/TurnosView.vue'

export default {
    name: 'admin-dashboard',
    component: AdminLayout,
    children: [
        {
            path: 'clientes',
            name: 'tabla-clientes',
            component: ClientesView
        },
        {
            path: 'empleados',
            name: 'tabla-empleados',
            component: EmpleadosView
        }, 
        {
            path: 'servicios',
            name: 'tabla-servicios',
            component: ServiciosView
        },
        {
            path: 'turnos',
            name: 'tabla-turnos',
            component: TurnosView
        },
        {
            path: 'ajustes',
            name: 'ajustes-admin',
            component: AdminSettingsView
        }
    ]
}