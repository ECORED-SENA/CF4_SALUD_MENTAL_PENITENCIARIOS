<template lang="pug">
.btns
  img(src='@/assets/curso/111.jpg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-3.py-4(v-if="index === hover" :style="{left:boton.left, top:boton.top, width: boton.width}")
      .col-md-12.p-2
        .bg-white.px-2.mb-3.py-1
          h4.mb-3.font-weight-bold 
            | {{ boton.titulo }} 
          img(:src=' boton.imagen' style='width: 335px; height: 28px ').mb-3
        p.mb-0(v-html="boton.texto")
    
    

</template>

<script>
export default {
  name: 'BotonesD',
  data: () => ({
    indicador: true,
    hover: null,
    size: '15%',
    botones: [
      {
        width: '600px',
        img: require('../assets/curso/112.svg'),
        imagen: require('../assets/curso/114.svg'),
        img_h: require('../assets/curso/113.svg'),
        pos_x: '29%',
        pos_y: '12%',
        left: '-30%',
        top: '-100%',
        titulo: 'Tono',
        texto:
          'Existe un orden específico natural de  los tonos: rojo, amarillo, azul, violeta; y se pueden mezclar colores cercanos para obtener una variación continua de un color al otro.<br><br>Esta cualidad implícita en el  color  es por la cual el ojo humano puede diferenciar cada uno de los colores, en su  estado puro, sin adiciones de color blanco o negro; tiene relación con las diferentes longitudes de onda.  Esta cualidad permite diferenciar de manera clara, por ejemplo, el color azul del color verde, el amarillo del rojo, etc . ',
      },
      {
        width: '400px',
        img: require('../assets/curso/115.svg'),
        imagen: require('../assets/curso/119.svg'),
        img_h: require('../assets/curso/116.svg'),
        pos_x: '59%',
        pos_y: '30%',
        left: '150%',
        top: '10%',
        titulo: 'Saturación',
        texto:
          'La saturación define el grado de pureza e intensidad que posee cada color. Este valor va desde el color puro hasta su mínimo, que llegaría a ser un color casi gris. ',
      },
      {
        width: '700px',
        img: require('../assets/curso/117.svg'),
        imagen: require('../assets/curso/120.svg'),
        img_h: require('../assets/curso/118.svg'),
        pos_x: '32%',
        pos_y: '62%',
        left: '50%',
        top: '20%',
        titulo: 'Luminosidad',
        texto:
          'La luminosidad o brillo es la cantidad de luz emitida o reflejada por un objeto. Y en un color, sería su claridad u oscuridad. Un color al 100 % de saturación tendrá su máxima pureza con un 100 % de luminosidad, y con una luminosidad del 0 % será negro absoluto.  Por el contrario, cualquier color al 0 % de saturación corresponderá a un tono concreto de gris, que se convertirá blanco absoluto por un valor del 100 % de luminosidad y negro absoluto por un valor de luminosidad del 0 %.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    width: 80px
    position: absolute
    background-size: auto
    background-repeat: no-repeat
    cursor: pointer
    background-position: center
    transition: background-image 0.2s ease-in-out
  &__text
    background-color: #D1FBFF !important
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    border-radius: 20px
    position: absolute
    left: 200%
    background-color: white
    width: 400px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    .number
      position: absolute
      top: -10px
      left: 3%
      width: 91px
    @media (max-width: $bp-max-lg)
      width: 300% !important
@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>
