<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Plan de pruebas del #[i software]
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 El plan de pruebas del #[i software] organiza la revisión del producto mediante actividades previamente definidas. Su propósito es establecer condiciones claras para comprobar el cumplimiento de los requisitos, registrar resultados y sustentar decisiones sobre aceptación, corrección o mejora.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 500px").m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto y propósito del plan de pruebas
      p.mb-5 El plan de pruebas orienta la comprobación del funcionamiento y la calidad del #[i software], organiza las actividades antes de su ejecución y permite verificar el cumplimiento de requisitos y resultados esperados. Su propósito puede comprenderse desde las siguientes perspectivas:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img2.jpg', alt="" ).m-auto
              h4.text-center Perspectiva del cliente
              .box___card_sinbordes_p
                p.mb-0.text-center Permite comprobar si el #[i software] responde a las necesidades, requisitos y condiciones de aceptación definidas para el producto.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img3.jpg', alt="" ).m-auto
              h4.text-center Perspectiva técnica
              .box___card_sinbordes_p
                p.mb-0.text-center Facilita identificar defectos, inconsistencias o fallas de implementación mediante actividades de prueba organizadas y previamente definidas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img4.jpg', alt="" ).m-auto
              h4.text-center Perspectiva de calidad
              .box___card_sinbordes_p
                p.mb-0.text-center Permite registrar evidencias, relacionar los resultados con los requisitos y sustentar decisiones sobre aceptación, corrección o mejora del producto.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img5.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_1.color___1.fit___box_2(data-aos="fade-left")
            p La planificación de las pruebas debe responder preguntas que orienten su alcance, ejecución y registro de resultados:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué funcionalidades y requisitos se comprobarán? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué tipos de prueba se aplicarán? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué datos se utilizarán? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué resultados se esperan? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cómo se registrarán los resultados y defectos? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Quiénes serán responsables de ejecutar y revisar las pruebas?
      p.mb-5 La aplicación del plan puede comprenderse mediante una situación asociada con el registro de productos en un sistema de inventario:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img6.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br 
          br
          p Si el cliente solicita registrar productos en inventario, el plan debe definir cómo se comprobará esta funcionalidad, qué datos se utilizarán, qué validaciones se esperan, cuál debe ser el resultado y qué evidencia se conservará.
      p.mb-0 Un plan de pruebas organiza la comprobación del #[i software], reduce la improvisación y facilita la identificación de defectos, la trazabilidad y el registro de evidencias para una revisión objetiva y controlada.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Elementos que conforman el plan de pruebas
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 El plan de pruebas reúne la información necesaria para organizar su ejecución y documentación. Aunque su estructura puede variar según las características del proyecto, debe definir qué se comprobará, bajo qué condiciones se realizarán las pruebas, quiénes participarán y cómo se registrarán los resultados. Sus principales elementos son los siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img7.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación del plan").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra el nombre del proyecto, versión del documento, fecha y responsables. Esta información permite reconocer el plan utilizado y mantener control sobre sus actualizaciones.
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define qué se busca comprobar mediante las pruebas y orienta las actividades hacia los requisitos y condiciones de calidad establecidos.
            .row(titulo="Alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina las funcionalidades, módulos, componentes o requisitos que serán incluidos en las pruebas y delimita aquello que queda fuera de la revisión.
            .row(titulo="Requisitos asociados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona el plan con los requisitos funcionales y no funcionales que deben verificarse durante la ejecución de las pruebas.
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Tipos de prueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece las pruebas que se aplicarán según el propósito de la revisión, como funcionales, unitarias o de aceptación.
            .row(titulo="Ambiente de prueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define las condiciones técnicas en las que se ejecutarán las pruebas, como navegador, dispositivo, servidor, base de datos, configuración o perfiles de usuario.
            .row(titulo="Datos de prueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Especifica la información que se utilizará para comprobar el comportamiento del sistema en los escenarios definidos.
            .row(titulo="Casos de prueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica los escenarios previstos para comprobar requisitos o condiciones específicas. Su estructura y diseño se desarrollan posteriormente en el subtema 3.3.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img8.png", alt="" style="width: 350px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img9.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Criterios de aceptación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establecen las condiciones que deben cumplirse para determinar si el comportamiento obtenido corresponde con el resultado esperado.
            .row(titulo="Registro de hallazgos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Forma en que se documentarán defectos, incidencias o no conformidades.
            .row(titulo="Responsables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define quién diseña, ejecuta, revisa y valida las pruebas, de acuerdo con la organización del proyecto.
            .row(titulo="Conclusiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Resultado general de la ejecución del plan.
      p.mb-5 Cada elemento responde a una pregunta específica que facilita su definición dentro del plan, como se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Elementos del plan de pruebas, preguntas orientadoras y ejemplos
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Elemento
                  th.ajuste-border-tabla.texto-left Pregunta orientadora
                  th.texto-left Ejemplo
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Objetivo
                  td.ajuste-border-tabla.texto-left ¿Para qué se realizarán las pruebas?
                  td.texto-left Verificar el registro y consulta de productos.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alcance
                  td.ajuste-border-tabla.texto-left ¿Qué se probará?
                  td.texto-left Módulos de productos, usuarios y reportes.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Datos
                  td.ajuste-border-tabla.texto-left ¿Con qué información se probará?
                  td.texto-left Producto con código, nombre, categoría y cantidad.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ambiente
                  td.ajuste-border-tabla.texto-left ¿Dónde se ejecutará la prueba?
                  td.texto-left Navegador web, base de datos de prueba y usuario auxiliar.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Criterio de aceptación
                  td.ajuste-border-tabla.texto-left ¿Cuándo se considera exitosa?
                  td.texto-left El producto se guarda y aparece en la consulta.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El alcance debe precisar qué será probado y el ambiente debe definir las condiciones técnicas de ejecución, ya que el comportamiento del #[i software] puede variar según la configuración utilizada. Los casos de prueba concretan las situaciones para verificar cada requisito, mientras que el registro de resultados permite identificar su estado y facilitar el seguimiento. En conjunto, estos elementos organizan la ejecución y sustentan la revisión de calidad del producto.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Diseño de casos de prueba según requisitos del cliente
      .bg___color_2
        .px-5
          p.mb-5 El diseño de casos de prueba convierte los requisitos del cliente en escenarios verificables, mediante condiciones, datos, acciones y resultados esperados que orientan una ejecución clara y repetible. Sus principales elementos son los siguientes:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Estructura básica de un caso de prueba
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Campo
                      th.texto-left Descripción aplicada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Código
                      td.texto-left CP-01
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisito asociado
                      td.texto-left RF-01: Registrar productos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nombre del caso
                      td.texto-left Registro exitoso de producto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Condición previa
                      td.texto-left El usuario debe haber iniciado sesión como administrador.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Datos de entrada
                      td.texto-left Código, nombre, categoría, cantidad y precio.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pasos
                      td.texto-left Ingresar al módulo, diligenciar campos y guardar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado esperado
                      td.texto-left El sistema guarda el producto y presenta mensaje de confirmación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estado
                      td.texto-left Aprobado, fallido o pendiente.
          .box___style_3.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl.order-2.order-lg-1.fit___box_container
                p.mb-0 Un mismo requisito puede generar diferentes casos de prueba. Los casos positivos comprueban el funcionamiento con datos y condiciones válidas, mientras que los negativos verifican la respuesta del sistema ante datos incorrectos, incompletos, duplicados o no permitidos.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Para profundizar en la construcción de casos de prueba a partir de los requisitos del cliente, se dispone del siguiente video. Acceda e identifique cómo convertir un requisito en casos de prueba, considerando escenarios válidos e inválidos, datos de entrada, condiciones previas y resultados esperados:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Del requisito al caso de prueba
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Trazabilidad entre requisitos, pruebas y resultados
      p.mb-5 La trazabilidad relaciona requisitos, casos de prueba, resultados y evidencias para comprobar la cobertura de la revisión y mantener coherencia entre lo solicitado, probado y obtenido. Esta relación puede organizarse mediante la siguiente matriz:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 8.
        span Matriz de trazabilidad entre requisitos, pruebas y resultados
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Código de requisito
              th.ajuste-border-tabla.texto-left Descripción del requisito
              th.ajuste-border-tabla.texto-left Caso de prueba
              th.ajuste-border-tabla.texto-left Resultado
              th.texto-left Estado
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold RF-01
              td.ajuste-border-tabla.texto-left Registrar productos.
              td.ajuste-border-tabla.texto-left CP-01
              td.ajuste-border-tabla.texto-left Producto guardado correctamente.
              td.texto-left Aprobado
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold RF-02
              td.ajuste-border-tabla.texto-left Evitar productos duplicados.
              td.ajuste-border-tabla.texto-left CP-02
              td.ajuste-border-tabla.texto-left El sistema permitió duplicidad.
              td.texto-left Fallido
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold RF-03
              td.ajuste-border-tabla.texto-left Consultar productos por categoría.
              td.ajuste-border-tabla.texto-left CP-03
              td.ajuste-border-tabla.texto-left Consulta correcta.
              td.texto-left Aprobado
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold RNF-01
              td.ajuste-border-tabla.texto-left Controlar acceso por roles.
              td.ajuste-border-tabla.texto-left CP-04
              td.ajuste-border-tabla.texto-left Usuario sin permiso accedió al módulo.
              td.texto-left Fallido
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img12.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La trazabilidad también facilita analizar el impacto de los cambios y comunicar el estado de la revisión. Si un requisito se modifica, permite identificar qué casos deben actualizarse, qué resultados pierden vigencia y qué nuevas comprobaciones son necesarias.
      p.mb-5 La trazabilidad debe mantenerse durante todo el proceso de pruebas mediante las siguientes acciones:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Relacionar requisitos y casos
                p.mb-0 Durante la planificación, cada requisito se vincula con uno o varios casos de prueba que permitan comprobar su cumplimiento.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img13.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img14.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Registrar resultados
                p.mb-0 Durante la ejecución, se documenta el resultado obtenido para cada caso y se conserva la evidencia correspondiente.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Asociar hallazgos
                p.mb-0 Cuando una prueba falla, el defecto o incidencia se relaciona con el requisito afectado y el caso ejecutado.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Actualizar después de los ajustes
                p.mb-0 Después de una corrección, se actualiza el estado del hallazgo y se ejecutan nuevamente las pruebas necesarias.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Consolidar evidencias
                p.mb-0 Al finalizar, se presentan resultados que permitan sustentar la cobertura, el cumplimiento y las decisiones adoptadas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img17.png', alt='' style="width: 300px").m-auto
      p.mb-0 La trazabilidad evita pruebas aisladas y resultados sin relación con los requisitos. Su adecuada gestión permite mantener una revisión ordenada, verificable y orientada a las necesidades del cliente.

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
