const usuarios = [
    {
        id: 1,
        nombre: 'Marlon',
        contraseña: '123456',
        tipoDocumento:'c.c',
        numeroDocumento:'123456789',
        areaTrabajo:'CEO',
        numeroCelular:'124578974',
        direccionCorreo:'marlon@mail.com',
        ciudad:'Medellín',
        polizas: [
            'Seguro de Vida',
            'Seguro Automóvil',
            'Seguro Dental',
            'Seguro de Hogar',
            'Seguro de Salud',
            'Seguro de Accidentes Personales'
        ]
    },
    {
        id: 2,
        nombre: 'Juan',
        contraseña: 'password789',
        tipoDocumento: 'c.e',
        numeroDocumento: '987654321',
        areaTrabajo: 'Desarrollador',
        numeroCelular: '3123456789',
        direccionCorreo: 'juan@mail.com',
        ciudad: 'Bogotá',
        polizas: [
            'Seguro de Salud',
            'Seguro de Viaje',
            'Seguro para Mascotas',
            'Seguro de Propiedad',
            'Seguro de Hogar',
            'Seguro de Vida'
        ]
    },
    {
        id: 3,
        nombre: 'Ana',
        contraseña: 'pass123',
        tipoDocumento: 'c.c',
        numeroDocumento: '1122334455',
        areaTrabajo: 'Marketing',
        numeroCelular: '3001234567',
        direccionCorreo: 'ana@mail.com',
        ciudad: 'Cali',
        polizas: [
            'Seguro de Automóvil',
            'Seguro Dental',
            'Seguro de Hogar',
            'Seguro de Accidentes Personales',
            'Seguro de Vida',
            'Seguro de Equipos Electrónicos'
        ]
    },
    {
        id: 4,
        nombre: 'Pedro',
        contraseña: 'ana2024',
        tipoDocumento: 'c.c',
        numeroDocumento: '6677889900',
        areaTrabajo: 'Recursos Humanos',
        numeroCelular: '3109876543',
        direccionCorreo: 'pedro@mail.com',
        ciudad: 'Medellín',
        polizas: [
            'Seguro de Salud',
            'Seguro de Hogar',
            'Seguro de Viaje',
            'Seguro Dental',
            'Seguro para Mascotas',
            'Seguro de Propiedad'
        ]
    },
    {
        id: 5,
        nombre: 'Lucia',
        contraseña: 'jose321',
        tipoDocumento: 'c.e',
        numeroDocumento: '4433221100',
        areaTrabajo: 'Ventas',
        numeroCelular: '3156543210',
        direccionCorreo: 'lucia@mail.com',
        ciudad: 'Barranquilla',
        polizas: [
            'Seguro de Accidentes Personales',
            'Seguro de Vida',
            'Seguro de Automóvil',
            'Seguro de Salud',
            'Seguro de Equipos Electrónicos',
            'Seguro Dental'
        ]
    },
    {
        id: 6,
        nombre: 'Sergio',
        contraseña: 'martita123',
        tipoDocumento: 'c.c',
        numeroDocumento: '5566778899',
        areaTrabajo: 'Logística',
        numeroCelular: '3142233445',
        direccionCorreo: 'sergio@mail.com',
        ciudad: 'Cartagena',
        polizas: [
            'Seguro de Viaje',
            'Seguro Dental',
            'Seguro de Automóvil',
            'Seguro para Mascotas',
            'Seguro de Propiedad',
            'Seguro de Hogar'
        ]
    },
    {
        id: 7,
        nombre: 'Isabella',
        contraseña: 'luisito456',
        tipoDocumento: 'c.e',
        numeroDocumento: '3344556677',
        areaTrabajo: 'Finanzas',
        numeroCelular: '3176655443',
        direccionCorreo: 'isabella@mail.com',
        ciudad: 'Bucaramanga',
        polizas: [
            'Seguro de Hogar',
            'Seguro de Salud',
            'Seguro de Vida',
            'Seguro para Mascotas',
            'Seguro de Viaje',
            'Seguro de Accidentes Personales'
        ]
    },
    {
        id: 8,
        nombre: 'Andres',
        contraseña: 'patty987',
        tipoDocumento: 'c.c',
        numeroDocumento: '9988776655',
        areaTrabajo: 'TI',
        numeroCelular: '3204455667',
        direccionCorreo: 'andres@mail.com',
        ciudad: 'Pereira',
        polizas: [
            'Seguro de Automóvil',
            'Seguro de Hogar',
            'Seguro de Propiedad',
            'Seguro de Vida',
            'Seguro de Equipos Electrónicos',
            'Seguro Dental'
        ]
    },
    {
        id: 9,
        nombre: 'Carmen',
        contraseña: 'mike4321',
        tipoDocumento: 'c.e',
        numeroDocumento: '2233445566',
        areaTrabajo: 'Diseño',
        numeroCelular: '3197788990',
        direccionCorreo: 'carmen@mail.com',
        ciudad: 'Manizales',
        polizas: [
            'Seguro para Mascotas',
            'Seguro de Vida',
            'Seguro de Salud',
            'Seguro de Viaje',
            'Seguro de Accidentes Personales',
            'Seguro de Automóvil'
        ]
    },
    {
        id: 10,
        nombre: 'Fernando',
        contraseña: 'andrea098',
        tipoDocumento: 'c.e',
        numeroDocumento: '7766554433',
        areaTrabajo: 'Atención al Cliente',
        numeroCelular: '3058899776',
        direccionCorreo: 'fernando@mail.com',
        ciudad: 'Cúcuta',
        polizas: [
            'Seguro Dental',
            'Seguro de Hogar',
            'Seguro de Propiedad',
            'Seguro de Vida',
            'Seguro de Automóvil',
            'Seguro de Equipos Electrónicos'
        ]
    }
];

