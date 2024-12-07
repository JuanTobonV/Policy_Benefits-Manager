export const proveedores = [
    {
        id:1,
        NIT:'12345',
        nombre: 'Seguros S.A',
        razonSocial: 'Seguros S.A',
        telefono: '3234567890',
        correo:'segurossa@gmail,com',
        ciudad: 'Medellín',
        polizasActivas: [
            'Seguro de vida individual',
            'Seguro de vida colectivo'
        ],
        beneficios: [
            'Cobertura por muerte natural',
            'Cobertura por muerte accidental',
            'Cobertura por invalidez total',
            'Cobertura por enfermedades crónicas',
            'Beneficios funerarios'
        ],
    },
    {
        id:2,
        NIT:'123456',
        nombre: 'Bancolombia',
        razonSocial: 'Grupo Aval',
        telefono: '32345670',
        correo:'bancolombia@gmail,com',
        ciudad: 'Medellín',
        polizasActivas: [
            'Todo riesgo',
            'Resposabilidad civil'
        ],
        polizasDisponibles: [
            'Accidente de transito',
            'Hurto',
            'Incendio',
            'Daño a terceros'
        ],
        beneficios: [
            'Cubre daños totales',
            'Cubre daños parciales',
            'Cubre daños a vehículos'
        ],
    },
    {
        id:3,
        NIT:'1234567',
        nombre: 'davivienda',
        razonSocial: 'Grupo Aval',
        telefono: '32345670',
        correo:'davivienda@gmail,com',
        ciudad: 'Medellín',
        polizasActivas: [
            'Todo riesgo',
            'Resposabilidad civil'
        ],
        polizasDisponibles: [
            'Accidente de transito',
            'Hurto',
            'Incendio',
            'Daño a terceros'
        ],
        beneficios: [
            'Cubre daños totales',
            'Cubre daños parciales',
            'Cubre daños a vehículos'
        ],
    }
]

export const beneficios = [
        
        {
            id: 1,
          descripcionBeneficio: 'Descuento del 20% en productos seleccionados.',
          fechaInicio: "2024-01-01",
          fechaFinal: "2024-06-30",
          proveedor: { id: 1}
        },
        {
            id: 2,
          descripcionBeneficio: 'Envío gratuito en compras mayores a $50.',
          fechaInicio: "2024-02-01",
          fechaFinal: "2024-12-31",
          proveedor: { id: 2}
        },
        {
            id: 3,
          descripcionBeneficio: '2x1 en productos de belleza.',
          fechaInicio: "2024-03-01",
          fechaFinal: "2024-05-31",
          proveedor: { id: 1}
        },
        {
            id: 4,
          descripcionBeneficio: 'Descuento del 15% en compras en línea.',
          fechaInicio: "2024-04-01",
          fechaFinal: "2024-08-31",
          proveedor: { id: 2}
        },
        {
            id: 5,
          descripcionBeneficio: 'Acceso anticipado a nuevos productos.',
          fechaInicio: "2024-05-01",
          fechaFinal: "2024-12-31",
          proveedor: { id: 1}
        } 
]