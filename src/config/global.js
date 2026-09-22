export default {
  global: {
    Name: 'Pruebas y mejora del <i>software</i>',
    Description:
      'Este componente aborda la revisión de la calidad del <i>software</i> mediante la valoración del producto, la elaboración y aplicación del plan de pruebas, el análisis de los resultados y la definición de acciones de ajuste, con el propósito de mejorar el modelo de calidad implementado, de acuerdo con las políticas, los requisitos y las necesidades establecidas por el cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo: 'Revisión de la calidad del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de revisión de calidad del <i>software</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Políticas del cliente aplicadas a la calidad del <i>software</i>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Criterios para valorar el producto <i>software</i>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Evidencias de revisión de calidad del <i>software</i>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Factores de calidad en la valoración del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Factores de operación del producto <i>software</i>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Factores de revisión del producto <i>software</i>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Factores de transición del producto <i>software</i>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Relación entre factores de calidad y requisitos del cliente',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de pruebas del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y propósito del plan de pruebas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos que conforman el plan de pruebas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseño de casos de prueba según requisitos del cliente',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Trazabilidad entre requisitos, pruebas y resultados',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de pruebas del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pruebas funcionales del <i>software</i>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pruebas unitarias del <i>software</i>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pruebas de aceptación del cliente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Registro de hallazgos e incidencias de prueba',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de resultados de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Interpretación de resultados del plan de pruebas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Clasificación de defectos y no conformidades',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Priorización de correcciones según impacto en el cliente',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Informe de resultados de pruebas de <i>software</i>',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ajuste y mejora del modelo de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto de mejora de procesos de <i>software</i>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Acciones de ajuste según resultados de prueba',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Seguimiento a la mejora del modelo de calidad',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Caso práctico de revisión, pruebas y mejora',
            hash: 't_6_4',
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
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'medida destinada a eliminar la causa de un defecto o una no conformidad detectada y evitar que vuelva a presentarse.',
    },
    {
      termino: 'Caso de prueba',
      significado:
        'conjunto documentado de precondiciones, datos, pasos y resultados esperados utilizado para comprobar un requisito o comportamiento del <i>software</i>.',
    },
    {
      termino: 'Criterio de aceptación',
      significado:
        'condición que debe cumplir el producto para que un requisito, una funcionalidad o una entrega pueda ser aceptada por el cliente.',
    },
    {
      termino: 'Defecto',
      significado:
        'imperfección o error presente en un componente del <i>software</i> que puede ocasionar un comportamiento diferente del esperado.',
    },
    {
      termino: 'Evidencia de prueba',
      significado:
        'registro que permite comprobar la ejecución y los resultados de una prueba, como capturas de pantalla, informes, registros del sistema o formularios diligenciados.',
    },
    {
      termino: 'Factor de calidad',
      significado:
        'característica general empleada para valorar el <i>software</i>, como confiabilidad, eficiencia, integridad, mantenibilidad o facilidad de uso.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'situación identificada durante una revisión o prueba que requiere análisis para determinar su causa, impacto y tratamiento.',
    },
    {
      termino: 'Incidencia',
      significado:
        'evento registrado durante la utilización o prueba del sistema que se aparta del comportamiento esperado y requiere seguimiento.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso sistemático y permanente mediante el cual se realizan ajustes para aumentar la calidad del producto o de los procesos utilizados para desarrollarlo.',
    },
    {
      termino: 'No conformidad',
      significado:
        'incumplimiento de un requisito, una política, un criterio de aceptación o una condición de calidad establecida.',
    },
    {
      termino: 'Plan de pruebas',
      significado:
        'documento que establece los objetivos, el alcance, los recursos, los responsables, el cronograma, los ambientes y los criterios necesarios para ejecutar las pruebas.',
    },
    {
      termino: 'Prueba de aceptación',
      significado:
        'comprobación realizada con la participación del cliente o de los usuarios para determinar si el producto satisface las necesidades y los criterios de aceptación.',
    },
    {
      termino: 'Prueba funcional',
      significado:
        'evaluación destinada a comprobar si las funciones del sistema se ejecutan de acuerdo con los requisitos establecidos.',
    },
    {
      termino: 'Prueba unitaria',
      significado:
        'Evaluación de una función, clase, método, módulo o componente individual del <i>software</i>, generalmente de manera aislada.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad para relacionar los requisitos con los casos de prueba, los resultados obtenidos, los defectos identificados y las acciones realizadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aiteco Consultores. (2024, 22 de octubre). Mejora de la calidad: Qué es y cómo desplegarla. ',
      link: 'https://www.aiteco.com/mejora-de-la-calidad-que-es-y-como-desplegarla/',
    },
    {
      referencia:
        'Harris, R. (s. f.). What is test case? Important, types and examples. The Knowledge Academy. ',
      link: 'https://www.theknowledgeacademy.com/blog/what-is-test-case/',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). ISO/IEC/IEEE 29119-1:2022. Software and systems engineering—Software testing—Part 1: General concepts. ',
      link: 'https://www.iso.org/standard/81291.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2023). ISO/IEC 25010:2023. Systems and software engineering—Systems and software Quality Requirements and Evaluation (SQuaRE)—Product quality model. ',
      link: 'https://www.iso.org/standard/78176.html',
    },
    {
      referencia:
        'International Software Testing Qualifications Board. (2024). Certified tester foundation level syllabus (versión 4.0.1). ',
      link: 'https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/',
    },
    {
      referencia:
        'Rice, R. W. (2024, 26 de febrero). What is a test plan? The complete guide for writing a software test plan. PractiTest. ',
      link: 'https://www.practitest.com/resource-center/article/write-a-test-plan/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
