<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.p-4(style="background-color:#FFF6E7;border-radius:15px;" data-aos="zoom-in")
      .col-md-2
        img.mb-4(src="@/assets/curso/introduccion/1.svg")
      .col-md-10(style="place-self:center;")
        p La salud mental en la población privada de la libertad, es una de las principales dificultades en los establecimientos de reclusión; el ingreso de las personas privadas de la libertad con afectaciones en su salud mental por consumo de sustancias psicoactivas, problemáticas familiares y sociales, ponen en riesgo la psiquis del individuo, aunado a las condiciones de infraestructura y hacinamiento que encuentran al ingresar a un Establecimiento de Reclusión del Orden Nacional (ERON), es por ellos que el talento humano de los centros penitenciarios deben apropiarse de herramientas que permitan apoyar al privado de la libertad en cada una de las etapas de su prisionalización. Conozcamos un poco más: 
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uHB7h1NVeh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
