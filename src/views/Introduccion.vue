<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/introduccion/img_1.png')
      .bloque-texto-t__texto.col-9.mb-0
        p.mb-0 El sistema de Análisis de Peligros y Puntos Críticos de Control (APPCC) es una metodología preventiva fundamentada en el análisis del riesgo, orientada a identificar, evaluar y controlar los peligros biológicos, químicos y físicos que pueden afectar la inocuidad de los alimentos durante las diferentes etapas del proceso productivo. Su implementación permite garantizar el cumplimiento de los requisitos sanitarios establecidos por la normativa vigente y reducir la probabilidad de enfermedades transmitidas por alimentos, fortaleciendo la protección de la salud pública.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1(data-aos='zoom-in-right')
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 En el desarrollo de este componente formativo, consolidan en el aprendiz competencias para aplicar los principios del sistema APPCC en contextos productivos reales, mediante la identificación de peligros significativos, la determinación de puntos críticos de control y el establecimiento de medidas preventivas y correctivas. Este enfoque promueve una gestión sistemática de la inocuidad, alineada con estándares internacionales y con las exigencias del sector alimentario nacional.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_3.png', class="img-fluid") 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
