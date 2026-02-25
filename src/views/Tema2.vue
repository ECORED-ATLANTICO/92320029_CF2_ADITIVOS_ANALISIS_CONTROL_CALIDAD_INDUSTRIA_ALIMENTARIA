<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Marco normativo y técnico del APPCC
    
    .bg_img_6.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema2/img_2.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 El sistema APPCC surge como respuesta a la necesidad de garantizar la inocuidad alimentaria mediante un enfoque preventivo basado en evidencia científica. Su adopción global se ha fortalecido tras su incorporación en los lineamientos del Codex Alimentarius.

      .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema2/img_3.png', class="img-fluid p-4")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Esta metodología preventiva se fundamenta en el análisis científico del riesgo y se estructura en siete principios definidos por el Codex. Su implementación se articula con estándares internacionales como la norma ISO 22000 y con la normatividad colombiana vigente, consolidándose como una herramienta esencial para la evaluación y el control de la inocuidad.

    Separador

    #t_2_1.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 2.1 Evolución del Sistema APPCC
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_4.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3(data-aos="zoom-in-right") El sistema de Análisis de Peligros y Puntos Críticos de Control (APPCC) es una metodología preventiva diseñada para garantizar la inocuidad alimentaria mediante la identificación y el control sistemático de peligros en la cadena de producción.
        .tarjeta--bg-img.color-primario-cv.rounded-3.p-0.mb-4.overflow-hidden(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0.h-100
            .col-12.col-lg-9.p-4
              p.mb-0 Desarrollado en la década de 1960 por la NASA, la empresa Pillsbury y el ejército de los Estados Unidos, este sistema surgió para asegurar la inocuidad de los alimentos en misiones espaciales. A diferencia de las inspecciones tradicionales del producto final, el APPCC introdujo un enfoque preventivo basado en el análisis científico del riesgo
            .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
              figure.p-0.m-0.h-100
                  img(src='@/assets/curso/tema2/img_5.png', class="img-fluid w-100 h-100 object-fit-cover").p-0
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema2/img_6.png', class="img-fluid p-2")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Tras su adopción y estandarización por la Comisión del Codex Alimentarius, se ha convertido en el referente internacional para la gestión de la inocuidad alimentaria. Actualmente, el cumplimiento del APPCC es un requisito fundamental en los marcos regulatorios tanto nacionales como internacionales.
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
           p.mb-0 El sistema APPCC se fundamenta en 3 pilares técnicos. A diferencia de los sistemas reactivos, el APPCC no espera a que ocurra una desviación o un brote para actuar; identifica previamente los puntos del proceso donde pueden generarse los riesgos y establece las medidas de control verificables.

    .bg_img_7.mb-3

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 2.
            |    Pilares técnicos del sistema APPCC
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema1/img_3.png', class="img-fluid d-none d-lg-block").mb-5
            img(src='@/assets/curso/tema1/img_3.png', class="img-fluid d-block d-lg-none").mb-5
            figcaption Nota. Adaptado del Codex Alimentarius (2023).
        
      p.mb-3 De igual manera, la comisión del Codex Alimentarius ha establecido siete principios fundamentales y estandarizados a nivel internacional para el sistema APPCC:
    
    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Principios del sistema APPCC
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado del Codex Alimentarius (2023).
        thead
          tr
            th.col-auto.col-lg-auto Principios
            th.col-auto.col-lg-auto Descripción técnica
        tbody
          tr
            td.text-start Realizar análisis de peligros.
            td.text-start Identificar y evaluar peligros significativos, tales como riesgos biológicos, químicos o físicos.
          tr
            td.text-start Determinar de Puntos Críticos de Control (PCC).
            td.text-start Identificar las etapas donde se puede prevenir o eliminar un peligro.
          tr
            td.text-start Establecer límites críticos.
            td.text-start Fijar los niveles aceptables para asegurar la inocuidad en cada PCC.
          tr
            td.text-start Establecer un sistema de vigilancia o monitoreo.
            td.text-start Definir procedimientos para verificar que los PCC están bajo control.
          tr
            td.text-start Establecer medidas o acciones correctivas.
            td.text-start Definir acciones a tomar cuando la vigilancia indica que un PCC no está controlado. 
          tr
            td.text-start Establecer procedimientos de verificación.
            td.text-start Realizar ensayos y comprobaciones para confirmar que el sistema funciona eficazmente.
          tr
            td.text-start Establecer un sistema de documentación.
            td.text-start Tener registros de todos los procedimientos y su aplicación en el sistema.

    Separador

    #t_2_2.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 2.2 Codex Alimentarius y estándares internacionales
    .mb-0 

    .bg_img_8.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1
          .tarjeta.color-primario-cv.p-3.rounded-0.mb-3
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_11.png', class="img-fluid ")
              .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
                p.mb-0 El Codex Alimentarius, desarrollado por la FAO y la OMS, establece directrices internacionales orientadas a proteger la salud del consumidor y garantizar prácticas leales en el comercio de alimentos. Dentro de sus principios generales de higiene, el análisis de riesgo constituye el fundamento científico sobre el cual se estructuran los sistemas preventivos como el APPCC. Este enfoque permite tomar decisiones técnicas basadas en evidencia, priorizando los peligros que representan mayor impacto para la salud pública.
          p.mb-0 El análisis de riesgo constituye el fundamento científico del sistema APPCC y comprende tres componentes interrelacionados: 
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_12.png', class="img-fluid")

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_13.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--07
                .tarjeta--slider__content.text-center Evaluación del riesgo: proceso científico de identificación y caracterización de peligros.
              .tarjeta--color-white.h-100
                .tarjeta--08
                .tarjeta--slider__content.text-center Gestión del riesgo: implica la adopción de medidas regulatorias y controles apropiados.
              .tarjeta--color-white.h-100
                .tarjeta--09
                .tarjeta--slider__content.text-center Comunicación del riesgo: orientada a garantizar el intercambio transparente de información entre autoridades, sector productivo y consumidores.
        
      p.mb-0 Este modelo integrador asegura coherencia entre ciencia, regulación y protección de la salud pública, fortaleciendo la toma de decisiones en materia de inocuidad alimentaria a nivel nacional e internacional.

    Separador

    #t_2_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 2.3 Normatividad colombiana vigente
    .mb-0 

    .bg_img_9.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1
          .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_18.png', class="img-fluid p-2")
              .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
                p.mb-0 En Colombia, la inocuidad alimentaria se encuentra regulada por diversas disposiciones emitidas por el Ministerio de Salud y Protección Social y el INVIMA.
          p.mb-0 Entre las principales normas se destacan:
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_19.png', class="img-fluid")
      
      ///----falta puntos de calor
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .div.tarjeta--bg-img.color-primario-o.rounded-3.p-0.mb-5.overflow-hidden
          .row.justify-content-around.align-items-center.mb-0.h-100
            .col-12.col-lg-2.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
              figure.p-0.m-0.h-100
                img(src="@/assets/curso/tema2/img_21.svg" class="img-fluid w-100").p-0
            .col-12.col-lg-10.p-4.pe-5
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h4.mb-1 Ingrese a este enlace para conocer las diferencias entre el Decreto 3075 de 1997 y la Resolución 2674 de 2013 que lo complementa.  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=k22TzQekFmw" target="_blank")
                    span Enlace
                    i.fas.fa-link.me-2

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_22.png', class="img-fluid") 
      .col-12.col-lg-7(data-aos='zoom-in-right')
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          p.mb-0 Estas normativas establecen la obligatoriedad de implementar sistemas preventivos de control, los cuales pueden incluir el APPCC según el nivel de riesgo del establecimiento.
        p.mb-0 La implementación del APPCC no solo responde a exigencias legales, sino que constituye una herramienta estratégica para:
        ul.list-unstyled.mb-1
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span Reducir brotes de enfermedades transmitidas por alimentos.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span Minimizar retiros de producto del mercado.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span Garantizar el acceso a mercados internacionales.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span Fortalecer la confianza del consumidor.
    
    .tarjeta--bg-img.color-primario-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-9.p-4
          p.mb-0 Es fundamental entender que el cumplimiento normativo es el estándar mínimo obligatorio; alcanzar la excelencia en calidad e inocuidad implica superar los requisitos legales establecidos.
        .col-12.col-lg-3.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/tema2/img_23.png', class="img-fluid w-100 h-100 object-fit-cover").p-0
    br
    .bg_img_5.mb-0
      .tarjeta.tarjeta--blanca.p-5.mb-0.rounded-5
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1(data-aos='zoom-in-right')
            h5.mb-3 Ejemplo contextualizado.
            p.mb-3 <B>Caso:</B> Planta de productos lácteos
            p.mb-3 Durante la auditoría sanitaria se evidencia ausencia de análisis formal de peligros en el proceso de pasteurización. Aunque la empresa cumple con BPM, no ha definido límites críticos ni registros de monitoreo.
            .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
              p.mb-0 <B>Conclusión técnica:</B> existe cumplimiento parcial normativo, pero ausencia de sistema APPCC formal incrementa riesgo de desviaciones no controladas.
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema2/img_25.png', class="img-fluid") 
    br
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-7
        .tarjeta.color-secundario-cv.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-6.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema1/img_29.png", class="img-fluid w-100")
            .col-12.col-lg-6.mb-lg-0
              h2.mb-3 Pódcast
              p.mb-5 Lo invitamos a escuchar el siguiente podcast para profundizar sobre el sistema APPCC: 
              TarjetaAudio.color-acento-botones.mb-0.p-5(
                texto="Etiquetas bajo la lupa"
                :audio="require('@/assets/curso/tema1/img_29.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema2',
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
