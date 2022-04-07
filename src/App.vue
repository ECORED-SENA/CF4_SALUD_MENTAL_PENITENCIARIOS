<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.curso-main-container > .container
  overflow-x: clip !important
.banner-interno__fondo
  background-image: url(assets/curso/fondo_temas.png) !important
.titulo-segundo:after
  border-left-color: #FCD189 !important
.banner-principal .tarjeta
  background-size: 100% 100% !important
.acordion__accion__btn--a, .acordion__accion__btn--b
  background-color: #133D60 !important
  color: white !important
</style>
