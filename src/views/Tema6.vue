<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 6
        h1 Ajuste y mejora del modelo de calidad
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 El ajuste y mejora del modelo de calidad permite transformar los resultados de la revisión y las pruebas en acciones orientadas a corregir defectos, fortalecer el producto y mejorar la gestión de los procesos de calidad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img1.png', alt='' style="width: 500px").m-auto
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Concepto de mejora de procesos de #[i software]
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 La mejora de procesos de #[i software] busca fortalecer la planificación, el diseño, la construcción, la revisión y el ajuste del producto para reducir errores, reprocesos e incumplimientos. Cuando estas actividades presentan fallas o poco control, pueden generarse problemas repetitivos, requisitos mal interpretados, ausencia de evidencias o cambios de alto impacto. Los principales aspectos de mejora son los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img2.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Requisitos
                  p.mb-0 Fortalece la documentación y validación de requisitos para reducir ambigüedades, interpretaciones incorrectas y cambios posteriores.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Diseño
                  p.mb-0 Promueve revisiones más detalladas antes de la construcción para identificar posibles fallas y reducir ajustes posteriores.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Pruebas
                  p.mb-0 Permite estandarizar casos de prueba, criterios de aceptación y mecanismos de revisión para comprobar el producto de forma organizada.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Gestión de cambios
                  p.mb-0 Favorece el registro, análisis de impacto y control de las modificaciones realizadas durante el desarrollo.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Defectos recurrentes
                  p.mb-0 Permite registrar y analizar fallas repetitivas para identificar sus causas y establecer acciones que eviten su reaparición.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Equipo de trabajo
                  p.mb-0 Fortalece las buenas prácticas de calidad mediante capacitación, revisión interna y definición clara de responsabilidades.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Seguimiento
                  p.mb-0 Permite establecer indicadores básicos que ayuden a valorar resultados y reconocer oportunidades de mejora.
      p.mb-5 La mejora debe asumirse como una práctica continua que permite aprender de los resultados, ajustar progresivamente el modelo de calidad e identificar oportunidades de mejora a partir de fallas recurrentes, como se presenta en el siguiente ejemplo:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 Si durante las pruebas se presentan repetidamente errores en campos obligatorios, la causa puede estar en la programación, en el diseño de los formularios o en requisitos incompletos. En este caso, la mejora no consiste únicamente en corregir el defecto, sino en fortalecer el proceso que permitió su aparición.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img9.png', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          p.mb-5 Los hallazgos identificados durante el desarrollo pueden convertirse en acciones concretas de mejora, como se presenta a continuación:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Situaciones identificadas y posibles mejoras del proceso
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación encontrada
                      th.texto-left Posible mejora del proceso
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisitos ambiguos o incompletos.
                      td.texto-left Mejorar la validación de requisitos con el cliente.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cambios aplicados sin control.
                      td.texto-left Implementar registro y análisis de impacto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Defectos repetidos en varios módulos.
                      td.texto-left Fortalecer revisión técnica y pruebas unitarias.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de evidencias de revisión.
                      td.texto-left Estandarizar formatos de prueba e informes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Errores en permisos de usuario.
                      td.texto-left Revisar políticas de roles desde el diseño.
          p.mb-0 Entre las acciones de mejora pueden incluirse el fortalecimiento de requisitos y trazabilidad, la revisión del diseño, la estandarización de pruebas, el control de cambios, el análisis de defectos recurrentes, la capacitación del equipo y la definición de indicadores.
          Separador
          #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.2 Acciones de ajuste según resultados de prueba
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las acciones de ajuste permiten transformar los hallazgos de las pruebas en correcciones o mejoras concretas sobre el producto y el proceso. Cada acción debe relacionarse con una evidencia, el requisito afectado y el impacto identificado.
      p.mb-5 Según el tipo de problema encontrado, pueden aplicarse las siguientes acciones de ajuste:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Corrección funcional
                  p.mb-0 Se aplica cuando una funcionalidad no cumple el comportamiento esperado y requiere modificación para responder al requisito establecido.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ajuste de datos
                  p.mb-0 Se realiza cuando existen inconsistencias, duplicidades, pérdidas o errores relacionados con el registro, almacenamiento o tratamiento de la información.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ajuste de seguridad
                  p.mb-0 Se aplica ante problemas de acceso, permisos, autorización o protección de datos que puedan comprometer la seguridad del producto.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img14.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Mejora de usabilidad
                  p.mb-0 Busca ajustar interfaces, mensajes o flujos que dificultan la interacción del usuario con el sistema.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img15.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Optimización de rendimiento
                  p.mb-0 Se aplica cuando el sistema presenta tiempos de respuesta inadecuados o utiliza recursos de manera poco eficiente.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img16.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ajuste documental
                  p.mb-0 Permite completar o actualizar requisitos, evidencias, instrucciones, registros o documentos asociados con el producto.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t6/img17.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ajuste del proceso
                  p.mb-0 Se realiza cuando el hallazgo evidencia una debilidad en la forma de trabajo y requiere modificar prácticas de revisión, desarrollo o control.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La aplicación de estas acciones puede comprenderse mediante situaciones derivadas de los resultados de las pruebas:
          .box___style_1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 Si una prueba funcional evidencia que el sistema permite registrar productos duplicados, puede incorporarse una validación de código único y revisar los registros existentes. Si una prueba de aceptación identifica que el flujo de aprobación no corresponde con el proceso del cliente, puede ser necesario ajustar las reglas de negocio y actualizar los casos de prueba.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img18.png', alt='' style="width: 500px").m-auto
      .box___style_2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img19.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 Las acciones deben priorizarse según su impacto. Los defectos críticos requieren atención antes de la aceptación del producto, mientras que los ajustes menores pueden programarse posteriormente si no afectan su funcionamiento ni las políticas del cliente.
      p.mb-5 Para definir y aplicar una acción de ajuste de manera controlada, se recomienda seguir los siguientes pasos:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Revisar el hallazgo
                p.mb-0 Se analiza la incidencia registrada y la evidencia que sustenta el problema.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img20.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img21.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar el requisito o política afectada
                p.mb-0 Se establece qué condición definida por el cliente presenta incumplimiento.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Analizar la causa
                p.mb-0 Se determina el origen probable del defecto para evitar correcciones superficiales.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img22.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img23.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Valorar el impacto
                p.mb-0 Se analiza cómo afecta el problema al cliente, los usuarios, los datos o la operación.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Definir la acción
                p.mb-0 Se establece si corresponde una corrección, ajuste o mejora.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Asignar responsable
                p.mb-0 Se determina quién realizará la intervención y dará seguimiento al resultado.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Programar la atención
                p.mb-0 Se establece la fecha o ciclo en que se realizará la corrección.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img26.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img27.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Aplicar el ajuste
                p.mb-0 Se ejecuta la modificación definida.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Repetir la prueba
                p.mb-0 Se comprueba nuevamente la funcionalidad para verificar la efectividad del ajuste.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img28.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img29.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Registrar y cerrar
                p.mb-0 Se documenta el resultado final y se actualiza el estado de la incidencia.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Corregir implica solucionar un defecto o incumplimiento identificado; mejorar busca fortalecer el producto o el proceso para obtener mejores resultados, incluso cuando no existe una falla crítica.
          .box___style_1.mb-3(data-aos="fade-right")
            h5 Ejemplo:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Si el sistema no permite guardar un registro válido, se requiere una corrección. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Si guarda correctamente, pero el mensaje de confirmación es poco claro, se requiere una mejora. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Si los mismos errores aparecen en varios formularios, además de corregirlos, debe fortalecerse el proceso de revisión. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Si un cambio genera fallas en módulos aprobados, debe mejorarse el control de cambios y la repetición de pruebas.
          p.mb-0 Las acciones aplicadas deben documentarse y verificarse mediante nuevas pruebas, como se presenta en los siguientes ejemplos:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img30.png', alt='' style="width: 500px").m-auto
      
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 16.
        span Relación entre hallazgos, acciones de ajuste y verificación posterior
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Hallazgo identificado
              th.ajuste-border-tabla.texto-left Acción de ajuste sugerida
              th.texto-left Verificación posterior
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold El sistema permite usuarios duplicados.
              td.ajuste-border-tabla.texto-left Agregar validación de documento o correo único.
              td.texto-left Ejecutar nuevamente el caso de prueba.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Un usuario sin permiso accede a un módulo.
              td.ajuste-border-tabla.texto-left Ajustar reglas de autorización por rol.
              td.texto-left Probar acceso con diferentes perfiles.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Un reporte presenta datos incompletos.
              td.ajuste-border-tabla.texto-left Revisar consulta, filtros y origen de datos.
              td.texto-left Comparar reporte con registros reales.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Mensajes de error poco claros.
              td.ajuste-border-tabla.texto-left Reescribir mensajes con orientación al usuario.
              td.texto-left Validar comprensión durante la revisión.
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Las acciones de ajuste convierten los resultados de las pruebas en mejoras concretas. Su aplicación debe ser planificada, documentada y verificada para asegurar que la corrección resuelva el problema sin generar nuevas fallas.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Seguimiento a la mejora del modelo de calidad
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img31.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El seguimiento permite comprobar si las acciones de ajuste solucionaron los problemas identificados y si contribuyeron a fortalecer la calidad del producto y del proceso. También permite controlar incidencias, verificar resultados y mantener evidencias actualizadas.
      p.mb-5 Los hallazgos pueden pasar por diferentes estados durante su seguimiento. Los principales son los siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img32.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Pendiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El hallazgo fue registrado, pero aún no ha sido atendido.
            .row(titulo="En análisis").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se está revisando la causa del problema y su impacto.
            .row(titulo="En corrección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El responsable se encuentra aplicando el ajuste definido.
            .row(titulo="Corregido").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La solución fue implementada, pero aún debe verificarse.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="En reprueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La funcionalidad se ejecuta nuevamente para comprobar la corrección.
            .row(titulo="Cerrado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La corrección fue validada y aceptada.
            .row(titulo="Reabierto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El problema persiste o la corrección generó una nueva falla.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img33.png", alt="" style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img34.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_1(data-aos="fade-left").color___1
            p El seguimiento también puede apoyarse en indicadores sencillos que permitan valorar la evolución de las correcciones y reconocer problemas recurrentes. Algunos indicadores útiles son:
            .row.align-items-center
              .col-xl-6.mb-3.mb-lg-0
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número de defectos encontrados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número de defectos corregidos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Porcentaje de pruebas aprobadas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cantidad de pruebas fallidas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cantidad de incidencias críticas.
              .col-xl-6
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tiempo promedio de corrección.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número de defectos reabiertos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Requisitos sin prueba asociada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Incidencias repetidas por módulo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Hallazgos pendientes por prioridad.
      p.mb-5 A continuación, se presenta un ejemplo:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img35.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Si un módulo concentra numerosas incidencias, puede requerir una revisión más profunda. Del mismo modo, si varias pruebas permanecen bloqueadas o varias incidencias se reabren, puede existir un problema con el ambiente, los datos de prueba o la verificación de las correcciones.
      .bg___color_1
        .px-5
          p.mb-5 Para mantener el control de cada acción de mejora, el seguimiento debe registrar información como la siguiente:
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 17.
                span Elementos para el seguimiento de acciones de mejora
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento de seguimiento
                      th.texto-left Propósito
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estado de la incidencia
                      td.texto-left Saber en qué fase se encuentra el hallazgo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsable asignado
                      td.texto-left Identificar quién debe analizar o corregir.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha de atención
                      td.texto-left Controlar tiempos de respuesta.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencia de corrección
                      td.texto-left Demostrar que el ajuste fue aplicado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado de reprueba
                      td.texto-left Confirmar que el problema fue solucionado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Observaciones finales
                      td.texto-left Registrar decisiones o condiciones de cierre.
          p.mb-5 El seguimiento también permite determinar si el modelo de calidad requiere ajustes. Si los criterios, pruebas, políticas o mecanismos de trazabilidad no permiten identificar problemas relevantes, deben revisarse y actualizarse.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t6/img36.png', alt='' style="width: 500px").m-auto
            .col-xl
              .box___style_1.mb-3.fit___box_1(data-aos="fade-left")
                p Esto significa que la mejora no se limita al producto, sino que también puede implicar ajustes en:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los criterios de calidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La matriz de trazabilidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los casos de prueba.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los formatos de registro de incidencias.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Las políticas de revisión.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La documentación de requisitos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La forma de priorizar defectos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los procedimientos de aceptación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Los controles de cambio.
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t2/img14.svg', alt='' style="width: 80px").m-auto
                .col-xl
                  p.mb-0 El seguimiento a la mejora permite comprobar la efectividad de las acciones aplicadas, mantener trazabilidad y ajustar el modelo de calidad para fortalecer de manera continua el producto y el proceso de desarrollo.
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Caso práctico de revisión, pruebas y mejora
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img37.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La revisión, las pruebas y la mejora se integran cuando los hallazgos identificados permiten establecer factores de calidad afectados, definir acciones de ajuste y verificar posteriormente su efectividad. Esta relación puede comprenderse mediante un caso aplicado a un sistema de gestión de inventario.
      p.mb-5 Para profundizar en esta integración, se dispone del siguiente documento complementario:
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img49.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Caso práctico de revisión, pruebas y mejora de un sistema de inventario
            p.mb-0 Consulte el caso práctico y analice el proceso aplicado a un sistema de gestión de inventario.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Pruebas_mejora_sistema.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema6',
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
