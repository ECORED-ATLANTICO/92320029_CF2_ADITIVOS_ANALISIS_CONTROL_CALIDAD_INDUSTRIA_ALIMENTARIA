<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Validación, verificación y mejora continua del CC

    .bg_img_17.mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema5/img_2.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 La validación, verificación y mejora continua constituyen mecanismos esenciales para garantizar la eficacia sostenida del sistema APPCC. Mientras la validación demuestra científicamente que los controles son adecuados, la verificación confirma su aplicación sistemática. La integración con ISO 22000:2023 fortalece el enfoque de gestión estratégica del riesgo y consolida una cultura organizacional orientada a la inocuidad alimentaria.
    
      Separador

      #t_5_1.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.1 Validación del sistema APPCC
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
                p.cita-decorada__texto.mb-2.p-3 Según el <em>Codex Alimentarius</em> (2023), la validación debe realizarse antes de la implementación completa del plan APPCC o cuando se presenten cambios significativos en el proceso, formulación o tecnología. La validación responde a la pregunta técnica: ¿el control definido realmente funciona?
              .col-2.col-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema5/img_5.svg', class="cita-decorada__imagen-flotante-1")
        p.mb-0 La ISO 22000:2023 establece que la validación debe sustentarse en:
    
    .bg_img_18.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-6
          ImagenInfografica.color-acento-botones.puntos-grandes.puntos-personalizados
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema5/img_7.svg', class="img-fluid")
            .tarjeta.color-primario-cv.p-3(x="36%" y="11%" numero="")
              p <B>Estudios científicos reconocidos:</B> evidencia experimental publicada en fuentes confiables que demuestre que las medidas de control son eficaces para reducir o eliminar los peligros identificados. 
            .tarjeta.color-primario-cv.p-3(x="54.5%" y="41%" numero="")
              p <B>Literatura técnica actualizada:</B> documentación técnica vigente, guías sectoriales y referencias normativas que respalden la pertinencia y suficiencia de las medidas implementadas.
            .tarjeta.color-primario-cv.p-3(x="87%" y="23.5%" numero="")
              p <B>Resultados de pruebas microbiológicas:</B> análisis de laboratorio realizados bajo métodos validados que confirmen que el proceso logra los niveles de control microbiológico establecidos.
            .tarjeta.color-primario-cv.p-3(x="79.8%" y="69.5%" numero="")
              p <B>Ensayos de desafío (challenge tests), cuando aplique:</B> estudios experimentales en los que se inocula intencionalmente un microorganismo objetivo para verificar la capacidad real del proceso de controlarlo en condiciones específicas.
    
    
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
      .h2(data-aos="fade-right") 5.2 Verificación del sistema APPCC
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_9.svg', class="img-fluid p-4")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-3 La verificación tiene como propósito confirmar que el sistema APPCC se implementa y mantiene conforme a lo planificado.
        p.mb-0 El <em>Codex</em> (2023) señala que la verificación debe incluir:

    .bg_img_19.mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-6
          ImagenInfografica.color-acento-botones.puntos-grandes.puntos-personalizados
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema5/img_11.svg', class="img-fluid")
            .tarjeta.color-primario-cv.p-3(x="3.9%" y="27.8%" numero="")
              p <B>Revisión de registros:</B> análisis sistemático de los formatos y evidencias documentales para confirmar que el monitoreo y las acciones correctivas se ejecutaron conforme a lo planificado.
            .tarjeta.color-primario-cv.p-3(x="21.9%" y="10.7%" numero="")
              p <B>Auditorías internas:</B> evaluaciones periódicas e independientes del sistema APPCC para determinar su grado de implementación, conformidad y eficacia.
            .tarjeta.color-primario-cv.p-3(x="64.9%" y="10.5%" numero="")
              p <B>Inspecciones de procesos:</B> observación directa en planta para comprobar que las prácticas operativas y los controles se aplican según los procedimientos establecidos.
            .tarjeta.color-primario-cv.p-3(x="90.8%" y="5%" numero="")
              p <B>Ensayos microbiológicos:</B> análisis de producto, superficies o ambiente que permiten corroborar objetivamente el desempeño sanitario del sistema.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-3 A diferencia de la validación, la verificación se realiza de manera periódica durante la operación normal del sistema.
        .tarjeta.color-primario-cv.p-4.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0 La ISO 22000:2023 enfatiza que los resultados de la verificación deben analizarse como parte del ciclo de mejora continua, permitiendo ajustes cuando se detecten desviaciones sistemáticas (ISO, 2023).
        p.mb-0 Desde el enfoque de gestión del riesgo, la verificación asegura que el sistema mantiene su eficacia en el tiempo.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/tema5/img_12.png', class="img-fluid")

    Separador

    #t_5_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.3 Diferenciación técnica entre validación y verificación
    .mb-0 

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Diferencias entre validación y verificación en el sistema APPCC
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de Codex (2023) e ISO (2023).
        thead
          tr
            th.col-auto.col-lg-3 Criterio
            th.col-auto.col-lg-auto Validación
            th.col-auto.col-lg-3 Verificación
        tbody
          tr
            td.text-start Momento.
            td.text-start Antes o durante cambios.
            td.text-start Durante operación regular.
          tr
            td.text-start Objetivo.
            td.text-start Demostrar eficacia del control.
            td.text-start Confirmar cumplimiento del plan.
          tr
            td.text-start Base.
            td.text-start Evidencia científica.
            td.text-start Registros y auditorías.
          tr
            td.text-start Enfoque.
            td.text-start Preventivo.
            td.text-start Confirmatorio.
        
        
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8
        .tarjeta.color-secundario-cv.p-4.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0 Comprender esta diferencia es esencial para evitar errores conceptuales frecuentes en auditorías.

    Separador

    #t_5_4.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.4 Gestión de cambios y actualización del plan APPCC
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_13.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema5/img_14.svg', class="img-fluid") 
          .col-12.col-lg-11(data-aos="zoom-in-right")
            p.mb-3 El sistema APPCC no es estático. Debe actualizarse cuando existan:
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Cambios en materias primas.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Modificación de procesos.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Nuevos equipos.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Actualización normativa.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Incidentes sanitarios.
          .col-12.col-lg-12(data-aos="zoom-in-right")
            .cita-decorada.mb-3(data-aos="zoom-in-right")
              blockquote.cita-decorada__caja.cita-decorada__caja--fondo-5.p-5
                .row.justify-content-center.align-items-center
                  .col-2.col-lg-1.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema5/img_15.svg', class="cita-decorada__imagen-flotante-1")
                  .col-12.col-lg-10
                    p.cita-decorada__texto.mb-2.p-3 La FAO y WHO (2024) señalan que la gestión eficaz de cambios es un componente clave de la cultura de inocuidad, ya que permite responder dinámicamente a nuevos riesgos emergentes.
            p.mb-3 Toda modificación debe documentarse y, cuando sea necesario, validarse nuevamente.

    .bg_img_20.mb-3

      Separador

      #t_5_5.titulo-segundo.color-primario
        .h2(data-aos="fade-right") 5.5 Mejora continua en integración con ISO 22000:2023
      .mb-0
      
      .row.justify-content-center.align-items-center.mb-5
        .col-3.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_18.svg', class="img-fluid") 
        .col-12.col-lg-11(data-aos="zoom-in-right")
          .tarjeta.color-secundario-cv.p-4.rounded-0.mb-3(data-aos="zoom-in-right")
            p.mb-0 La mejora continua se basa en el ciclo PHVA (Planificar–Hacer–Verificar–Actuar). La ISO 22000:2023 integra el APPCC dentro de un sistema de gestión que incluye liderazgo, análisis del contexto organizacional y gestión estratégica del riesgo.

        .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-right")
          .col-10.position-relative.px-0
            .row.align-items-stretch.g-0
              .col-12.col-lg-7
                figure.mb-0
                  img(src='@/assets/curso/tema5/img_19.png', class='img-fluid w-100 h-100 rounded-start-4' style='object-fit: cover; object-position: left center')
              .col-12.col-lg-5.d-flex.align-items-center.justify-content-center
                .tarjeta-overlay.tarjeta-overlay--derecha.tarjeta-overlay--white
                  p.mb-3 La mejora continua implica:
                  ul.list-unstyled.mb-1
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Análisis de resultados de verificación.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Evaluación de tendencias.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Implementación de acciones preventivas.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Revisión por la dirección.

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_20.svg', class="img-fluid p-4") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3 El liderazgo organizacional desempeña un papel fundamental en la consolidación de la cultura de inocuidad alimentaria (FAO & WHO, 2024).

    Separador

    #t_5_6.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 5.6 Indicadores de desempeño
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_21.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema5/img_22.svg', class="img-fluid") 
          .col-12.col-lg-11(data-aos="zoom-in-right")
            p.mb-3 La medición objetiva del desempeño fortalece la toma de decisiones técnicas.
            p.mb-3 Indicadores sugeridos:
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Número de desviaciones por PCC.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Cumplimiento de monitoreos programados.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Resultados microbiológicos.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Tiempo de respuesta ante incidentes.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Resultados de auditorías internas.
          .cita-decorada.mb-3(data-aos="zoom-in-right")
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10
                  p.cita-decorada__texto.mb-2.p-3 La evaluación periódica de indicadores permite identificar tendencias y anticipar fallas potenciales.
                .col-2.col-lg-1.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema5/img_24.svg', class="cita-decorada__imagen-flotante-1")
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
