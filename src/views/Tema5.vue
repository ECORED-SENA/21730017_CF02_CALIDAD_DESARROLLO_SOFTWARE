<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Análisis de resultados de pruebas
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis de resultados permite interpretar la información obtenida durante las pruebas para determinar el cumplimiento de requisitos, políticas y criterios de calidad. Su propósito es identificar qué resultados requieren corrección, ajuste, nueva revisión o aceptación del producto.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Interpretación de resultados del plan de pruebas
      .box___style_2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 La interpretación de resultados permite comparar lo obtenido durante la ejecución con lo esperado y determinar si cada prueba fue aprobada, fallida, bloqueada, quedó pendiente o requiere ajuste. Para ello, también deben considerarse el requisito asociado, la evidencia registrada, el impacto sobre el cliente y la necesidad de repetir la prueba.
      p.mb-5 Los principales estados de una prueba y las acciones asociadas son los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 12.
            span Estados de las pruebas y acciones sugeridas
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Estado de la prueba
                  th.ajuste-border-tabla.texto-left Significado
                  th.texto-left Acción sugerida
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aprobada
                  td.ajuste-border-tabla.texto-left El resultado obtenido coincide con el esperado.
                  td.texto-left Registrar evidencia y mantener trazabilidad.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fallida
                  td.ajuste-border-tabla.texto-left El resultado obtenido no cumple lo esperado.
                  td.texto-left Registrar incidencia y definir corrección.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bloqueada
                  td.ajuste-border-tabla.texto-left No fue posible ejecutar la prueba.
                  td.texto-left Resolver la causa del bloqueo y reprogramar.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pendiente
                  td.ajuste-border-tabla.texto-left Aún no ha sido ejecutada.
                  td.texto-left Programar ejecución según prioridad.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Requiere ajuste
                  td.ajuste-border-tabla.texto-left El resultado es parcial o necesita aclaración.
                  td.texto-left Revisar criterio, requisito o comportamiento esperado.
      p.mb-5 La clasificación del estado no es suficiente; también es necesario interpretar qué significa el resultado y qué impacto puede generar. El siguiente ejemplo permite comprender esta diferencia:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Si una prueba busca verificar que el sistema impida registrar productos duplicados y el resultado indica que sí los permite, no basta con clasificarla como fallida. Debe interpretarse que existe un problema de integridad de datos que puede afectar reportes, inventarios y decisiones administrativas del cliente.
          br
          br
          p La interpretación también debe considerar la cobertura del plan y la relevancia de los resultados. Una sola falla crítica puede tener mayor impacto que varias observaciones menores.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img4.png', alt='' style="width: 500px").m-auto
        .col-xl
          p Esta situación puede evidenciarse en el siguiente ejemplo:
          .box___style_1(data-aos="fade-left").color___1
            h5 Ejemplo aplicado
            p.mb-0 En un sistema de gestión de usuarios se ejecutan 20 pruebas: 18 son aprobadas y 2 fallan. Si una de las fallas permite que un usuario sin permisos acceda al módulo administrativo, su impacto es alto porque compromete la seguridad del sistema. Por ello, esta falla debe priorizarse antes de aceptar el producto.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3(data-aos="fade-right")
            p La interpretación de resultados debe permitir identificar:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pruebas aprobadas sin observaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pruebas fallidas por defectos funcionales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pruebas fallidas por problemas de datos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pruebas fallidas por permisos o seguridad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pruebas bloqueadas por condiciones técnicas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Requisitos sin cobertura de prueba.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Funcionalidades que requieren nueva revisión.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img23.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Interpretar los resultados permite convertir los datos obtenidos durante las pruebas en información útil para decidir si el producto cumple, requiere correcciones, necesita ajustes o debe someterse nuevamente a revisión.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img5.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Clasificación de defectos y no conformidades
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 La clasificación de defectos y no conformidades permite organizar los hallazgos según su naturaleza e impacto. Mientras un defecto corresponde a una falla del #[i software], una no conformidad implica el incumplimiento de un requisito, política o condición del cliente. Según el aspecto afectado, los defectos pueden clasificarse en las siguientes categorías:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos funcionales
                  p.mb-0 Se presentan cuando una funcionalidad no cumple lo solicitado o impide completar correctamente una operación.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos de datos
                  p.mb-0 Afectan la integridad, exactitud, duplicidad o almacenamiento de la información.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos de seguridad
                  p.mb-0 Permiten accesos indebidos, uso no autorizado o exposición de información sensible.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos de usabilidad
                  p.mb-0 Dificultan la interacción del usuario mediante mensajes confusos, procesos poco claros o elementos difíciles de utilizar.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img10.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos de rendimiento
                  p.mb-0 Generan lentitud, tiempos de respuesta inadecuados o consumo excesivo de recursos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos de interfaz
                  p.mb-0 Afectan la presentación, organización o claridad de los elementos que intervienen en la interacción.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos de integración
                  p.mb-0 Se presentan cuando módulos o sistemas no se comunican correctamente.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos documentales
                  p.mb-0 Se relacionan con ausencia, error o desactualización de documentos necesarios para comprender, utilizar o mantener el producto.
      p.mb-5 La clasificación también puede relacionarse con ejemplos concretos y con el impacto que cada defecto genera sobre el producto:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 13.
            span Tipos de defectos, ejemplos e impacto
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de defecto
                  th.ajuste-border-tabla.texto-left Ejemplo
                  th.texto-left Posible impacto
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Funcional
                  td.ajuste-border-tabla.texto-left El sistema no guarda un registro válido.
                  td.texto-left Impide completar un proceso.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Datos
                  td.ajuste-border-tabla.texto-left Permite registros duplicados.
                  td.texto-left Genera información inconsistente.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Seguridad
                  td.ajuste-border-tabla.texto-left Usuario sin permiso accede a información restringida.
                  td.texto-left Expone datos o funciones sensibles.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Usabilidad
                  td.ajuste-border-tabla.texto-left Mensajes de error confusos.
                  td.texto-left Dificulta el uso del sistema.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rendimiento
                  td.ajuste-border-tabla.texto-left Reporte tarda demasiado en cargar.
                  td.texto-left Afecta la operación del usuario.
      p.mb-5 Además de su naturaleza, los defectos pueden clasificarse según la gravedad de sus consecuencias. Los principales niveles son los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img14.jpg', alt="" ).m-auto
              h4.text-center Crítico
              .box___card_sinbordes_p
                p.mb-0.text-center Impide el uso del sistema o afecta seguridad, pérdida de datos o procesos esenciales.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img15.jpg', alt="" ).m-auto
              h4.text-center Alto
              .box___card_sinbordes_p
                p.mb-0.text-center Afecta una funcionalidad importante, aunque puede existir una alternativa temporal.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img16.jpg', alt="" ).m-auto
              h4.text-center Medio
              .box___card_sinbordes_p
                p.mb-0.text-center Afecta parcialmente el funcionamiento o genera una incomodidad operativa.
        .col-xl-3.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img17.jpg', alt="" ).m-auto
              h4.text-center Bajo
              .box___card_sinbordes_p
                p.mb-0.text-center Corresponde a detalles menores, ajustes visuales o mejoras de presentación.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La diferencia entre los niveles de gravedad puede comprenderse mediante situaciones como las siguientes:
          .box___style_1(data-aos="fade-right").color___1
            h5 Ejemplo aplicado
            p.mb-0 Una falla que impide iniciar sesión puede clasificarse como crítica porque bloquea el acceso al sistema. Un cálculo incorrecto en una factura puede ser alto o crítico según su impacto. Un mensaje poco claro puede ser medio o bajo, mientras que un error ortográfico suele corresponder a una prioridad baja.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img18.png', alt='' style="width: 500px").m-auto
      p.mb-0 La clasificación de defectos y no conformidades debe considerar el requisito o política afectada, la funcionalidad comprometida, el impacto sobre el usuario, la seguridad, los datos y la operación. Este análisis permite comprender la gravedad del hallazgo y sustentar decisiones sobre corrección, prioridad, aceptación o nueva revisión del producto.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Priorización de correcciones según impacto en el cliente
      p.mb-5 La priorización de correcciones permite establecer el orden de atención de los defectos según su impacto sobre el cliente, los usuarios, los datos, la seguridad y los procesos. Para ello, se consideran criterios que permiten definir cuáles requieren atención inmediata y cuáles pueden programarse posteriormente:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img19.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Gravedad del defecto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer qué tan serio es el problema y si compromete funciones esenciales, seguridad, datos o aceptación del producto.
            .row(titulo="Funcionalidad afectada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera la importancia de la función o proceso comprometido y su relación con la operación del cliente.
            .row(titulo="Importancia del requisito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora qué tan relevante es el requisito afectado para las necesidades y expectativas definidas por el cliente.
            .row(titulo="Riesgo sobre seguridad o datos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite determinar si el hallazgo puede generar accesos indebidos, pérdida de información, alteraciones o incumplimientos importantes.
            .row(titulo="Usuarios afectados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera cuántas personas experimentan el problema y qué tan importante es su rol dentro del proceso.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Frecuencia del problema").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora si el defecto se presenta de forma ocasional, recurrente o permanente durante la operación.
            .row(titulo="Alternativa temporal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si existe una forma provisional de continuar el proceso mientras se implementa la corrección.
            .row(titulo="Impacto sobre procesos críticos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera si el hallazgo afecta actividades esenciales para la operación de la organización.
            .row(titulo="Tiempo de corrección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora el esfuerzo y tiempo requeridos para solucionar el problema sin perder de vista su impacto.
            .row(titulo="Dependencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si la corrección depende de otros módulos, funcionalidades o defectos que deben resolverse previamente.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img20.png", alt="" style="width: 400px").m-auto
      p.mb-5 Según su impacto y urgencia, las correcciones pueden organizarse en los siguientes niveles de prioridad:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 14.
            span Niveles de prioridad de las correcciones
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Prioridad
                  th.ajuste-border-tabla.texto-left Característica
                  th.texto-left Ejemplo
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Crítica
                  td.ajuste-border-tabla.texto-left Debe corregirse de inmediato antes de aceptar el producto.
                  td.texto-left Fallo de seguridad, pérdida de datos o bloqueo del sistema.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta
                  td.ajuste-border-tabla.texto-left Afecta una función importante del cliente.
                  td.texto-left Cálculo incorrecto, reporte esencial incompleto.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Media
                  td.ajuste-border-tabla.texto-left Afecta parcialmente la operación.
                  td.texto-left Validación incompleta en un campo secundario.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Baja
                  td.ajuste-border-tabla.texto-left No afecta el funcionamiento principal.
                  td.texto-left Ajuste visual, texto o mejora menor.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La diferencia entre niveles de prioridad puede comprenderse mediante la siguiente situación:
          .box___style_1(data-aos="fade-right").color___1
            h5 Ejemplo aplicado
            p En una prueba se identifican cuatro hallazgos:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El sistema permite acceso administrativo a usuarios no autorizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El reporte mensual no incluye un campo solicitado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El botón de guardar aparece desalineado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El sistema tarda mucho en consultar información histórica.
            p.mb-0 La primera corrección debe atenderse de inmediato por seguridad. La segunda puede ser alta si el reporte es necesario para la operación del cliente. La tercera puede clasificarse como baja. La cuarta puede ser alta o media, según la frecuencia de uso y el impacto en el proceso.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img21.png', alt='' style="width: 500px").m-auto
      p.mb-5 La priorización también debe considerar dependencias. Si un defecto depende de otro problema previo, primero debe resolverse la causa que impide verificar o corregir adecuadamente la funcionalidad afectada.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img22.png', alt='' style="width: 500px").m-auto
        .col-xl
          p La priorización de correcciones puede desarrollarse mediante los siguientes pasos:
          .box___style_1(data-aos="fade-left")
            p 
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 Revisar todos los hallazgos registrados.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 Clasificar cada defecto por tipo y gravedad.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 Relacionar cada defecto con el requisito afectado.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | 
                p.mb-0 Analizar impacto sobre el cliente y los usuarios.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | 
                p.mb-0 Definir prioridad de corrección.
              li
                .lista-ol--cuadro__vineta
                  span 6
                | 
                p.mb-0 Asignar responsable.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | 
                p.mb-0 Establecer fecha o ciclo de atención.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | 
                p.mb-0 Ejecutar la corrección.
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | 
                p.mb-0 Repetir la prueba para confirmar solución.
              li 
                .lista-ol--cuadro__vineta
                  span 10
                | 
                p.mb-0 Cerrar la incidencia con evidencia.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Para profundizar en los criterios que permiten determinar qué defectos deben atenderse primero, se dispone del siguiente pódcast. Reproduzca el recurso y reconozca cómo el impacto en el cliente orienta la priorización de correcciones:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t5/img23.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="“¿Qué corregir primero en un producto <i>software</i>?”"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img24.png" style="max-width: 510px").m-auto
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Informe de resultados de pruebas de #[i software]
      p.mb-5 El informe de resultados consolida la información obtenida durante la ejecución del plan de pruebas y comunica qué se probó, qué resultados y hallazgos se obtuvieron y qué acciones se recomiendan. Para facilitar el análisis y la toma de decisiones, debe organizarse en las siguientes secciones:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img25.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación del informe").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye nombre del proyecto, fecha, versión y responsables.
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el propósito de las pruebas ejecutadas y del informe.
            .row(titulo="Alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica los módulos, funcionalidades o requisitos revisados.
            .row(titulo="Ambiente de prueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra las condiciones técnicas utilizadas durante la ejecución.
            .row(titulo="Resumen de ejecución").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consolida la cantidad de pruebas aprobadas, fallidas, bloqueadas o pendientes.
            .row(titulo="Hallazgos principales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta los defectos, incidencias o no conformidades identificadas.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Clasificación de defectos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza los hallazgos según prioridad, tipo o impacto.
            .row(titulo="Requisitos afectados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona los resultados con las necesidades y condiciones del cliente.
            .row(titulo="Evidencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye capturas, registros, resultados o documentos que respaldan los hallazgos.
            .row(titulo="Recomendaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece acciones de corrección, ajuste o mejora.
            .row(titulo="Conclusión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta el estado general del producto y la decisión sugerida.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img26.png", alt="" style="width: 400px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img27.png', alt='' style="width: 500px").m-auto
        .col-xl
          p El informe no debe limitarse a presentar datos aislados; también debe interpretar los resultados y explicar su impacto. El siguiente ejemplo permite comprender esta función:
          .box___style_1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p.mb-0 Durante la ejecución de las pruebas se revisaron los módulos de usuarios, productos y reportes. La mayoría de las funcionalidades respondió según lo esperado; sin embargo, se identificaron incidencias relacionadas con control de permisos y duplicidad de registros. Se recomienda corregir estos hallazgos antes de la aceptación del producto, debido a su impacto sobre la seguridad y la integridad de la información.
      p.mb-5 Las recomendaciones deben indicar qué acción se requiere y por qué, por ejemplo, corregir validaciones, ajustar permisos, optimizar consultas, mejorar mensajes, repetir pruebas o actualizar la trazabilidad.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Según los resultados consolidados, el informe puede establecer diferentes estados para el producto:
      .bg___color_1
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aceptable
              p.mb-0.text-center Cumple los requisitos principales y no presenta defectos críticos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aceptable con observaciones
              p.mb-0.text-center Cumple lo esencial, pero requiere ajustes menores.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text No aceptable temporalmente
              p.mb-0.text-center Presenta defectos importantes que deben corregirse antes de su aceptación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Requiere nueva revisión
              p.mb-0.text-center Los resultados no son suficientes o existen pruebas pendientes o bloqueadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img32.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Pendiente de corrección
              p.mb-0.text-center Se identificaron hallazgos que deben atenderse antes de emitir una decisión final.
          p.mb-0 El informe de resultados permite consolidar evidencias, interpretar hallazgos y orientar decisiones sobre aceptación, corrección o mejora. Además, sus resultados pueden utilizarse para fortalecer prácticas de diseño, documentación, construcción y revisión del #[i software].

</template>

<script>
import audio1 from '@/assets/curso/temas/t5/audios/Podcast_Que_Corregir_Primero_Producto_Software.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio1,
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
