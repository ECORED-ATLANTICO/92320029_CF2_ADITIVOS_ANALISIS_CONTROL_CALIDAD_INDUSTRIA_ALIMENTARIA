<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prerrequisitos del sistema APPCC
    
    .bg_img_10.mb-3
      .tarjeta--bg-img.color-primario-cv.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
                img(src='@/assets/curso/tema3/img_2.png', class="img-fluid w-100 h-100 object-fit-cover").p-0
          .col-12.col-lg-7.p-4
            p.mb-0 Los Programas Prerrequisito (PPR) constituyen el soporte estructural del sistema APPCC y representan las condiciones operativas básicas necesarias para garantizar un entorno de producción higiénico y controlado. No son opcionales ni complementarios; son obligatorios para la implementación efectiva del análisis de peligros.

      .row.d-flex.align-items-stretch.justify-content-center.mb-0 
        .col-12.col-md-5.col-lg-5.col-xl-3.d-flex.mb-3.mb-xl-0.mb-3(data-aos="flip-left")
          .w-100.d-flex.flex-column
            .tarjeta--blanca-2.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-6.col-lg-5.mb-3
                  figure
                    img(src="@/assets/curso/tema3/img_3.svg", class="img-fluid")
                .col-12.col-lg-12
                  p.mb-3 El <em>Codex Alimentarius</em> (2023) establece que antes de aplicar un plan APPCC, toda organización debe asegurar la implementación de prácticas generales de higiene que controlen peligros comunes del ambiente productivo. Esto significa que el APPCC no sustituye las Buenas Prácticas de Manufactura, sino que se apoya en ellas.
        .col-12.col-md-7.col-lg-7.col-xl-6.d-flex.mb-3.mb-xl-0.mb-3(data-aos="flip-left")
          .w-100.d-flex.flex-column
            .tarjeta--blanca-2.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-6.col-lg-2.mb-3
                  figure
                    img(src="@/assets/curso/tema3/img_4.svg", class="img-fluid")
                .col-12.col-lg-12
                  p.mb-3 Desde la perspectiva de gestión del riesgo, los PPR reducen la probabilidad basal de ocurrencia de peligros, permitiendo que el sistema APPCC se concentre exclusivamente en los peligros significativos que requieren control específico (FAO, 2023).
                  p.mb-3 En términos operativos:
                  ul.list-unstyled.mb-1
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Los PPR controlan el entorno.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span El APPCC controla etapas críticas del proceso.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Ambos sistemas son interdependientes.
        .col-12.col-md-6.col-lg-6.col-xl-3.d-flex.mb-3.mb-xl-0.mb-3(data-aos="flip-left")
          figure
            img(src="@/assets/curso/tema3/img_5.png", class="img-fluid")

    Separador

    #t_3_1.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 3.1 Buenas Prácticas de Manufactura (BPM)
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema3/img_6.png', class="img-fluid ")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son el conjunto de principios y procedimientos fundamentales que deben ser aplicados para garantizar que los alimentos se fabriquen, manipulen y almacenen de forma segura y consistente. Asimismo, establecen requisitos técnicos relacionados con infraestructura, higiene del personal, control de materias primas, mantenimiento y saneamiento.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/tema3/img_7.png', class="img-fluid")

    .bg_img_11.mb-3

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema2/img_13.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--10
                .tarjeta--slider__content La ISO 22000:2023 indica que los programas prerrequisito deben estar documentados, implementados y verificados de manera sistemática, con registros que demuestren su ejecución efectiva (ISO, 2023). Esto implica que no basta con tener procedimientos escritos; es necesario evidenciar su aplicación.
              .tarjeta--color-white.h-100
                .tarjeta--11
                .tarjeta--slider__content 
                  p.mb-3 Desde un enfoque preventivo, las BPM:
                  ul.list-unstyled.mb-1
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Reducen la contaminación cruzada.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Disminuyen la carga microbiana ambiental.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Controlan peligros físicos derivados del entorno.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Estandarizan prácticas operativas.
              .tarjeta--color-white.h-100(data-aos="zoom-out-up")
                .tarjeta--12
                .tarjeta--slider__content Las BPM actúan como barrera primaria de inocuidad. Si esta barrera falla, el sistema APPCC se ve sobrecargado y pierde eficacia técnica. Por esta razón, la literatura reciente enfatiza que los sistemas modernos de inocuidad deben integrar cultura organizacional, liderazgo y compromiso directivo dentro de los prerrequisitos (FAO & WHO, 2024).
      
      .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-out-up")
        p.mb-0 La correcta implementación de las BPM establece las condiciones ambientales y operacionales necesarias antes de aplicar el sistema de Análisis de Peligros y Puntos Críticos de Control (APPCC/HACCP).

    p.mb-5(data-aos="zoom-out-up") Los requisitos técnicos de las BPM se extienden más allá de la infraestructura y el personal, cubriendo toda la cadena operativa en la planta de producción:

    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Requisitos técnicos de las BMP
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de la Norma ISO 22000:2023.
        thead
          tr
            th.col-auto.col-lg-3 Aspecto BPM
            th.col-auto.col-lg-auto Requisitos Ampliados
        tbody
          tr
            td.text-start Instalaciones y ubicación.
            td.text-start Deben estar ubicadas en un entorno seguro y construidas de forma que se minimice el riesgo de contaminación. El diseño interno debe permitir un flujo de trabajo lógico (flujo hacia adelante) y evitar la contaminación cruzada. Los materiales deben ser resistentes, fáciles de limpiar y desinfectar.
          tr
            td.text-start Equipos y utensilios.
            td.text-start Fabricados en materiales no tóxicos y que favorezcan la higiene. Deben ser fáciles de desmontar y resistir la acción de productos químicos y altas temperaturas para un correcto saneamiento. Es fundamental que formen parte del programa de limpieza y desinfección.
          tr
            td.text-start Higiene del personal.
            td.text-start Requiere una certificación médica que acredite la aptitud para manipular alimentos. Implica una higiene y presentación personal impecable y controles de higiene periódicos. La capacitación continua en Buenas Prácticas de Higiene es responsabilidad de la empresa.
          tr
            td.text-start Control de materias primas.
            td.text-start Exige un mecanismo de trazabilidad eficiente desde la recepción hasta la entrega del producto. Todas las materias primas deben pasar por un control e inspección riguroso para asegurar la ausencia de microorganismos, tóxicos o elementos extraños.
          tr
            td.text-start Saneamiento y control de plagas.
            td.text-start Implementación de Procedimientos Operativos Estandarizados de Saneamiento (POES) o Saneamiento Básico, que incluyen la gestión de residuos y el control integral de plagas.

    .cita-decorada.mb-5(data-aos="zoom-in-right")
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-11
            p.cita-decorada__texto.mb-2.p-3 La interconexión estratégica entre las Buenas Prácticas de Manufactura (BPM), el sistema APPCC y la norma ISO 22000 es fundamental, ya que todos los sistemas de gestión de la inocuidad alimentaria son complementarios. Las BPM constituyen la base sobre la cual se construyen el APPCC y el Sistema de Gestión de Inocuidad Alimentaria (SGIA).
          .col-2.col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img_13.svg', class="cita-decorada__imagen-flotante-1")
    
    .bg_img_12.mb-3

      p.mb-5(data-aos="zoom-out-up") La relación entre estos sistemas se define de la siguiente manera:

      .row.justify-content-center.mb-5
        .col-xl-6.col-lg-6.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure.m-0
                img(src="@/assets/curso/tema3/img_15.png", class="img-fluid")
            .crd_hover_txt--body
              h4.mb-0 BPM → APPCC
              p.mb-0 las BPM controlan peligros de baja probabilidad, pero alto impacto, como fallas en higiene o infraestructura. Unas BPM sólidas permiten que el sistema APPCC se enfoque en peligros específicos del proceso (Puntos Críticos de Control), optimizando su eficacia técnica y evitando la sobrecarga del sistema.

        .col-xl-6.col-lg-6.col-md-8.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure.m-0
                img(src="@/assets/curso/tema3/img_16.png", class="img-fluid")
            .crd_hover_txt--body
              h4.mb-0 BPM + APPCC → ISO 22000
              p.mb-0 la norma ISO 22000 integra los Programas de Prerrequisitos (BPM y otros) con el enfoque sistemático del APPCC para identificar, evaluar y controlar peligros. Además, incorpora principios de gestión de la calidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_17.png', class="img-fluid") 
      .col-12.col-lg-8(data-aos="zoom-in-right")
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema3/img_18.png', class="img-fluid p-2")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 La certificación ISO 22000:2018 demuestra el compromiso de la organización con la inocuidad a lo largo de toda la cadena de suministro.
        p.mb-3(data-aos="zoom-out-up") Además del enfoque preventivo, la implementación rigurosa de las BPM aporta beneficios clave para la organización y su mercado:
        ul.list-unstyled.mb-1
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span <B>Mejora de la gestión de calidad:</B> fortalecen los sistemas internos de calidad y la comunicación dentro de la organización.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span <B>Eficiencia Operativa:</B> disminuyen los costos asociados a productos no conformes, aumentan la eficiencia y permiten la estandarización de procesos.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span <B>Cumplimiento Normativo:</B> demuestran conformidad con los requisitos legales nacionales e internacionales.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span <B>Acceso a Mercados:</B> cumplen con requisitos esenciales para la apertura y mantenimiento de mercados internacionales.
          li.d-flex.align-items-start.mb-0
            i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
            span <B>Confianza del Consumidor:</B> generan confianza en los clientes y la sociedad, mejorando la imagen del producto y de la empresa.

    .tarjeta.color-primario-cv.p-3.rounded-0.mb-3(data-aos="zoom-out-up")
      p.mb-0 Las Buenas Prácticas de Manufactura (BPM) constituyen la base de la cultura de inocuidad organizacional. Según la FAO y la OMS (2024), su eficacia depende del liderazgo y el compromiso directivo en la asignación de recursos y priorización estratégica.
    
    p.mb-5(data-aos="zoom-out-up") Dado que esta cultura se fundamenta en valores compartidos, las BPM solo son efectivas cuando el personal las interioriza y aplica consistentemente. Su éxito requiere un proceso de mejora continua que garantice controles sólidos y adaptables ante nuevos riesgos sanitarios.

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
                  h4.mb-1 Ingrese a este enlace y vea este video para fortalecer el concepto de cultura de inocuidad en las BMP, sus principios y la importancia en la gestión de la cultura organizacional: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qrsBj6y82f8" target="_blank")
                    span Enlace
                    i.fas.fa-link.me-2

    Separador

    #t_3_2.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 3.2 Programas de saneamiento
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .cita-decorada.mb-3(data-aos="zoom-in-right")
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-5.p-4
            .row.justify-content-center.align-items-center
              .col-2.col-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema3/img_19.svg', class="cita-decorada__imagen-flotante-1")
              .col-12.col-lg-10
                p.cita-decorada__texto.mb-2.p-3 Los programas de saneamiento constituyen el conjunto de procedimientos documentados orientados a garantizar condiciones higiénicas adecuadas en instalaciones, equipos, utensilios y superficies en contacto con los alimentos. Su objetivo principal es prevenir la contaminación cruzada y reducir la carga microbiana ambiental que pueda comprometer la inocuidad del producto.
        p.mb-0 Un programa de saneamiento técnicamente estructurado incluye:
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/tema3/img_20.png', class="img-fluid")

    .bg_img_13.mb-3

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-botones
            h5 Figura 3.
            |    Aspectos estructurales de un programa de saneamiento
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema3/img_22.svg', class="img-fluid d-none d-lg-block" alt="La figura 3 enuncia los aspectos estructurales de un problema programa de saneamiento: Procedimientos de limpieza y desinfección. Frecuencias definidas. Productos químicos autorizados y concentraciones. Métodos de aplicación. Responsables asignados. Registros de ejecución y verificación.").mb-5
            img(src='@/assets/curso/tema3/img_23.svg', class="img-fluid d-block d-lg-none" alt="La figura 3 enuncia los aspectos estructurales de un problema programa de saneamiento: Procedimientos de limpieza y desinfección. Frecuencias definidas. Productos químicos autorizados y concentraciones. Métodos de aplicación. Responsables asignados. Registros de ejecución y verificación.").mb-5
            figcaption Nota. Adaptado del <em>Codex Alimentarius</em> (2023). 

    .row.justify-content-center.align-items-center.mb-3 
      .col-12.col-lg-1.mb-3.mb-lg-0.d-none.d-lg-block(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema3/img_24.png', class="img-fluid p-2")
      .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          p.mb-0 El saneamiento se basa en principios microbiológicos orientados a reducir la carga de patógenos en superficies, equipos y ambientes y lo componen dos etapas diferenciadas: limpieza y desinfección. 
      
    .bg_img_14.mb-3

      p.mb-0(data-aos="zoom-in-right") El <em>Codex Alimentarius</em> (2023) señala que los procedimientos de limpieza y desinfección deben validarse científicamente para asegurar que eliminan o reducen los peligros a niveles aceptables.

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema3/img_26.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-5.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--13
                .tarjeta--slider__content 
                  p.mb-3 El saneamiento se basa en dos etapas diferenciadas:
                  ul.list-unstyled.mb-1
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span <B>Limpieza:</B> eliminación de residuos visibles y materia orgánica.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span <B>Desinfección:</B> reducción de microorganismos a niveles seguros mediante agentes químicos o físicos.
              .tarjeta--color-white.h-100
                .tarjeta--14
                .tarjeta--slider__content 
                  p.mb-3 La validación de cada etapa del saneamiento puede incluir: 
                  ul.list-unstyled.mb-1
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Pruebas microbiológicas.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Evaluación de residuos.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span Monitoreo ambiental.
              .tarjeta--color-white.h-100(data-aos="zoom-out-up")
                .tarjeta--15
                .tarjeta--slider__content 
                  p.mb-3 Desde el punto de vista técnico: 
                  ul.list-unstyled.mb-1
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span La limpieza remueve materia orgánica.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span La desinfección actúa sobre microorganismos.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                      span La verificación confirma eficacia.
                  p.mb-0 Sin verificación objetiva, el programa carece de confiabilidad.

    .cita-decorada.mb-5(data-aos="zoom-in-right")
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-11
            p.cita-decorada__texto.mb-2.p-3 La eficacia del programa debe verificarse mediante inspección visual, pruebas microbiológicas de superficies o monitoreo de indicadores de higiene. Un programa de saneamiento sólido actúa como barrera primaria dentro del sistema APPCC, reduciendo la probabilidad de que los peligros se materialicen en etapas posteriores del proceso.
          .col-2.col-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img_30.svg', class="cita-decorada__imagen-flotante-1")

    Separador

    #t_3_3.titulo-segundo.color-primario
      .h2(data-aos="fade-right") 3.3 Trazabilidad, control de proveedores y capacitación
    .mb-0  

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        .tarjeta.color-secundario-cv.p-3.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema3/img_31.png', class="img-fluid p-2")
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 La trazabilidad, el control de proveedores y la capacitación son, junto con el saneamiento, programas prerrequisito para un sistema de APPCC robusto y eficiente.
        p.mb-0 A continuación, se presenta una tabla que amplía la definición técnica de cada uno de estos componentes:
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/tema3/img_32.png', class="img-fluid")
    
    .titulo-sexto.color-acento-botones(data-aos="zoom-in-right")
      h5 Tabla 5.
      |  Programas prerrequisito clave en el sistema APPCC
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, 2026.
        thead
          tr
            th.col-auto.col-lg-3 Programa prerrequisito
            th.col-auto.col-lg-3 Definición técnica
            th.col-auto.col-lg-auto Efectividad
        tbody
          tr
            td.text-start Programas de saneamiento.
            td.text-start Conjunto de procedimientos documentados para limpieza y desinfección de instalaciones, equipos y superficies en contacto con alimentos.
            td.text-start 
              p.mb-3 Un programa de saneamiento efectivo se verifica mediante:
              ul.list-unstyled.mb-1
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Inspección visual.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Pruebas microbiológicas de las superficies.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Monitoreo de indicadores para la higiene.
          tr
            td.text-start Trazabilidad.
            td.text-start Capacidad de rastrear materias primas y productos a lo largo de la cadena productiva.
            td.text-start 
              p.mb-3 Un sistema de trazabilidad efectivo debe permitir:
              ul.list-unstyled.mb-1
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Identificar proveedores de materias primas.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Asociar lotes de producción con fechas y procesos específicos.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Rastrear la distribución del producto terminado.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Ejecutar retiros o llamados al mercado de manera controlada.
          tr
            td.text-start Control de proveedores.
            td.text-start Proceso sistemático de evaluación y seguimiento de proveedores para garantizar cumplimiento de requisitos sanitarios y de calidad.
            td.text-start 
              p.mb-3 Un sistema de control de proveedores efectivo incluye:
              ul.list-unstyled.mb-1
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Evaluación y selección basada en criterios técnicos.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Solicitud de certificaciones sanitarias.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Auditorías o visitas técnicas cuando sea necesario.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Especificaciones claras de materia prima.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Evaluación periódica del desempeño del proveedor.
          tr
            td.text-start Capacitación del personal.
            td.text-start Proceso continuo de formación para asegurar correcta aplicación de BPM y APPCC.
            td.text-start 
              p.mb-3 Un programa de capacitación efectivo debe ser: 
              ul.list-unstyled.mb-1
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Permanente.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Documentado.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Evaluable.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-circle-arrow-right.me-2.flex-shrink-0(style="color:#B8D0F3; font-size: 15px; line-height: 1.5;").mb-0
                  span Adaptado al nivel de responsabilidad del trabajador.
</template>

<script>
export default {
  name: 'Tema3',
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
