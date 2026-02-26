<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Validación, verificación y mejora continua del Sistema APPCC

    .bg_img_17.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema5/img_2.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 La validación, verificación y mejora continua constituyen mecanismos esenciales para garantizar la eficacia sostenida del sistema APPCC. Mientras la validación demuestra científicamente que los controles son adecuados, la verificación confirma su aplicación sistemática. La integración con ISO 22000:2023 fortalece el enfoque de gestión estratégica del riesgo y consolida una cultura organizacional orientada a la inocuidad alimentaria.
    
      Separador

      #t_5_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.1 Validación del Sistema APPCC
      .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema5/img_3.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 La validación consiste en obtener evidencia científica que demuestre que las medidas de control establecidas son capaces de gestionar eficazmente los peligros identificados.
        .cita-decorada.mb-3(data-aos="zoom-in-right")
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.cita-decorada__texto.mb-2.p-3 Según el Codex Alimentarius (2023), la validación debe realizarse antes de la implementación completa del plan APPCC o cuando se presenten cambios significativos en el proceso, formulación o tecnología. La validación responde a la pregunta técnica: ¿el control definido realmente funciona?
              .col-2.col-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/img_5.svg', class="cita-decorada__imagen-flotante-1")
        p.mb-0 La ISO 22000:2023 establece que la validación debe sustentarse en:
    
    .bg_img_18.mb-3

      ///fakta puntos de calor
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .tarjeta.color-secundario-cv.p-4.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema5/img_8.svg', class="img-fluid")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 Ejemplo: la validación de un tratamiento térmico implica demostrar que la combinación de tiempo y temperatura reduce la carga microbiana a niveles seguros conforme a criterios regulatorios.
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-0 La validación es una actividad preventiva, mientras que la verificación es una actividad confirmatoria.

    Separador

    #t_5_2.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.2 Verificación del Sistema APPCC
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_9.svg', class="img-fluid p-4")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-3 La verificación tiene como propósito confirmar que el Sistema APPCC se implementa y mantiene conforme a lo planificado.
        p.mb-0 El Codex (2023) señala que la verificación debe incluir:

    .bg_img_18.mb-3

      ///fakta puntos de calor

      
    
    Separador

    #t_5_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.3 Diferenciación técnica entre validación y verificación
    .mb-0 



    Separador

    #t_5_4.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.4 Gestión de cambios y actualización del plan APPCC
    .mb-0 
    
    
    .bg_img_18.mb-3

      Separador

      #t_5_5.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.5 Mejora continua en integración con ISO 22000:2023
      .mb-0


    Separador

    #t_5_6.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.6 Indicadores de desempeño
    .mb-0 


</template>

<script>
export default {
  name: 'Tema5',
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
