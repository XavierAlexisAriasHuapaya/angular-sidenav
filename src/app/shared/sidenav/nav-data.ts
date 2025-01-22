import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-chart-bar',
        label: 'Dashboard'
    },
    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-shopping-basket',
    //     label: 'Ventas',
    //     items: [
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar cotizaciones'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Generar cotizaciones'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar notas de ventas'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Generar notas de ventas'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar comprobantes electrónicos'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar comprobantes no enviados'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar comprobantes no enviados'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Apertura de caja'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Detalles de caja'
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'statistics',
    //     icon: 'fal fa-shopping-cart',
    //     label: 'Compras',
    //     items: [
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Generar ordenes de compra'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar ordenes de compra'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Buscar facturas de compras'
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'statistics',
    //     icon: 'fal fa-boxes',
    //     label: 'Inventario',
    //     items: [
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Movimientos'
    //         }
    //     ]
    // },
    {
        routeLink: 'maintenance',
        icon: 'fal fa-toolbox',
        label: 'Maintenance',
        items: [
            {
                routeLink: 'maintenance/country',
                label: 'Country'
            },
            {
                routeLink: 'maintenance/currency',
                label: 'Currency'
            },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Modelo'
            // },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Marca'
            // },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Categoria'
            // },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Cliente'
            // },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Empleado'
            // },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Establecimientos'
            // },
            // {
            //     routeLink: 'products/level1.2',
            //     label: 'Proveedores'
            // }
        ]
    },
    // {
    //     routeLink: 'statistics',
    //     icon: 'fal fa-solid fa-chart-pie',
    //     label: 'Reportes',
    //     items: [
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Ventas',
    //             items: [
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Clientes',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Productos',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Cotizaciones',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Notas de ventas',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Consolidado de productos',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Estado de cuenta',
    //                 }
    //             ]
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Compras',
    //             items: [
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Compras totales',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Activos fijos',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Productos',
    //                 }
    //             ]
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Comisiones',
    //             items: [
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Utilidad de ventas',
    //                 },
    //                 {
    //                     routeLink: 'products/level1.2',
    //                     label: 'Utilidad detallado',
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-money-bill-wave',
    //     label: 'Finanzas',
    //     items: [
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Cuentas por cobrar'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Cuentas por pagar'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Pagos'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Balances'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Transacciones'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Ingresos y egresos por métodos de pagos'
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-cog',
    //     label: 'Configuración',
    //     items: [
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Monedas'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Cuentas bancarias'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Caja bancos'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Tarjetas'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Empresa'
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Métodos de pagos'
    //         }
    //     ]
    // }
];