const beneficios = {
    'Seguro de Vida': [
        'Cobertura en caso de fallecimiento',
        'Indemnización por muerte accidental',
        'Asistencia funeraria',
        'Cobertura por enfermedades graves',
        'Beneficio de hospitalización'
    ],
    'Seguro Automóvil': [
        'Cobertura de daños a terceros',
        'Cobertura de daños al vehículo',
        'Asistencia en carretera',
        'Reemplazo de vehículo en caso de robo',
        'Cobertura de gastos médicos para ocupantes'
    ],
    'Seguro Dental': [
        'Cobertura de limpieza dental',
        'Exámenes y diagnóstico dental',
        'Descuento en tratamientos de ortodoncia',
        'Cobertura de emergencias dentales',
        'Descuento en procedimientos de estética dental'
    ],
    'Seguro de Hogar': [
        'Cobertura contra incendios y explosiones',
        'Cobertura contra robos',
        'Protección de bienes personales',
        'Asistencia para reparaciones urgentes',
        'Cobertura por daños por agua'
    ],
    'Seguro de Salud': [
        'Cobertura de consultas médicas',
        'Cobertura de medicamentos recetados',
        'Acceso a red de hospitales',
        'Exámenes de diagnóstico cubiertos',
        'Asistencia de urgencias 24/7'
    ],
    'Seguro de Accidentes Personales': [
        'Cobertura en caso de invalidez',
        'Gastos médicos por accidentes',
        'Cobertura de rehabilitación',
        'Indemnización en caso de lesiones graves',
        'Asistencia de emergencia en accidentes'
    ],
    'Seguro de Viaje': [
        'Cobertura de gastos médicos en el extranjero',
        'Repatriación en caso de emergencia',
        'Protección contra pérdida de equipaje',
        'Cobertura por cancelación de viaje',
        'Asistencia en emergencias durante el viaje'
    ],
    'Seguro para Mascotas': [
        'Cobertura de consultas veterinarias',
        'Cobertura de cirugías veterinarias',
        'Cobertura de medicamentos para mascotas',
        'Descuento en alimentación de mascotas',
        'Asistencia en caso de extravío de mascota'
    ],
    'Seguro de Propiedad': [
        'Cobertura contra daños a la propiedad',
        'Protección contra incendios',
        'Cobertura en caso de robo',
        'Asistencia para reparaciones',
        'Cobertura contra desastres naturales'
    ],
    'Seguro de Equipos Electrónicos': [
        'Cobertura de reparación de equipos',
        'Cobertura por robo de equipos',
        'Cobertura de daños por accidentes',
        'Protección contra daños eléctricos',
        'Asistencia técnica remota'
    ]
};

function MostrarBeneficioPoliza(nombrePoliza,etiqueta){
    const benficioPoliza = beneficios[nombrePoliza]

    etiqueta.innerHTML = '<option value="">Selecciona un beneficio</option>';


    CrearOpciones(benficioPoliza,etiqueta)
}

function CrearOpciones (polizas,etiqueta){
    let option;
    polizas.forEach(poliza => {
        const option = document.createElement('option')
        option.textContent = poliza
        option.value = poliza
        etiqueta.append(option)
    });
}

export {usuarios,CrearOpciones,MostrarBeneficioPoliza}
