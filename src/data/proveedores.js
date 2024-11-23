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
        polizasDisponibles: [
            'Por fallecimiento',
            'Para empresas'
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
    }
]