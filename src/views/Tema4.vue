<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Tipos de pruebas del #[i software]
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Las pruebas del #[i software] permiten comprobar el comportamiento del producto, identificar fallas y verificar su cumplimiento frente a requisitos, políticas y criterios de calidad. Se aplican con distintos propósitos según el nivel de revisión y las necesidades del cliente.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img1.png', alt='' style="width: 500px").m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Pruebas funcionales del #[i software]
      p Las pruebas funcionales permiten comprobar si el #[i software] realiza correctamente las funciones definidas en los requisitos del cliente. Se centran en las acciones que ejecuta el sistema y en la comparación entre el resultado esperado y el obtenido.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Estas pruebas pueden aplicarse a diferentes funciones del sistema, entre las que se encuentran las siguientes:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Formularios de registro
                  p.mb-0.text-center Permiten comprobar el ingreso, validación y almacenamiento correcto de la información registrada por el usuario.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Consultas y búsquedas
                  p.mb-0.text-center Verifican que el sistema recupere información de acuerdo con los criterios, filtros o datos ingresados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Generación de reportes
                  p.mb-0.text-center Permite comprobar que los reportes incluyan la información, filtros, cálculos y periodos definidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cálculos automáticos
                  p.mb-0.text-center Verifica que las operaciones realizadas por el sistema produzcan resultados correctos según las reglas establecidas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Inicio de sesión
                  p.mb-0.text-center Permite comprobar que el acceso al sistema funcione con las credenciales y condiciones definidas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Roles y permisos
                  p.mb-0.text-center Verifica que cada usuario acceda únicamente a las funciones y acciones autorizadas según su perfil.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Procesos de aprobación
                  p.mb-0.text-center Permite comprobar que las aprobaciones se ejecuten según las reglas, responsables y condiciones establecidas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Actualización o eliminación de información
                  p.mb-0.text-center Verifica que los registros puedan modificarse o eliminarse de acuerdo con los permisos y reglas definidas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Validaciones
                  p.mb-0.text-center Permite comprobar que el sistema identifique datos faltantes y aplique las validaciones correspondientes antes de continuar.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Flujos completos de usuario
                  p.mb-0.text-center Verifica procesos que requieren varias acciones consecutivas para completar una operación dentro del sistema.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p La aplicación de estas pruebas puede comprenderse mediante una situación relacionada con el registro de información:
              .box___style_1(data-aos="fade-right")
                h5 Ejemplo aplicado
                p.mb-0 En un formulario de registro no basta con comprobar que los datos completos se guarden correctamente. También deben probarse situaciones como campos obligatorios vacíos, formatos inválidos, registros duplicados o acciones ejecutadas por perfiles sin autorización.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img13.png', alt='' style="width: 500px").m-auto
      p.mb-5 Cada prueba funcional debe relacionarse con un requisito específico y un resultado esperado, como se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 9.
            span Relación entre requisitos funcionales, pruebas y resultados esperados
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Requisito funcional
                  th.ajuste-border-tabla.texto-left Prueba funcional esperada
                  th.texto-left Resultado esperado
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Registrar clientes.
                  td.ajuste-border-tabla.texto-left Ingresar datos válidos y guardar el registro.
                  td.texto-left El cliente queda almacenado correctamente.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Consultar productos.
                  td.ajuste-border-tabla.texto-left Buscar un producto por nombre o código.
                  td.texto-left El sistema refleja el producto solicitado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Generar reporte mensual.
                  td.ajuste-border-tabla.texto-left Seleccionar un rango de fechas y generar reporte.
                  td.texto-left El reporte presenta datos del periodo indicado.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Controlar acceso por roles.
                  td.ajuste-border-tabla.texto-left Ingresar con diferentes perfiles de usuario.
                  td.texto-left Cada perfil visualiza solo las opciones permitidas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Evitar duplicidad.
                  td.ajuste-border-tabla.texto-left Registrar dos elementos con el mismo identificador.
                  td.texto-left El sistema impide el registro duplicado.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_1.mb-3.color___1(data-aos="fade-left")
            p.mb-0 Las pruebas funcionales deben considerar tanto condiciones válidas como situaciones de error. Pueden ejecutarse manualmente o mediante herramientas automatizadas, según las características del proyecto, los recursos disponibles y la frecuencia con que deban repetirse.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img23.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Las pruebas funcionales permiten comprobar el cumplimiento de las funciones solicitadas e identificar fallas que pueden afectar directamente la operación del producto y las necesidades del cliente.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Pruebas unitarias del #[i software]
      p.mb-5 Las pruebas unitarias comprueban de forma individual componentes internos del #[i software], como funciones, métodos o clases, antes de integrarlos con otras partes del sistema. En facturación, por ejemplo, permiten verificar cálculos como subtotal, impuesto, descuento y total, facilitando la detección temprana de errores. Algunos componentes que pueden probarse son los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cálculos
                  p.mb-0 Permiten comprobar funciones encargadas de realizar operaciones, como calcular subtotales, impuestos, descuentos, totales o existencias disponibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validaciones
                  p.mb-0 Verifican reglas relacionadas con formatos, datos obligatorios, valores permitidos o restricciones definidas para una operación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Permisos
                  p.mb-0 Permiten comprobar procedimientos que determinan si un usuario cuenta con autorización para ejecutar una acción específica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transformación de datos
                  p.mb-0 Verifican componentes que modifican, preparan o convierten información antes de almacenarla o procesarla.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Clasificación y reglas de negocio
                  p.mb-0 Permiten comprobar funciones que asignan prioridades, estados o decisiones según condiciones previamente definidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Controles de integridad
                  p.mb-0 Verifican reglas que impiden valores negativos, duplicidades u otras condiciones que puedan afectar la consistencia de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La aplicación de una prueba unitaria puede comprenderse mediante una regla relacionada con el control de existencias:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p En un sistema de inventario, una regla puede impedir que la cantidad de productos retirados sea mayor que la disponible. La prueba unitaria debe comprobar situaciones como cantidad suficiente, cantidad exacta, cantidad insuficiente, valor negativo o producto inexistente.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img22.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_1.color___1.fit___box_1(data-aos="fade-left")
            p Las pruebas unitarias aportan beneficios relacionados con la detección temprana de fallas y el mantenimiento del producto:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permiten localizar errores en partes específicas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitan la corrección al identificar con mayor precisión el origen del problema. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reducen el riesgo de que un cambio afecte funciones existentes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Favorecen la comprobación controlada de reglas de negocio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fortalecen la confiabilidad de los componentes antes de su integración.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-0.fit___box_2(data-aos="fade-right")
            p Para diseñar una prueba unitaria, deben definirse elementos que permitan comprobar de forma controlada el comportamiento de la unidad:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Unidad que será revisada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Dato o entrada utilizada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Condición que se desea comprobar. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultado esperado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultado obtenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado de la prueba. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Observación cuando exista diferencia entre lo esperado y lo obtenido.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img23.png', alt='' style="width: 500px").m-auto
      p.mb-5 La aplicación de estos elementos puede comprenderse mediante el siguiente ejemplo:
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img24.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo adicional
          br
          br
          p Una función como “#[b calcularDescuento]” puede comprobar si aplica correctamente un porcentaje cuando se cumple una condición y si mantiene el valor original cuando no corresponde aplicarlo. También puede evaluarse con valores límite o datos no permitidos, según las reglas del negocio.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3(data-aos="fade-right")
            p.mb-0 Las pruebas unitarias no reemplazan las pruebas funcionales. Las primeras comprueban componentes internos de forma individual, mientras que las funcionales verifican el comportamiento completo del sistema desde las funciones solicitadas. Ambos tipos se complementan dentro del proceso de calidad.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img23.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Las pruebas unitarias ayudan a detectar errores tempranos, facilitar el mantenimiento y fortalecer la confiabilidad del #[i software] antes de integrar sus componentes y validar funcionalidades completas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img25.png', alt='' style="width: 500px").m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Pruebas de aceptación del cliente
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Las pruebas de aceptación permiten confirmar si el #[i software] satisface las necesidades, condiciones y expectativas del cliente en situaciones cercanas a su operación real, y determinar si el producto puede aceptarse, requiere ajustes o necesita una nueva revisión. Para ello, se valoran los siguientes aspectos:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t4/img26.png', alt='' style="max-width: 400px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Funcionalidades principales
              p.mb-0.text-center Permite comprobar que las funciones esenciales respondan a los requisitos definidos por el cliente.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Flujos de trabajo
              p.mb-0.text-center Verifica que los procesos completos se ejecuten según la secuencia y las condiciones previstas por la organización.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Reglas de negocio
              p.mb-0.text-center Comprueba que el sistema aplique correctamente condiciones, restricciones y decisiones propias del proceso.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Roles y permisos
              p.mb-0.text-center Permite confirmar que cada usuario acceda únicamente a las funciones correspondientes con su perfil.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Reportes y datos
              p.mb-0.text-center Verifica que la información generada sea correcta, suficiente y útil para el proceso del cliente.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img32.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Interfaz
              p.mb-0.text-center Permite valorar si la interacción resulta clara y adecuada para las tareas previstas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img33.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Condiciones de aceptación
              p.mb-0.text-center Comprueba si el producto cumple los criterios mínimos definidos para aprobar la entrega.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La aplicación de estas pruebas puede comprenderse mediante un proceso cercano a la operación real del cliente:
          .box___style_1.color___1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 En un sistema de solicitudes internas, una prueba de aceptación puede consistir en registrar una solicitud, adjuntar información, enviarla a revisión, recibir aprobación y consultar su estado final. Este flujo permite comprobar si el producto responde al proceso definido por la organización.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img34.png', alt='' style="width: 500px").m-auto
      .bg___color_2
        .px-5
          p.mb-5 Un escenario de aceptación debe definir las condiciones necesarias para comprobar el proceso y sustentar la decisión final:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Estructura de un escenario de aceptación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.texto-left Descripción
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proceso a validar
                      td.texto-left Registro y aprobación de solicitudes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Usuario participante
                      td.texto-left Auxiliar, coordinador o administrador.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Condición inicial
                      td.texto-left El usuario debe tener cuenta activa y permisos asignados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acciones esperadas
                      td.texto-left Crear solicitud, enviar, revisar, aprobar y consultar estado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Criterio de aceptación
                      td.texto-left El flujo debe completarse según las reglas del cliente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencia
                      td.texto-left Resultado de la prueba, observaciones y aprobación o rechazo.
          p.mb-5 Según los resultados obtenidos, la prueba de aceptación puede finalizar en los siguientes estados:
          .bg___color_3
            .px-5
              .row.justify-content-center.mb-5
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                  .box___card_sinbordes.h-100.color___1
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img35.jpg', alt="" ).m-auto
                      h4.text-center Aceptado
                      .box___card_sinbordes_p
                        p.mb-0.text-center El producto cumple el escenario revisado.
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .box___card_sinbordes.h-100.color___1
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img36.jpg', alt="" ).m-auto
                      h4.text-center Aceptado con observaciones
                      .box___card_sinbordes_p
                        p.mb-0.text-center El producto cumple lo esencial, pero requiere ajustes menores.
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .box___card_sinbordes.h-100.color___1
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img37.jpg', alt="" ).m-auto
                      h4.text-center No aceptado
                      .box___card_sinbordes_p
                        p.mb-0.text-center El producto incumple una condición importante establecida por el cliente.
                .col-xl-3.col-md-9(data-aos="fade-left")
                  .box___card_sinbordes.h-100.color___1
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t4/img38.jpg', alt="" ).m-auto
                      h4.text-center Pendiente de nueva revisión
                      .box___card_sinbordes_p
                        p.mb-0.text-center Se requieren correcciones antes de ejecutar nuevamente la prueba.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img39.png', alt='' style="width: 500px").m-auto
        .col-xl
          p Esta situación puede comprenderse mediante el siguiente ejemplo:
          .box___style_1(data-aos="fade-left")
            h5 Ejemplo adicional
            p.mb-0 Un sistema puede generar correctamente un reporte de ventas y, aun así, requerir ajustes si el cliente necesita filtros por sede o vendedor para apoyar sus decisiones. Si estas condiciones no estaban previstas, pueden registrarse como mejora o cambio solicitado.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3.fit___box_2(data-aos="fade-right")
            p Las decisiones de aceptación deben sustentarse en evidencias que permitan documentar el resultado y los acuerdos establecidos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Actas de revisión. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultados de escenarios ejecutados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Observaciones del cliente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Criterios aprobados o pendientes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro de ajustes solicitados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Confirmación de aceptación del producto o módulo.
          p.mb-0 Las pruebas de aceptación permiten confirmar si el #[i software] responde a las necesidades reales del cliente y sustentan decisiones sobre aceptación, ajuste o nueva revisión del producto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img40.png', alt='' style="width: 500px").m-auto
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Registro de hallazgos e incidencias de prueba
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 El registro de hallazgos e incidencias permite documentar fallas, incumplimientos o comportamientos no esperados identificados durante las pruebas. Un hallazgo requiere análisis y, cuando se formaliza para su seguimiento, se convierte en incidencia. Este registro facilita conservar evidencias, priorizar problemas, orientar correcciones y mantener trazabilidad. Para su adecuada gestión, debe incluir información como la siguiente:
      .bg___color_2
        .px-5
          p.mb-5 
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Campos básicos para el registro de una incidencia
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Campo del registro
                      th.texto-left Descripción
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Código de incidencia
                      td.texto-left Identificador único del hallazgo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha de registro
                      td.texto-left Día en que se identificó la incidencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Módulo o funcionalidad
                      td.texto-left Parte del sistema donde ocurrió el problema.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Descripción del hallazgo
                      td.texto-left Explicación clara del comportamiento observado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado esperado
                      td.texto-left Lo que debía ocurrir según el requisito o criterio.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado obtenido
                      td.texto-left Lo que realmente ocurrió durante la prueba.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Prioridad
                      td.texto-left Nivel de importancia según impacto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencia
                      td.texto-left Captura, registro, documento o resultado que respalda el hallazgo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                      td.texto-left Persona o equipo encargado de revisar o corregir.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estado
                      td.texto-left Pendiente, en revisión, corregido, rechazado o cerrado.
          p.mb-5 La prioridad de una incidencia depende del impacto que tenga sobre la operación, la seguridad, los datos o las necesidades del cliente. Según su nivel de impacto, las incidencias pueden clasificarse en los siguientes niveles:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img41.jpg', alt="" ).m-auto
                  h4.text-center Crítica
                  .box___card_sinbordes_p
                    p.mb-0.text-center Impide el uso del sistema o afecta la seguridad, los datos esenciales o los procesos principales.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img42.jpg', alt="" ).m-auto
                  h4.text-center Alta
                  .box___card_sinbordes_p
                    p.mb-0.text-center Afecta una funcionalidad importante, aunque puede existir una alternativa temporal para continuar la operación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img43.jpg', alt="" ).m-auto
                  h4.text-center Media
                  .box___card_sinbordes_p
                    p.mb-0.text-center Afecta parcialmente el uso del sistema o genera una incomodidad operativa sin impedir el proceso principal.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img44.jpg', alt="" ).m-auto
                  h4.text-center Baja
                  .box___card_sinbordes_p
                    p.mb-0.text-center Corresponde a detalles menores de presentación, redacción o mejoras que no requieren atención inmediata.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img45.png', alt='' style="width: 500px").m-auto
        .col-xl
          p La aplicación del registro puede comprenderse mediante una situación relacionada con el control de duplicidad de productos:
          .box___style_1(data-aos="fade-left").color___1
            h5 Ejemplo aplicado
            p.mb-0 Durante una prueba funcional se intenta registrar un producto con un código ya existente. El resultado esperado es que el sistema bloquee el registro duplicado y genere un mensaje de advertencia; sin embargo, el producto se guarda nuevamente. Este hallazgo debe registrarse como incidencia porque afecta la integridad de los datos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3.fit___box_2(data-aos="fade-right")
            p El registro podría describirse así:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Módulo: productos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Hallazgo: el sistema permite registrar productos con código duplicado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultado esperado: impedir la duplicidad de códigos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultado obtenido: se guardan dos productos con el mismo código. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Prioridad: alta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evidencia: registro de productos duplicados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado: pendiente de corrección. 
          p.mb-0 El seguimiento de la incidencia continúa después de su registro, ya que la corrección debe comprobarse mediante una nueva prueba y dejar evidencia del resultado obtenido.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img46.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_4(data-aos="flip-up")
              p.mb-0.text-center El ciclo de una incidencia puede desarrollarse mediante las siguientes etapas:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar el hallazgo
                p.mb-0 Se reconoce el error, defecto o incumplimiento durante la ejecución de la prueba.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img47.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img48.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Registrar la incidencia
                p.mb-0 Se documentan el problema, el resultado esperado, el resultado obtenido y la evidencia.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Asignar responsable
                p.mb-0 Se determina la persona o equipo encargado de analizar y atender el hallazgo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img49.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img50.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Analizar la causa
                p.mb-0 Se establece el origen del problema y los componentes que pueden estar involucrados.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Aplicar corrección
                p.mb-0 Se realiza el ajuste necesario para solucionar el defecto identificado.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img51.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img52.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Ejecutar nueva prueba
                p.mb-0 La funcionalidad se comprueba nuevamente para verificar la corrección.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Validar el resultado
                p.mb-0 Se confirma que el problema fue solucionado y que el ajuste no generó nuevas fallas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img53.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img54.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Cerrar la incidencia
                p.mb-0 Se actualiza el estado y se conserva la evidencia final del proceso.
      p.mb-0 El registro de hallazgos e incidencias permite controlar los defectos identificados durante las pruebas, facilitar su corrección y mantener trazabilidad sobre las acciones realizadas.

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
