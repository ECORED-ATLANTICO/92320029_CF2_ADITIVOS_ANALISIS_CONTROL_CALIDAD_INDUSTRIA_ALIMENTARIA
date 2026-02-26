<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de calidad e inocuidad alimentaria
   
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_1.png', class="img-fluid") 
      .col-12.col-lg-7(data-aos='zoom-in-right')
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_2.png', class="img-fluid")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 La calidad alimentaria integra atributos sensoriales, tecnológicos, nutricionales y sanitarios que determinan la aptitud del alimento para el consumo. La inocuidad, por su parte, constituye un requisito esencial orientado a la protección de la salud pública mediante la identificación y control de peligros biológicos, químicos y físicos. El enfoque preventivo basado en la evaluación de riesgos se consolida como fundamento técnico para la implementación del sistema de Análisis de Peligros y Puntos Críticos de Control (APPCC).

    Separador

    #t_1_1.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 1.1 Concepto de calidad en alimentos
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_3.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0 La calidad en los alimentos se define como el conjunto de características intrínsecas y extrínsecas que determinan su aptitud para satisfacer requisitos establecidos, tanto regulatorios como del consumidor. En el ámbito agroalimentario, la calidad no se limita a atributos sensoriales (color, textura, sabor o aroma), sino que integra aspectos fisicoquímicos, microbiológicos, tecnológicos, nutricionales y de inocuidad.
        p.mb-0(data-aos="zoom-in-right") Desde una perspectiva técnica, la calidad alimentaria se evalúa mediante parámetros medibles y verificables, tales como:
    
    .bg_img_1.mb-3

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 1.
            |    Parámetros de medición y verificación de la calidad alimentaria
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema1/img_5.svg', class="img-fluid d-none d-lg-block").mb-5
            img(src='@/assets/curso/tema1/img_6.svg', class="img-fluid d-block d-lg-none").mb-5
            figcaption Nota. Adaptado de la Organización Internacional de Normalización (ISO, 2023).
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-12(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.cita-decorada__texto.mb-2.p-3 La Organización Internacional de Normalización (ISO) establece que la calidad implica el grado en el que un conjunto de características cumple con requisitos definidos (ISO, 2023). En alimentos, dichos requisitos incluyen estándares sanitarios, límites microbiológicos, composición declarada y condiciones de conservación.
              .col-2.col-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/img_7.svg', class="cita-decorada__imagen-flotante-1")
        
    .bg_img_2.mb-3
      
      p.mb-5(data-aos="zoom-in-right") Actualmente, el análisis de alimentos representa una herramienta fundamental tanto para el control de calidad como para la investigación en la industria. Al analizar la calidad de un producto, se aplican diversas técnicas científicas orientadas a tres objetivos principales:

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                .tarjeta--slider__content.text-center Determinación nutricional: identificar la proporción de componentes mayoritarios y minoritarios con valor nutricional.
              .tarjeta--color-white.h-100
                .tarjeta--02
                .tarjeta--slider__content.text-center Detección de componentes externos: analizar cualitativa y cuantitativamente la presencia de aditivos utilizados en la producción y de contaminantes adquiridos.
              .tarjeta--color-white.h-100
                .tarjeta--03
                .tarjeta--slider__content.text-center Evaluación de alteraciones: establecer qué componentes se forman durante procesos como la cocción o la refrigeración y determinar su grado de toxicidad.
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema1/img_12.png', class="img-fluid")
      
      p.mb-5(data-aos="zoom-in-right") La calidad alimentaria puede analizarse en cuatro dimensiones principales:

      .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
        h5 Tabla 1.
        |  Dimensiones de la calidad en los alimentos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de FAO (2023) y Codex Alimentarius (2023).
        thead
          tr
            th.col-auto.col-lg-2 Dimensión
            th.col-auto.col-lg-4 Descripción técnica
            th.col-auto.col-lg-auto Ejemplo aplicado
        tbody
          tr
            td.text-start Sensorial.
            td.text-start Características percibidas por los sentidos.
            td.text-start Color uniforme en un embutido.
          tr
            td.text-start Nutricional.
            td.text-start Contenido de nutrientes y aporte energético.
            td.text-start Declaración correcta de proteínas.
          tr
            td.text-start Tecnológica.
            td.text-start Comportamiento durante procesamiento y almacenamiento.
            td.text-start Estabilidad de emulsiones.
          tr
            td.text-start Sanitaria.
            td.text-start Ausencia de peligros para la salud.
            td.text-start Cumplimiento de límites microbiológicos.

    Separador

    #t_1_2.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 1.2 Inocuidad alimentaria y riesgos asociados
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_13.png', class="img-fluid") 
      .col-12.col-lg-9(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-12(data-aos="zoom-in-right")
            .cita-decorada
              blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
                .row.justify-content-center.align-items-center
                  .col-12.col-lg-10
                    p.cita-decorada__texto.mb-2.p-0 La inocuidad alimentaria se refiere a la garantía de que un alimento no causará daño al consumidor cuando se prepare y consuma conforme a su uso previsto.
                    p.cita-decorada__texto.mb-2.p-3 Este concepto se fundamenta en la prevención de peligros biológicos, químicos y físicos que puedan afectar la salud pública. A diferencia de la calidad sensorial o comercial, la inocuidad constituye un requisito obligatorio e innegociable.
                  .col-2.col-lg-1.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/img_14.svg', class="cita-decorada__imagen-flotante-1")
        
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0 Es importante precisar que, si bien la inocuidad y la calidad son conceptos relacionados, no son sinónimos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-lg-block.d-none.p-4(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_15.png', class="img-fluid")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        p.mb-0 La diferencia fundamental radica en que la inocuidad es un requisito obligatorio y no negociable que garantiza que el alimento no causará daño a la salud del consumidor mediante la ausencia de peligros biológicos, químicos o físicos. Por otro lado, la calidad se refiere al conjunto de atributos como el sabor, color, textura y valor nutricional, los cuales permiten que un producto satisfaga las expectativas y preferencias comerciales del cliente.
    
    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Dimensiones de la calidad en los alimentos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Adaptado de FAO (2023) y Codex Alimentarius (2023).
        thead
          tr
            th.col-auto.col-lg-2 Aspecto
            th.col-auto.col-lg-4 Calidad
            th.col-auto.col-lg-auto Inocuidad
        tbody
          tr
            td.text-start Enfoque.
            td.text-start Satisfacción de requisitos y expectativas.
            td.text-start Protección de la salud pública.
          tr
            td.text-start Carácter.
            td.text-start Puede variar según mercado.
            td.text-start Obligatoria y regulada.
          tr
            td.text-start Evaluación.
            td.text-start Sensorial, técnica y comercial.
            td.text-start Análisis de riesgos y control sanitario.
          tr
            td.text-start Ejemplo.
            td.text-start Producto con buena textura.
            td.text-start Producto libre de Salmonella.
    
    .bg_img_3.mb-3
 
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1(data-aos='zoom-in-right')
          .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
            p.mb-0 En conclusión, mientras que la inocuidad se centra estrictamente en la seguridad del alimento, la calidad se enfoca en su excelencia y aceptación en el mercado.
          p.mb-0 El análisis de la inocuidad parte de la identificación de peligros. Estos peligros pueden ser biológicos, químicos o físicos.
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_17.png', class="img-fluid") 

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure.m-0
                img(src="@/assets/curso/tema1/img_18.png", class="img-fluid")
            .crd_hover_txt--body
              h4.mb-0 Peligros biológicos
              p.mb-3 Incluyen bacterias patógenas, virus, parásitos y hongos. 
              p.mb-0 Ejemplos: presencia de bacterias como Salmonella spp, Listeria monocytogenes o Escherichia coli O157:H7.

        .col-xl-4.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure.m-0
                img(src="@/assets/curso/tema1/img_19.png", class="img-fluid")
            .crd_hover_txt--body
              h4.mb-0 Peligros químicos
              p.mb-0 Incluyen sustancias tóxicas, naturales o añadidas, que pueden causar enfermedades agudas o crónicas.
              p.mb-0 Ejemplos: residuos de plaguicidas, metales pesados, aditivos mal dosificados micotoxinas y alérgenos.

        .col-xl-4.col-lg-5.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure.m-0
                img(src="@/assets/curso/tema1/img_20.png", class="img-fluid")
            .crd_hover_txt--body
              h4.mb-0 Peligros físicos
              p.mb-0 Incluyen objetos extraños, duros o cortantes incorporados accidentalmente durante la producción, procesamiento o manipulación.
              p.mb-0 Ejemplos: vidrio, metal, plástico, piedras, huesos, y restos de maquinaria.

    Separador

    #t_1_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 1.3 Relación entre calidad, inocuidad y salud pública
    .mb-0 
    
    .bg_img_4.mb-3
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1(data-aos='zoom-in-right')
          .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
            p.mb-0 La calidad, la inocuidad y la salud pública son dimensiones interdependientes y fundamentales dentro del sistema alimentario. La calidad abarca las características que determinan la aptitud de un alimento para el consumo, incluyendo aspectos sanitarios, nutricionales y sensoriales. Por su parte, la inocuidad es el componente esencial que garantiza que el producto no represente un riesgo para el consumidor bajo condiciones de uso previstas.
          p.mb-3 En términos operativos, la relación puede entenderse así:
          ul.list-unstyled.mb-1
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
              span La calidad garantiza conformidad con especificaciones.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
              span La inocuidad garantiza ausencia de riesgo significativo.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
              span La salud pública se protege cuando ambas se gestionan de manera integrada y preventiva.
        .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_21.png', class="img-fluid") 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema1/img_23.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--04
                .tarjeta--slider__content.text-center Desde un enfoque sanitario, la inocuidad vincula la calidad del producto con la protección de la salud pública. Un alimento puede poseer atributos comerciales aceptables, como textura o sabor, pero ser peligroso si contiene patógenos o contaminantes. Por ello, la calidad sin inocuidad carece de valor sanitario y se convierte en un factor de riesgo.
              .tarjeta--color-white.h-100
                .tarjeta--05
                .tarjeta--slider__content.text-center Cuando los sistemas de control fallan, el impacto en la salud pública es significativo. Las enfermedades transmitidas por alimentos (ETA) afectan la productividad, los sistemas hospitalarios y la confianza del consumidor. Según la FAO y la OMS (2023), la prevención de riesgos alimentarios es una estrategia clave para reducir la carga global de enfermedades asociadas a productos contaminados.
              .tarjeta--color-white.h-100
                .tarjeta--06
                .tarjeta--slider__content.text-center En este contexto, sistemas preventivos como el APPCC permiten integrar la gestión de calidad con la protección sanitaria mediante el control de peligros en puntos estratégicos. De esta forma, la calidad trasciende lo comercial para convertirse en un mecanismo de responsabilidad social y protección de la salud colectiva.
      
    .bg_img_5.mb-0
      .tarjeta.tarjeta--blanca.p-5.mb-0.rounded-5
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-8.order-2.order-lg-1(data-aos='zoom-in-right')
            h5.mb-3 Ejemplo aplicado.
            p.mb-3 En una planta productora de queso fresco, el producto cumple con características de calidad como textura, sabor y presentación. Sin embargo, durante la pasteurización no se alcanza la temperatura requerida, lo que puede permitir la supervivencia de microorganismos patógenos.
            p.mb-3 En este caso: 
            ul.list-unstyled.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Calidad: El producto cumple especificaciones comerciales.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Inocuidad: Existe falla en el control de un peligro biológico
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                span Salud pública: Si el producto se distribuye, puede generar enfermedades transmitidas por alimentos.
            .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-in-right")
              p.mb-0 El ejemplo evidencia que la calidad sin control de inocuidad no garantiza protección sanitaria. Por ello, el APPCC establece monitoreo y acciones correctivas para prevenir riesgos y proteger al consumidor.
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema1/img_28.png', class="img-fluid") 
    br
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-7
        .tarjeta.color-secundario-cv.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-6.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema1/img_29.png", class="img-fluid w-100")
            .col-12.col-lg-6.mb-lg-0
              h2.mb-3 Pódcast
              p.mb-5 Escuche el siguiente podcast y conozca información adicional sobre peligros biológicos, físicos y químicos en la industria alimentaria y cómo evitarlos: 
              TarjetaAudio.color-acento-botones.mb-0.p-5(
                texto="Etiquetas bajo la lupa"
                :audio="require('@/assets/curso/tema1/img_29.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
