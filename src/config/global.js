export default {
  global: {
    componenteFormativo: 'Estrategias de salud mental',
    descripcionCurso:
      'Describir las generalidades de la salud mental, brinda estrategias de autocuidado y explica los diferentes estilos de afrontamiento, a fin de facilitar herramientas que permitan aplicar una mejora continua en la calidad de vida de las personas privadas de la libertad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mantenimiento de la salud mental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Autocuidado emocional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Proyecto de vida en los PPL',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estilos de afrontamiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Carver, C., Scheier, M. & Weintraub, J. K. (1989). Assessing Coping Strategies: A theoretically based approach. Journal of Personality and Social Psychology, 56(2), 267–283.',
      link: '',
    },
    {
      referencia:
        'Cassaretto, M., Chau, C., Oblitas. & Valdez, N. (2003). Estrés y Afrontamiento en estudiantes de psicología. Revista de Psicología de la PUCP, XXI(2), 364-392. ',
      link: '',
    },
    {
      referencia:
        "D'Angelo, O. (2000). Proyecto de vida como categoría básica de interpretación de la identidad individual y social. Revista Cubana de Psicología",
      link: 'http://pepsic.bvsalud.org/pdf/rcp/v17n3/08.pdf ',
    },
    {
      referencia:
        'Larrota, R., Vargas, S. Luzardo, M. & Rangel, K. (2014). Características del comportamiento suicida en las cárceles de Colombia. Revista Criminalidad 56(1), 83–95',
      link: 'http://www.scielo.org.co/pdf/crim/v56n1/v56n1a06.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Nuevas rutas integrales de atención en salud revolucionarán al sistema. MinSalud',
      link:
        'https://www.minsalud.gov.co/Paginas/Nuevas-rutas-integrales-de-atencion-en-salud-revolucionaran-al-sistema-.aspx ',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (1998). Health topics. WHO | World Health Organization',
      link:
        'https://www.mallamaseps.com.co/index.php/el-autocuidado-en-la-actualidad',
    },
    {
      referencia:
        'Resolución 1841 de 2013. [Ministerio de Salud y Protección Social]. Por la cual se adopta el Plan Decenal de Salud Pública 2012 – 2021. Mayo 28 de 2013',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1841-de-2013.pdf',
    },
    {
      referencia:
        'Resolución número 3280 de 2018. [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal. Agosto 2 de 2018.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf ',
    },
    {
      referencia:
        'Tobón, O. (2015). El autocuidado una habilidad para vivir. Universidad de Caldas. ',
      link:
        'https://revistasojs.ucaldas.edu.co/index.php/hacialapromociondelasalud/article/view/1870/1786 ',
    },
    {
      referencia:
        'Yela, M. C. (2008). El psicólogo en instituciones penitenciarias: Teoría y práctica. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'PPL',
      significado: 'Población Privada de la Libertad.',
    },
    {
      termino: 'RIAS',
      significado: 'Rutas Integrales de Atención en salud.',
    },
    {
      termino: 'RPMS',
      significado: 'Promoción y mantenimiento de la Salud.',
    },
    {
      termino: 'PRUEBA ASSIST',
      significado:
        'Prueba de detección de consumo de alcohol, tabaco y sustancias (ASSIST) es la primera prueba de detección para todas las sustancias psicoactivas como el alcohol, el tabaco y las drogas ilegales, y ayuda a los trabajadores de la salud a identificar el nivel de riesgo relacionado con cada sustancia consumida.',
    },
    {
      termino: 'OMS',
      significado: 'Organización mundial de la Salud.',
    },
    {
      termino: 'SM',
      significado: 'Salud Mental.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Salud y Protección Social. (2016). ABCDÉ Gestión integral en salud mental para la población privada de la libertad. MinSalud',
      tipo: 'Lineamiento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/abece-salud-mental-ppl.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2021). Prevención de la Conducta Suicida en Colombia. MinSalud.',
      tipo: 'Estrategia',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/estrategia-nacional-conducta-suicida-2021.pdf ',
    },
    {
      texto:
        'Ley 1616 de 2013. Por medio de la cual se expide la ley de salud mental y se dictan otras disposiciones. Enero 21 de 2013.',
      tipo: 'Norma',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1616-del-21-de-enero-2013.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
