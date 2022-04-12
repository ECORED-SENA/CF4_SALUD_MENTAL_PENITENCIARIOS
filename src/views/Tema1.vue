<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mantenimiento de la salud mental

    .row
      .col-md-6
        p(data-aos="fade-left") Según la Organización Mundial de la Salud (1998)#[strong(style="color:#3BA3F8;") , el autocuidado comprende todo lo que hacemos por nosotros mismos para establecer y mantener la salud, prevenir y manejar la enfermedad.]

        p.mt-4(data-aos="fade-left") Es un término amplio que abarca las siguientes acciones:

        ul.lista-ul
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            | Higiene (general y personal).
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            | Nutrición (tipo y calidad de alimento).
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            | Estilo de vida (actividades deportivas, tiempo libre, etc.).
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            | Factores ambientales (condiciones de vida, costumbres sociales, etc.).
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            | Factores socioeconómicos (nivel de ingreso, creencias culturales, etc.).
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            | Automedicación.
      .col-md-6
        img(src="@/assets/curso/tema1/1.svg" data-aos="zoom-in-up")

    .row.mt-5
      .col-md-1.d-md-block.d-none.d-lg-block.d-xl-block.cont_waves
      .col-md-11
        p(data-aos="fade-up") De acuerdo con lo planteado por el ministerio de salud y protección social (2019) en las rutas integrales de atención en salud (RIAS) se definen las condiciones necesarias para asegurar la integralidad en la atención por parte de los agentes del sistema de salud (territorio, asegurador, prestador) y de otros sectores. Ordenan la gestión intersectorial y sectorial como plataforma para la respuesta que da lugar a las atenciones/intervenciones en salud, dirigidas a todas las personas, familias y comunidades, a partir de: 

    .row.mt-5
      .col-md-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/3.png', alt='')
          h3.text-center I
          p.text-center Acciones intersectoriales y sectoriales orientadas a promover el bienestar y el desarrollo de las personas, familias y comunidades

      .col-md-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/4.png', alt='')
          h3.text-center II
          p.text-center Atenciones individuales y colectivas para la promoción de la salud, prevención de la enfermedad, diagnóstico, tratamiento, rehabilitación y paliación 

      .col-md-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/5.png', alt='')
          h3.text-center III
          p.text-center Acciones de cuidado que se esperan del individuo para el mantenimiento o recuperación de su salud.

    br
    .cont_full.mt-5.pb-5(style="position:relative;")
      .row
        .col-md-5
          img(src="@/assets/curso/tema1/7.png" data-aos="zoom-in")
        .col-md-7
          h3.mt-3(data-aos="fade-up") Las RIAS están constituidas por tres tramos:

          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="1. Ruta integral de atención para la promoción y mantenimiento de la salud en el curso de vida de carácter individual y colectivo")
              .col-12.ps-5
                p.ps-3  Dirigidas a promover la salud, prevenir el riesgo, prevenir la enfermedad y generar cultura del cuidado de la salud en las personas, familias y comunidades; incluye como atenciones obligatorias para toda la población colombiana: la valoración integral del estado de salud, la detección temprana de alteraciones, la protección específica y la educación para la salud, que contiene el cuidado a los cuidadores.
            .row(titulo="2. Rutas integrales de atención para grupos de riesgo, intervenciones individuales y colectivas")
              .col-12.ps-5
                p.ps-3  Dirigidas a la identificación oportuna de factores de riesgo y su intervención, ya sea para evitar la aparición de una condición específica en salud o para realizar un diagnóstico y una derivación oportuna para el tratamiento.
            .row(titulo="3. Rutas integrales de atención específica para eventos, intervenciones individuales y colectivas")
              .col-12.ps-5
                p.ps-3  Dirigidas principalmente al diagnóstico oportuno, tratamiento, rehabilitación y paliación de los eventos o condiciones específicas de salud priorizadas.

      .row.mt-5
        .col-md-1.d-md-block.d-none.d-lg-block.d-xl-block.cont_waves
        .col-md-11
          p(data-aos="fade-up") Mediante la Resolución 3280 de 2018 (Ministerio de Salud y Protección Social, 2018) se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación; se conciben los entornos como escenarios de transformación social, para el caso de las personas privadas de la libertad, se ubican en el entorno institucional y entre otras actividades se plantea el desarrollo de tamizajes que incluyen:

      .row.mt-5
        .col-md-3.col-lg-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false")
            .indicador--hover(v-if="indicadorTarjetaFlip2")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/8.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5(style="display:flex;flex-wrap:wrap;align-content:center;")
                p.text-white.text-center.mt-2.mb-2 Pruebas SRQ (#[em Self Reporting Questionnaire]) para la detección temprana de trastornos mentales en adultos.
        .col-md-3.col-lg-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false")
            .indicador--hover(v-if="indicadorTarjetaFlip2")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/9.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5(style="display:flex;flex-wrap:wrap;align-content:center;")
                p.text-white.text-center.mt-2.mb-2 Prueba ASSIST (Consumo de alcohol, tabaco y otras drogas) a la población con sospecha de patrones de consumo problemáticos.
        .col-md-3.col-lg-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false")
            .indicador--hover(v-if="indicadorTarjetaFlip2")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/10.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5(style="display:flex;flex-wrap:wrap;align-content:center;")
                p.text-white.text-center.mt-2.mb-2 Prueba AUDIT (Trastornos debido al Consumo de Alcohol) a la población con sospecha de patrones de consumo problemático de alcohol.
        .col-md-3.col-lg-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false")
            .indicador--hover(v-if="indicadorTarjetaFlip2")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/11.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5(style="display:flex;flex-wrap:wrap;align-content:center;")
                p.text-white.text-center.mt-2.mb-2 Aplicación de otras pruebas o instrumentos para detectar tempranamente eventos de interés en salud pública, que generen alta externalidad en la población, de acuerdo con las orientaciones que para el efecto establezca el Ministerio.

    .row.mt-5
      .col-md-7.mb-2
        p(data-aos="fade-left") En este último apartado se debe considerar el tamizaje de la conducta suicida, como se establece en la estrategia nacional de prevención de la conducta suicida en colombia (ministerio de salud y protección social, 2021)
        p.mt-4(data-aos="fade-left") Así mismo, la resolución 1841 de 2013 (Minsalud) en la dimensión vida saludable y condiciones no transmisibles específicamente en el componente modos, condiciones y estilos de vida saludables establece como estrategia para el autocuidado la:
        .p-4(style="background-color:#EAEEF1;")
          p.h5(data-aos="fade-up" style="color:#3BA3F8;line-height:22px;text-align:justify;") “Información, comunicación y educación que incentive la adopción de estilos de vida saludable, el reconocimiento de riesgos y que aporte elementos que permitan responder de manera asertiva a los retos de la vida diaria; que promueva las capacidades individuales y colectivas, y la movilización de los diferentes grupos humanos que favorecen la cultura de la salud, el autocuidado y el desarrollo de habilidades en los diferentes ámbitos de la vida cotidiana”.

      .col-md-5
        img(src="@/assets/curso/tema1/12.png" data-aos="zoom-in-up")

    .row.mt-5(style="position:relative;")
      .col-md-5.order-2.order-sm-1
        img(src="@/assets/curso/tema1/13.png" data-aos="zoom-in")
      .col-md-7.order-1.order-sm-2
        p(data-aos="fade-right") Por lo cual se busca capacitar al talento humano, en el desarrollo de actividades para potencializar las estrategias de afrontamiento en el entorno penitenciario, teniendo en cuenta la salud mental como componente integral y esencial de la salud, de acuerdo con lo indicado por la (OMS) #[strong(style="color:#3BA3F8;font-style:italic;") «La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades.»] Se considera como algo más que la ausencia de trastornos o discapacidades mentales es un estado de bienestar en el que la persona optimiza sus capacidades de pensar, manifestar sentimientos, interactuar con los demás, ganar el sustento y disfrutar de la vida, sobre esta base se puede considerar que la promoción, protección y el restablecimiento de la salud mental son preocupaciones vitales de las personas, comunidades y sociedades de todo el mundo.
        p.mt-3(data-aos="fade-right") La prisionalización puede generar cambios en el individuo de índole social, psicológico y biológico situación que en muchos individuos infiere en su salud mental, conllevando a un deterioro en sus relaciones interpersonales y un estado emocional con afectación en sus actividades diarias, así como la construcción de modos de vida poco saludables, que generan riesgos de violencia y terminan en una mala salud física y mental.

        .mt-3.p-4.cont_1(data-aos="fade-right" style="position:relative")
          p(style="position:relative;left:-7%;") Por ello, la promoción de la salud mental juega un papel fundamental en esta población y depende en gran medida de las estrategias implementadas por el Talento Humano, que brinde elementos con el objetivo de prevenir trastornos mentales y reducir la incidencia y la mortalidad en Persona Privada de la Libertad (PPL) por salud mental, mejorar la atención y promover la recuperación, enmarcado en los derechos humanos y con una gobernanza en salud mental.


    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1  Autocuidado emocional

    p(data-aos="fade-up") El autocuidado emocional combina todo aquello que se hace por uno mismo, para mantener o mejorar la salud emocional y está compuesto por: identificar los pensamientos positivos o negativos, conocer los límites y capacidades, comunicar de forma asertiva, cuidar de la apariencia, practicar hábitos de autocuidado, convivir coherentemente con uno mismo y con los demás. Veamos un poco al respecto:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h5.mt-5.text-center(data-aos="fade-up") Algunas de las consecuencias negativas de la falta de autocuidado emocional en la PPL serían:

    .cont_elements_1(style="position:relative;")
      .row.mt-4.p-5(style="background-color:#133D60;position:relative")
        .col-md-4
          img(src="@/assets/curso/tema1/14.png" data-aos="zoom-in-up" style="max-width:300px;")
        .col-md-8(style="place-self:center;")
          .titulo-segundo
            h3.text-white(data-aos="zoom-in") Autocuidado personal
          p.text-white(data-aos="fade-up") En la siguiente infografía se presentan algunas de las consecuencias negativas de la falta de autocuidado emocional en la población privada de la libertad:

          a.boton.mt-4.indicador__container(
            :href="obtenerLink('/downloads/Autocuidado_emocional.pdf')"
            target="_blank"
            type="application/pdf"
            @mouseover="mostrarIndicador = false"
          )
            span Descargar
            i.fas.fa-file-download
            .indicador--click(v-if="mostrarIndicador")

      .row.mt-5.pb-4(style="position:relative")
        .col-md-6
          img(src="@/assets/curso/tema1/15.png" data-aos="zoom-in")
        .col-md-6
          .mt-3
            span.h3.text-white.p-2(style="background-color:#3BA3F8;line-height:30px;" data-aos="fade-up") ¿Cómo practicar el autocuidado emocional?

          ul.lista-ul.mt-5
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Cuidando de uno mismo y de su salud emocional.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Aprende a conocerse e identificar las necesidades emocionales.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Es importante establecer límites.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Tener presente las responsabilidades y evitar cargar culpas ajenas.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Apropiarse de las emociones y reforzar la autoestima.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | No renunciar a uno, dedicarse tiempo.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Para practicar el autocuidado emocional es necesario conocerse.

          p.mt-4(data-aos="fade-up") Dentro de las actividades para tener un adecuado autocuidado emocional se encuentran las siguientes: 

          ul.lista-ul.mt-4
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Aceptar y expresar las emociones. 
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Fortalecer las relaciones interpersonales.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Enfocarse en las soluciones.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Aceptarse como es.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Practicar el respeto.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Realizar hábitos saludables.
            li(data-aos="fade-up") 
              i.fas.fa-check-circle
              | Definir metas y un proyecto de vida aun en medio de la prisión.

    .row.mt-5
      .col-md-6
        span.h3.text-white.p-2(style="background-color:#3BA3F8;" data-aos="fade-up") Físico
        p.mt-4(data-aos="fade-up") El autocuidado físico se trata de atender al cuerpo, de encargarse de la salud mediante la actividad física como algo vital para la PPL, permitiendo que se libere el estrés que le genera la prisionalización, donde las alteraciones de la imagen personal generan un déficit en la percepción del propio cuerpo, ocasionada por una carencia total de intimidad que tiene graves consecuencias para la propia identidad; desencadenando una pérdida de motivación para asearse, incluso pudiendo llegar a generarse una mala imagen de sí #[strong(style="color:#3BA3F8;") mismo.]
        .bloque-texto-c.color-secundario.p-4.mt-4(style="background-color: #DFEAF1;" data-aos="zoom-in")
          i.fas.fa-quote-right
          p.mb-2 Para que haya autocuidado se requiere cierto grado de desarrollo personal, mediado por un permanente fortalecimiento del autoconcepto, el autocontrol, la autoestima, la autoaceptación y la resiliencia” (p.5).
          strong(style="float: right;left: -8%;position: relative;") Según Tobón (2015):
      .col-md-6
        img.mt-3(src="@/assets/curso/tema1/16.png" data-aos="zoom-in-up")

    .row.mt-5
      .col-md-4.order-2.order-sm-1
        img(src="@/assets/curso/tema1/17.png" data-aos="zoom-in")
      .col-md-8.order-1.order-sm-2
        .mt-3.p-3.cont_1(data-aos="fade-right" style="position:relative")
          p(style="position:relative;left:-9%;") Esto indica que las situaciones de orden psicológico y emocional en los internos presentan un problema visible que da pie a otras situaciones como la falta de autocuidado, que genera un impacto negativo en la manera en cómo se ven hoy en día los centros penitenciarios. Cabe destacar que lo anterior se evidencia por la escasez de recursos del centro penitenciario, las condiciones de hacinamiento, los espacios insalubres, la falta de lugares adecuados para asearse y el no contar con apoyo familiar posibilita una mayor dificultad en la obtención de provisiones como ropa o útiles de aseo para llevar a cabo una adecuada higiene. También, como efectos se produce despreocupación por asearse lo que genera que en parte se presenten enfermedades como resfriados, alergias e infecciones respiratorias; incluso, hay un descuido por mantener en buen estado el sitio que ahora habitan, por ello se observa basura, hábitos insalubres y poco higiénicos por parte de los internos.

    p.mt-5(data-aos="fade-up") Teniendo en cuenta lo anterior, es importante saber que existen algunas necesidades básicas en el ser humano que son imprescindibles cumplir y que ayudan a tener un óptimo autocuidado físico, tales como:

    .row.mt-5
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/18.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/20.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/21.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/22.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/23.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3
        img(src="@/assets/curso/tema1/24.svg" data-aos="zoom-in-up")
      .col-md-3.col-lg-3.col-sm-6.mb-3

    br
    br
    .cont_full_1.mt-5.pb-5(style="position:relative;")
      .row
        .col-md-6
          span.h3.text-white.p-2(style="background-color:#3BA3F8;" data-aos="fade-up") Social
          p.mt-5(data-aos="fade-up") El autocuidado social, permite conectar con otras personas, esto es crucial para la satisfacción personal puesto que ayuda a combatir la soledad y el aislamiento en espacios de prisionalización, este se enfoca en hacer cosas eligiendo a quienes son compatibles, en el ámbito penitenciario esta compatibilidad se torna bastante difícil, teniendo en cuenta la población que se encuentra en detención en los establecimientos que muchas veces tienden a ser poco compatibles por diferentes aspectos, la identificación de pares en este entorno social permite que el privado de la libertad pueda considerar unirse a un grupo de personas que compartan sus intereses.
          p.mt-4(data-aos="fade-up") Yela (2008) alude de forma concreta las principales dificultades a las que se enfrentan los reclusos, generalmente observables durante su tiempo de internamiento y que se vienen constituyendo en uno de los mayores factores de riesgo para el adecuado desarrollo de la personalidad y la sana convivencia social. Entre las principales dificultades se encuentran:
        .col-md-6
          img(src="@/assets/curso/tema1/26.png" data-aos="zoom-in-up")

      .row.mt-4.p-5(style="background-color:#133D60;position:relative")
        .col-md-4
          img(src="@/assets/curso/tema1/14.png" data-aos="zoom-in-up" style="max-width:300px;")
        .col-md-8(style="place-self:center;")
          .titulo-segundo
            h3.text-white(data-aos="zoom-in") Autocuidado personal
          p.text-white(data-aos="fade-up") En el siguiente recurso se presentan  las principales dificultades que enfrenta esta población:

          a.boton.mt-4.indicador__container(
            :href="obtenerLink('downloads/Autocuidado_emocional_3.pdf')"
            target="_blank"
            type="application/pdf"
            @mouseover="mostrarIndicador = false"
          )
            span Descargar
            i.fas.fa-file-download
            .indicador--click(v-if="mostrarIndicador")

      .row.mt-5(style="position:relative;")
        .col-lg-1.col-md-1.col-sm-3.col-xs-12.mb-2.cont_waves2.d-md-block.d-none.d-lg-block.d-xl-block
        .col-md-11.col-lg-11.col-sm-9.col-xs-12
          p(data-aos="fade-right") Estas dificultades se globalizan en una pérdida en la capacidad de adaptarse a la vida dentro del contexto carcelario, por lo que presentan disminución en la capacidad de autopercepción y por ende, una pérdida de la noción del yo, lo que sugiere una distorsión y/o pérdida en el cuidado e interés por sí mismo a nivel psicológico, físico, ambiental y social.

      .row.mt-5
        .col-md-5
          img(src="@/assets/curso/tema1/28.png" data-aos="zoom-in")
        .col-md-7
          p(data-aos="fade-up") De esta manera, la modificación de la conducta se basa en desarrollar en cada interno la capacidad de reconocer el valor que tiene por sí mismo y la importancia de cuidarse, enfrentando los efectos que produce el internamiento, ya que aunque estos individuos conviven cercanamente con muchas personas es poca la comunicación que se genera, creando implícitamente en ellos insensibilidad, agresividad e indiferencia; Yela (2008), en el artículo #[strong(style="color:#3BA3F8;") “El psicólogo en instituciones penitenciarias: teoría y práctica”] da cuenta de la opinión de Valverde, quien indica que los internos suelen vivir cualquier indicación o norma como agresión inicial, provocación y humillación, las demoras y las complicaciones que se producen en el engranaje penitenciario, es decir, todos los retrasos generados en el proceso o tratamiento que aplican los centros penitenciarios entre la reclusión y el internamiento de los individuos.
          p.mt-4(data-aos="fade-up") Finalmente, los determinantes sociales de la salud son las circunstancias en que las personas nacen, crecen, viven, trabajan y envejecen, incluido el sistema de salud; las características sociales dentro de las cuales la vida tiene lugar; apuntan tanto a las características específicas del contexto social que influyen en la salud, como las vías por las cuales las condiciones sociales se traducen en efectos sanitarios y los diferentes recursos a nivel mundial, nacional y local, lo cual depende a su vez de las políticas adoptadas. En el plan de acción sobre salud mental, la organización mundial de la salud destaca que los determinantes de la salud mental y de los trastornos mentales incluyen factores sociales, culturales, económicos, políticos y ambientales.

    .row.mt-5.cont_full_2(style="position:relative")
      .col-md-4.col-sm-4.mb-2(style="place-self:center;position:relative")
        p.mb-0(data-aos="fade-left") La evidencia latinoamericana corrobora lo anterior al indicar que, por lo general, el estatus socioeconómico se relaciona negativamente con indicadores de trastornos mentales y la falta de escolaridad se relaciona con:
      .col-md-2.col-lg-2.col-sm-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-3.pb-5.pt-5(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/29.svg', alt='')
          h3.text-center(data-aos="fade-up") Síntomas de depresión
      .col-md-2.col-lg-2.col-sm-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-3.pb-5.pt-5(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/30.svg', alt='')
          h3.text-center(data-aos="fade-up")  Intento de suicidio
      .col-md-2.col-lg-2.col-sm-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-3.pb-5.pt-5(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/31.svg', alt='')
          h3.text-center(data-aos="fade-up")  Trastornos mentales
      .col-md-2.col-lg-2.col-sm-4.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-3.pb-5.pt-5(data-aos="flip-right" style="height:100%;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/32.svg', alt='')
          h3.text-center(data-aos="fade-up") Estado de ánimo y ansiedad

    br
    .row.mt-5
      .col-md-6
        .mt-3.p-3.cont_2(data-aos="fade-left" style="position:relative;z-index:1;")
          p(style="position:relative;right:-9%;") Por tal razón, esta política atiende al modelo de determinantes sociales de la salud contemplado en el plan decenal de salud pública, que plantea el análisis de las desigualdades sociales y su incidencia en los logros en salud, incluyendo la salud mental. Implica reconocer que: las diferencias en salud producidas socialmente, se distribuyen de forma sistemática entre la población y son injustas, y busca promover la adopción de políticas que generen movilización y participación social, así como condiciones de igualdad en salud; reafirmando el derecho de las personas a lograr el grado máximo de salud posible y procurando cerrar brechas y diferencias de salud injustas y evitables entre grupos o poblaciones definidos socialmente, económicamente, demográficamente o geográficamente, mediante la implementación de estrategias integrales de promoción, prevención, tratamiento y rehabilitación.
      .col-md-6(style="place-self:center")
        img(src="@/assets/curso/tema1/33.png" data-aos="zoom-in-up")

    Separador

    .titulo-segundo.mt-5
      h2#t_1_2 1.2  Proyecto de vida en los PPL

    .row.mt-5
      .col-md-1.d-md-block.d-none.d-lg-block.d-xl-block
        img(src="@/assets/curso/tema1/34.png" data-aos="fade-left")
      .col-md-11
        p(data-aos="fade-up") Se define como un plan que el privado de la libertad realiza para darle dirección a su futuro. Para construirlo se requiere trazarse metas para el porvenir y trabajar duro en el presente para lograrlas, de esta manera la persona no permite que su existencia quede en manos de la suerte. (Larrota Castillo Richard, 2014. Programa inducción al tratamiento penitenciario) Explicado en más detalle este tema en el siguiente video:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    .row.mt-5
      .col-md-6
        span.h3.text-white.p-2(style="background-color:#3BA3F8;" data-aos="fade-up") ¿Qué es una meta?
        p.mt-4(data-aos="fade-up") Es algo que la persona quiere alcanzar de verdad. Es aquello por lo que estaría dispuesto a trabajar y luchar por obtener, aunque le cueste días, meses, o años para lograrlo. Para poder alcanzar una meta primero debe proponerse objetivos.
        .mt-5
          span.h3.text-white.p-2(style="background-color:#3BA3F8;" data-aos="fade-up") ¿Cuáles son los objetivos?
          p.mt-4(data-aos="fade-up") Los objetivos son el fin que se pretende alcanzar. Son como los peldaños de una escalera que le permiten subir poco a poco hasta llegar finalmente a donde quiere.
      .col-md-6
        img(src="@/assets/curso/tema1/35.png" data-aos="zoom-in-up")

    h5.mt-3.text-center(data-aos="fade-up") Las metas pueden ser a corto plazo, a mediano plazo y a largo plazo.

    .row.mt-5
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/36.svg' alt='')
          .tarjeta.color-primario(style="background-color:#AED4F5;width:100%;")
            .text-white.p-4
              h3.text-center.mt-5(data-aos="fade-up" style="color:#12263F !important;") A corto plazo
              p.mt-4.text-center(data-aos="fade-up" style="color:#12263F !important;") Son aquellas que se propone y son cercanas en el tiempo, por ejemplo 3 semanas, 5 meses, 1 año.
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/37.svg' alt='')
          .tarjeta.color-primario(style="background-color:#AED4F5;width:100%;")
            .text-white.p-4
              h3.text-center.mt-5(data-aos="fade-up" style="color:#12263F !important;") A mediano plazo
              p.mt-4.text-center(data-aos="fade-up" style="color:#12263F !important;")  Son aquellas que se propone a 2 o 3 años.
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/38.svg' alt='')
          .tarjeta.color-primario(style="background-color:#AED4F5;width:100%;")
            .text-white.p-4
              h3.text-center.mt-5(data-aos="fade-up" style="color:#12263F !important;") A largo plazo
              p.mt-4.text-center(data-aos="fade-up" style="color:#12263F !important;") Son aquellas que se propone a 5 o 10 años.

    br
    .row.mt-5
      .col-md-4.col-lg-4.mb-3(style="")
        .bloque-texto-c.color-secundario.p-4(style="background-color: #DFEAF1;height:100%" data-aos="zoom-in")
          i.fas.fa-quote-right
          p.mb-2 Es importante que la persona encuentre sentido en todas las actividades que realiza sin perder de vista la totalidad ni la finalidad, para de esta forma poder formular planes y proyectos más generales que abarquen sus objetivos y las vías posibles de su logro, en el concierto de su actividad total. Esto vendría a ser el proyecto de vida, o sea lo que el individuo quiere ser y lo que va a hacer.
          strong(style="float: right;left: -12%;position: relative;") D’Angelo, 1982.
      .col-md-4.col-lg-4.mb-3(style="padding:0px;")
        img(src="@/assets/curso/tema1/39.png" data-aos="zoom-in" style="height:100%;")

      .col-md-4.col-lg-4.mb-3(style="padding:0px;")
        .p-4(style="background-color:#FFEED2;height:100%;place-self:center;display:flex;flex-wrap:wrap;align-content:center;")
          p(data-aos="fade-up") Para la estructuración del proyecto de vida interactúan los procesos motivacionales, la autoconciencia y la actividad, teniendo en cuenta que es en ésta donde se van dando los otros dos procesos.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaFlip2: true,
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.tarjeta--boton
  background-color: #FFEED2
.cont_full:before
  content: ''
  position: absolute
  background-image: url(../assets/curso/tema1/6.png) !important
  width: 117%
  height: 100%
  background-position-y: -19%
  left: -4%
  background-repeat: no-repeat
.cont_full_1:before
  content: ''
  position: absolute
  background-image: url(../assets/curso/tema1/25.svg) !important
  width: 117%
  height: 108%
  left: -4%
  background-repeat: no-repeat
  top: -2%
.cont_full_2:before
  content: ''
  position: absolute
  width: 115%
  height: 80%
  background-color: #DFEAF1
  top: 10%
  left: -10%
.cont_1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  background-color: #FFEED2
  top: -2%
  left: -15%
.cont_2:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  background-color: #FFEED2
  top: -2%
  right: -15%
.cont_elements_1:before
  content: ''
  background-color: #DFEAF1
  position: absolute
  height: 85%
  width: 110%
  top: 15%
  left: -5%
.cont_waves
 background: url(../assets/curso/tema1/2.svg)
.cont_waves2
 background: url(../assets/curso/tema1/27.svg)
 background-repeat: no-repeat
 background-size: 100% 100%
.acordion .tarjeta--azul
  background-color: #DFEAF1
</style>
