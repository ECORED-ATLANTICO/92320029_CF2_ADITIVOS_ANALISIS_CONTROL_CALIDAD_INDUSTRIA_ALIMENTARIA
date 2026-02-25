export default {
  global: {
    Name:
      'Evaluación de la calidad e inocuidad de los alimentos mediante APPCC',
    Description:
      'Este componente formativo está orientado a adquirir y fortalecer en el aprendiz las competencias técnicas en gestión de calidad e inocuidad alimentaria, mediante la aplicación de Buenas Prácticas de Manufactura (BPM) y el sistema APPCC en contextos productivos reales, promoviendo la prevención de riesgos y la protección de la salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de calidad e inocuidad alimentaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de calidad en alimentos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Inocuidad alimentaria y riesgos asociados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación entre calidad, inocuidad y salud pública',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo y técnico del APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Evolución del Sistema APPCC',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Codex Alimentarius y estándares internacionales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Normatividad colombiana vigente',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prerrequisitos del sistema APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Buenas Prácticas de Manufactura (BPM)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Programas de saneamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Trazabilidad, control de proveedores y capacitación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aplicación práctica del Sistema APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Etapas preliminares',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicación de los siete principios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Caso práctico aplicado',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Validación, verificación y mejora continua del Sistema APPCC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Validación del Sistema APPCC',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Verificación del Sistema APPCC',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Diferenciación técnica entre validación y verificación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Gestión de cambios y actualización del plan APPCC',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Mejora continua en integración con ISO 22000:2023',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Indicadores de desempeño.',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Auditoría, evaluación del desempeño e inspección sanitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Auditoría del Sistema APPCC',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Evaluación del desempeño',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Inspección sanitaria en Colombia',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Gestión de no conformidades',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Cultura de cumplimiento y responsabilidad sanitaria',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Tendencias actuales y desafíos emergentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Innovación tecnológica y transformación digital en la gestión de la inocuidad',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Riesgos emergentes globales y fortalecimiento de la cultura de inocuidad',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
