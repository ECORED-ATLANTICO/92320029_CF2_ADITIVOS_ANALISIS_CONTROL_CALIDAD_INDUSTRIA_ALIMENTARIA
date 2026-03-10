<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Aplicación práctica del sistema APPCC

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema4/img_1.png', class="img-fluid") 
      .col-12.col-lg-7(data-aos="zoom-in-right")
        .tarjeta.color-secundario-cv.p-4.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema4/img_2.png', class="img-fluid")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 La implementación práctica del sistema APPCC requiere preparación estructurada, análisis científico del riesgo y control disciplinado de etapas críticas. La aplicación correcta de los siete principios permite transformar la gestión de inocuidad en un sistema preventivo verificable, alineado con estándares internacionales y orientado a la protección de la salud pública.

    Separador

    #t_4_1.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 4.1 Etapas preliminares
    .mb-0 

    p.mb-3 Antes de aplicar los siete principios del APPCC, es obligatorio desarrollar etapas preparatorias que permitan estructurar el análisis con rigurosidad técnica. El <em>Codex Alimentarius</em> (2023) establece que estas actividades garantizan coherencia entre el proceso real y el plan documentado. 
    p.mb-5 Las etapas preliminares incluyen:
 
    TabsA.mb-0.tarjeta-tabs-a.color-acento-botones-cv.uno(data-aos="zoom-in-right")
      .tarjeta.bg-color-color-primario-cv.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Conformación del equipo APPCC")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.col-xl-6.order-2.order-xl-1
            h5.mb-3 Conformación del equipo APPCC
            p.mb-3 La organización debe designar un equipo multidisciplinario con conocimiento técnico del proceso productivo, microbiología, calidad, mantenimiento y normatividad.
            h5.mb-3  Criterios técnicos de conformación:
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Experiencia en procesos productivos.
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Conocimiento en análisis microbiológico.
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Dominio de normatividad sanitaria.
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Capacidad de análisis documental.
          .col-12.col-lg-8.col-xl-6.order-1.order-lg-1.order-xl-2.mb-3.mb-lg-0(data-aos="flip-left")
            figure
              img(src='@/assets/curso/tema4/img_3.png', class="img-fluid")
      .tarjeta.bg-color-color-primario-cv.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Descripción detallada del producto")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.col-xl-6.order-2.order-xl-1
            h5.mb-3 Descripción detallada del producto
            p.mb-3 La descripción del producto debe incluir:
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Composición
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Características fisicoquímicas.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Tratamientos térmicos.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Vida útil.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Condiciones de almacenamiento.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Tipo de consumidor.
            p.mb-3 Esta caracterización es fundamental para el análisis de peligros, ya que las condiciones intrínsecas del alimento influyen en el crecimiento microbiano (FAO, 2023).
          .col-12.col-lg-8.col-xl-6.order-1.order-lg-1.order-xl-2.mb-3.mb-lg-0(data-aos="flip-left")
            figure
              img(src='@/assets/curso/tema4/img_4.png', class="img-fluid")
      .tarjeta.bg-color-color-primario-cv.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Identificación del uso previsto")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.col-xl-6.order-2.order-xl-1
            h5.mb-3 Identificación del uso previsto
            p.mb-3 El uso previsto define cómo se consumirá el alimento y si está dirigido a población general o grupos vulnerables (niños, adultos mayores, inmunosuprimidos).
            p.mb-0 El Codex (2023) señala que este aspecto influye directamente en la severidad del riesgo y en la definición de límites críticos más estrictos cuando sea necesario.
          .col-12.col-lg-8.col-xl-6.order-1.order-lg-1.order-xl-2.mb-3.mb-lg-0(data-aos="flip-left")
            figure
              img(src='@/assets/curso/tema4/img_5.png', class="img-fluid")
      .tarjeta.bg-color-color-primario-cv.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Elaboración y verificación del diagrama de flujo")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.col-xl-6.order-2.order-xl-1
            h5.mb-3 Elaboración y verificación del diagrama de flujo
            p.mb-3 El diagrama de flujo representa gráficamente cada etapa del proceso productivo desde la recepción de materias primas hasta la distribución.
            p.mb-3 Debe ser:
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Claro.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Secuencial.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Verificado en planta.
            p.mb-0 La verificación in situ permite confirmar que el diagrama refleja fielmente la operación real (ISO, 2023).
          .col-12.col-lg-8.col-xl-6.order-1.order-lg-1.order-xl-2.mb-3.mb-lg-0(data-aos="flip-left")
            figure
              img(src='@/assets/curso/tema4/img_6.png', class="img-fluid")

    Separador

    #t_4_2.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 4.2 Aplicación de los siete principios del APPCC
    .mb-0 

    p.mb-5 Para efectos formativos, se aplica el sistema APPCC a un proceso de producción de leche pasteurizada.
    
    .bg_img_15.mb-3

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 4.
            |    Etapas del proceso de producción de leche pasteurizada
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema4/img_8.svg', class="img-fluid d-none d-lg-block" alt="La figura 4  ilustra las etapas del proceso de producción de la leche pasteurizada. Recepción de leche cruda. Filtrado. Almacenamiento refrigerado. Pasteurización. Enfriamiento. Envasado. Almacenamiento en frío. Distribución").mb-5
            img(src='@/assets/curso/tema4/img_9.svg', class="img-fluid d-block d-lg-none" alt="La figura 4  ilustra las etapas del proceso de producción de la leche pasteurizada. Recepción de leche cruda. Filtrado. Almacenamiento refrigerado. Pasteurización. Enfriamiento. Envasado. Almacenamiento en frío. Distribución").mb-5
            figcaption Nota. SENA, 2026.
    
    .cita-decorada.mb-5(data-aos="zoom-in-right")
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-11
            p.cita-decorada__texto.mb-2.p-3 Una vez se conocen las etapas del proceso de producción, se realiza un análisis de peligros en cada una de las etapas. Este análisis identifica peligros biológicos, químicos y físicos evaluando la probabilidad y severidad conforme al enfoque de análisis de riesgo descrito por la FAO (2023).
          .col-2.col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img_11.svg', class="cita-decorada__imagen-flotante-1")

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 6.
      |  Análisis de peligros en proceso de leche pasteurizada
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, 2026.
        thead
          tr
            th.col-auto.col-lg-2 Etapa
            th.col-auto.col-lg-2 Peligro identificado
            th.col-auto.col-lg-2 Tipo
            th.col-auto.col-lg-5 Justificación técnica
            th.col-auto.col-lg-2 Significativo
        tbody
          tr
            td.text-start Recepción.
            td.text-start Alta carga microbiana.
            td.text-start Biológico.
            td.text-start Posible presencia de patógenos.
            td.text-start Sí.
          tr
            td.text-start Pasteurización
            td.text-start Tratamiento térmico insuficiente.
            td.text-start Biológico.
            td.text-start Supervivencia microbiana.
            td.text-start Sí.
          tr
            td.text-start Envasado
            td.text-start Contaminación cruzada.
            td.text-start Biológico.
            td.text-start Exposición ambiental.
            td.text-start Sí.

    .bg_img_16.mb-3

      .row.justify-content-center.align-items-center.mb-5 
        .col-8.col-lg-8.col-xl-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema4/img_12.png', class="img-fluid")
        .col-12.col-lg-8.col-xl-12
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--16
                h6.text-white.text-center.bg-color--primario-o.text-center.fw-bold.p-3 Determinación de Puntos Críticos de Control (PCC)
                .tarjeta--slider__content Aplicando el árbol de decisión, la pasteurización se determina como PCC, ya que constituye la etapa diseñada para eliminar microorganismos patógenos y no existe una etapa posterior que compense una falla térmica.
              .tarjeta--color-white.h-100
                .tarjeta--17
                h6.text-white.text-center.bg-color--primario-o.text-center.fw-bold.p-3 Establecimiento de límites críticos
                .tarjeta--slider__content 
                  p.mb-3 Los límites críticos deben estar respaldados por validación científica. 
                  p.mb-0 Para leche pasteurizada:
                  ul.list-unstyled.mb-3
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Temperatura mínima: 72 °C.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Tiempo mínimo: 15 segundos.
                  span.mb-0 La ISO 22000:2023 establece que los límites deben ser medibles, verificables y documentados (ISO, 2023).
              .tarjeta--color-white.h-100
                .tarjeta--18
                h6.text-white.text-center.bg-color--primario-o.text-center.fw-bold.p-3 Monitoreo
                .tarjeta--slider__content 
                  p.mb-3 El monitoreo debe ser continuo o con frecuencia suficiente para detectar desviaciones oportunamente. 
                  p.mb-0 Incluye:
                  ul.list-unstyled.mb-3
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Termómetros calibrados.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Registros automáticos o manuales.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Supervisión por personal capacitado.
              .tarjeta--color-white.h-100
                .tarjeta--19
                h6.text-white.text-center.bg-color--primario-o.text-center.fw-bold.p-3 Acciones correctivas
                .tarjeta--slider__content 
                  p.mb-3 Ante desviación:
                  ul.list-unstyled.mb-3
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Retención del lote afectado.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Evaluación del producto.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Corrección de causa raíz.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Registro documentado del evento.
                  p.mb-0 El Codex (2023) indica que las acciones correctivas deben estar definidas previamente, evitando improvisación.
              .tarjeta--color-white.h-100
                .tarjeta--20
                h6.text-white.text-center.bg-color--primario-o.text-center.fw-bold.p-3 Verificación
                .tarjeta--slider__content 
                  p.mb-3 Incluye
                  ul.list-unstyled.mb-3
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Auditorías internas.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Revisión periódica del plan APPCC.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Ensayos microbiológicos.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Calibración de instrumentos.
                  p.mb-0 La verificación confirma que el sistema funciona según lo planificado.
              .tarjeta--color-white.h-100
                .tarjeta--21
                h6.text-white.text-center.bg-color--primario-o.text-center.fw-bold.p-3 Documentación
                .tarjeta--slider__content 
                  p.mb-3 La documentación proporciona evidencia objetiva del control del proceso. 
                  p.mb-0 Incluye:
                  ul.list-unstyled.mb-3
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Plan APPCC aprobado.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Registros de monitoreo.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Informes de desviaciones.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Resultados de verificación.
                  p.mb-0 Sin documentación, no es posible demostrar conformidad técnica ante autoridades o auditorías (ISO, 2023).
    
    .tarjeta.color-secundario-cv.p-4.rounded-0.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema4/img_19.svg', class="img-fluid")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 En el proceso de producción de leche pasteurizada, la aplicación de los siete principios del sistema APPCC permite identificar y controlar de manera sistemática los peligros biológicos, especialmente mediante la definición de la pasteurización como punto crítico de control, el establecimiento de límites de tiempo y temperatura, el monitoreo continuo y la verificación documentada del proceso. Este enfoque preventivo asegura la inocuidad del producto, fortalece el cumplimiento normativo y contribuye de manera directa a la protección de la salud pública.
</template>

<script>
export default {
  name: 'Tema4',
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
