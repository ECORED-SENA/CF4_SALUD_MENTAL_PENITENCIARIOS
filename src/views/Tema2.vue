<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estilos de afrontamiento

    .row
      .col-md-6.mb-2
        .bloque-texto-c.color-secundario.p-4(style="background-color: #DFEAF1;height:100%" data-aos="zoom-in")
          i.fas.fa-quote-right
          p.mb-2 El afrontamiento es un proceso que ayuda a regular las consecuencias negativas del estrés, es un refuerzo cognitivo y conductual orientado a manejar, reducir, minimizar, dominar o tolerar las demandas externas e internas que aparecen y generan estrés. El afrontamiento ayuda a identificar elementos que intervienen en la relación dada entre situaciones de la vida estresantes y síntomas de enfermedad, actuando como regulador de la perturbación emocional.
          strong(style="float: right;left: -10%;position: relative;") Según Casaretto (2003)
      .col-md-6
        img(src="@/assets/curso/tema2/1.png" data-aos="zoom-in-up")

    .mt-5
      span.h2.text-white.p-2(style="background-color:#3BA3F8;" data-aos="fade-up") Tipos de afrontamiento

    .row.mt-5
      .col-md-1.d-md-block.d-none.d-lg-block.d-xl-block.cont_waves
      .col-md-11
        p(data-aos="fade-up") Los tipos de afrontamiento están relacionados con aquellas predisposiciones personales del ser humano para hacer frente a diversas situaciones y son los que determinan el uso de ciertas estrategias de afrontamiento, así como la estabilidad temporal y situacional, estos pueden ser cambiantes dependiendo de las condiciones desencadenantes.

    h3.text-center(data-aos="fade-up") Existen dos estilos de afrontamiento:

    .row.mt-4
      .col-md-6.p-0
        .p-5.text-center.justify-content-center.m-auto(style="background-color:#133D60;height:100%;" data-aos="flip-right")
          img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in" style="max-width:150px;display:inline;")
          h4.mt-5.text-white(data-aos="fade-up") Centrados en el problema
          p.mt-4.text-white(data-aos="fade-up") Tienen como objeto la resolución de la situación o la realización de conductas que modifiquen la fuente de estrés. La persona se centra en hacer frente a la situación, buscando soluciones al problema que ha provocado la disonancia cognitiva y ayuda a la persona, que es incapaz de tomar decisiones o toma decisiones impulsivas o inadecuadas, por no haber considerado algunos aspectos de la situación o las posibilidades de acción reales.
      .col-md-6.p-0
        .p-5.text-center.justify-content-center.m-auto(style="background-color:#197CCC;height:100%;" data-aos="flip-right")
          img(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in" style="max-width:150px;display:inline;")
          h4.mt-5.text-white(data-aos="fade-up") Centrados en la emoción
          p.mt-4.text-white(data-aos="fade-up") Tienen como objetivo reducir o manejar el malestar emocional asociado o provocado por la situación, se busca que la persona tenga regulación de las consecuencias emocionales activadas por la presencia de la situación estresante, este tipo de estrategias vienen configuradas por todas aquellas reacciones que no resuelven el problema en sí mismo, pero que hacen sentir mejor al individuo en momentos de peligro o amenaza.

    p.mt-5(data-aos="fade-up") Por su parte, Carver, Scheier y Weintraub, en 1989, presentaron 12 estrategias de afrontamiento, las cuales mencionamos a continuación:

    .row.mt-5
      .col-md-6.mb-2(style="place-self:center;")
        img(src="@/assets/curso/tema2/4.png" data-aos="zoom-in")
      .col-md-6
        ol.lista-ol--cuadro
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 1
            | Afrontamiento activo.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 2
            | La planificación.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 3
            | La supresión de actividades competitivas.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 4
            | La postergación de afrontamiento.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 5
            | El soporte social instrumental y emocional.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 6
            | La reinterpretación positiva.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 7
            | La aceptación.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 8
            | La negación.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 9
            | El acudir a la religión.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 10
            | La expresión de las emociones.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 11
            | El uso del alcohol y drogas.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 12
            | Compromiso conductual y cognitivo.

    .row.mt-4.p-5(style="background-color:#133D60;position:relative")
      .col-md-4
        img(src="@/assets/curso/tema1/14.png" data-aos="zoom-in-up" style="max-width:300px;")
      .col-md-8(style="place-self:center;")
        .titulo-segundo
          h3.text-white(data-aos="zoom-in") Características
        p.text-white(data-aos="fade-up") Existen tres características de las estrategias de afrontamiento, a partir de las cuales se pueden clasificar así: 

        a.boton.mt-4.indicador__container(
          :href="obtenerLink('/downloads/Estilos_de_afrontamiento.pdf')"
          target="_blank"
          type="application/pdf"
          @mouseover="mostrarIndicador = false"
        )
          span Descargar
          i.fas.fa-file-download
          .indicador--click(v-if="mostrarIndicador")

    br
    .mt-5
      span.h2.text-white.p-2(style="background-color:#3BA3F8;" data-aos="fade-up") Ventajas

    .row.mt-5
      .col-lg-1.col-md-1.col-sm-3.col-xs-12.mb-2.cont_waves2
      .col-md-11.col-lg-11.col-sm-9.col-xs-12
        p(data-aos="fade-right") Mediante la resolución 1841 de 2013, el Ministerio de Salud y Protección Social adoptó el Plan Decenal de Salud Pública, estableciendo como parte de sus dimensiones, la de convivencia y salud mental, como eje prioritario dentro de la cual propone la meta del componente de promoción de la convivencia social y de la salud mental.

    .row.mt-5.cont_full_4(style="position:relative;")
      .col-lg-2.col-md-2(style="place-self:center;position:relative;")
        h5.text-center(data-aos="fade-up") Entre las ventajas que se manejan están:
      .col-md-9.col-lg-9(style="position:relative;")
        SlyderF.mb-5(columnas="col-lg-3 col-xl-3 col-md-6")
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/5.svg' alt='')
            h4.text-center Reducción de la ansiedad
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/6.svg' alt='')
            h4.text-center Estados de ánimo mejorados
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/7.svg' alt='')
            h4.text-center Pensamiento más claro
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/8.svg' alt='')
            h4.text-center Una mayor sensación de calma o paz interior
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/9.svg' alt='')
            h4.text-center Aumento de la autoestima
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/10.svg' alt='')
            h4.text-center Riesgo reducido de depresión
          .tarjeta.color-acento-contenido.p-4.pb-5.pt-5(style="min-height:280px;")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/11.svg' alt='')
            h4.text-center Mejoras en las relaciones



      
</template>

<script>
export default {
  name: 'Tema2',
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
.lista-ol--cuadro__vineta
  background-color: #133D60
.cont_full_4:before
  content: ''
  position: absolute
  width: 108%
  height: 100%
  background-color: #DFEAF1
  left: -4%
  top: 26%
.cont_waves
 background: url(../assets/curso/tema1/2.svg)
.cont_waves2
 background: url(../assets/curso/tema1/27.svg)
 background-repeat: no-repeat
 background-size: 100% 100%
</style>
