<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Revisión de la calidad del #[i software]
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La revisión de calidad permite establecer si un producto responde a las condiciones definidas para su desarrollo y entrega. Para ello, se requiere un proceso organizado, sustentado en criterios y evidencias que faciliten decisiones sobre aceptación, corrección o mejora.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 500px").m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de revisión de calidad del #[i software]
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La revisión puede aplicarse al producto final y también a requisitos, diseños, casos de prueba, interfaces, bases de datos, módulos, reportes, manuales y registros de cambios. Su alcance depende de las características del proyecto y de las condiciones establecidas para evaluar la calidad.
      p.mb-5 Los principales elementos que orientan la revisión de calidad del #[i software] son los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Requisitos funcionales
                  p.mb-0 Permiten establecer si el sistema ejecuta las funciones solicitadas. Por ejemplo, en un sistema de inventario se comprueba que sea posible registrar, consultar, modificar o eliminar información conforme con los permisos y reglas definidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Requisitos no funcionales
                  p.mb-0 Establecen condiciones relacionadas con el comportamiento y la calidad del sistema. Incluyen aspectos como tiempos de respuesta, protección de datos, estabilidad, facilidad de uso o capacidad de adaptación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Políticas del cliente
                  p.mb-0 Permiten comprobar que el producto respete las reglas de la organización. Por ejemplo, determinados procesos pueden requerir autorización previa o algunas funcionalidades pueden estar restringidas según el rol asignado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Factores de calidad
                  p.mb-0 Los factores de calidad permiten valorar características como confiabilidad, usabilidad, seguridad y mantenibilidad. Por ejemplo, se comprueba si el sistema valida los datos obligatorios y controla adecuadamente los accesos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evidencias
                  p.mb-0 Las evidencias permiten demostrar que la revisión fue realizada y respaldar los resultados obtenidos. Entre ellas pueden encontrarse listas de chequeo, informes de hallazgos y resultados de pruebas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La revisión de calidad puede aplicarse al producto, sus documentos, componentes y registros para identificar inconsistencias antes de la entrega. En un sistema de inventario, también deben comprobarse duplicidades, existencias, permisos, reportes e integridad. Sus principales propósitos son los siguientes:
      .bg___color_2
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Verificar cumplimiento
                  p.mb-0.text-center Permite comprobar si el #[i software] responde a los requisitos y condiciones previamente definidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Detectar defectos
                  p.mb-0.text-center Facilita la identificación de errores, fallas o inconsistencias que pueden afectar el funcionamiento o la calidad del producto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Prevenir reprocesos
                  p.mb-0.text-center Permite reconocer problemas antes de que avancen hacia etapas posteriores y generen mayores esfuerzos de corrección.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Soportar decisiones
                  p.mb-0.text-center Proporciona información para determinar si el producto puede aceptarse, requiere correcciones o necesita acciones de mejora.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mejorar la satisfacción del cliente
                  p.mb-0.text-center Favorece la entrega de un producto más acorde con los requisitos, políticas y expectativas establecidas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Fortalecer la mejora continua
                  p.mb-0.text-center Permite identificar fallas del proceso y establecer acciones que contribuyan a mejorar futuras revisiones y desarrollos.
          .row.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img15.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Una revisión adecuada debe ser objetiva, documentada y verificable, por lo que los hallazgos deben sustentarse en evidencias y no solo en apreciaciones personales. Aunque revisión, prueba, validación y verificación se relacionan con la calidad del producto, cumplen funciones diferentes, como se presenta a continuación:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img16.png", alt="" style="width: 350px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Revisión").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Corresponde al examen general de un producto, documento, componente o resultado para identificar su cumplimiento o posibles inconsistencias.
                .row(titulo="Prueba").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Consiste en la ejecución controlada de una funcionalidad o componente para comprobar su comportamiento frente a condiciones previamente definidas.
                .row(titulo="Validación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite confirmar que el producto satisface las necesidades y expectativas del cliente o del usuario final.
                .row(titulo="Verificación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite confirmar que el producto cumple los requisitos, especificaciones o criterios previamente establecidos.
      p.mb-0 La revisión de calidad del #[i software] permite valorar el producto antes de su aceptación o mejora. A partir de criterios y evidencias, se determina si el sistema cumple lo solicitado, responde a las condiciones de calidad y requiere correcciones, ajustes o aprobación.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Políticas del cliente aplicadas a la calidad del #[i software]
      p.mb-5 Las políticas del cliente representan lineamientos y condiciones propias de la organización que deben incorporarse en la valoración del producto. Un sistema puede funcionar técnicamente y, aun así, resultar no conforme si incumple reglas internas relacionadas con seguridad, datos, operación o autorizaciones. Las principales políticas del cliente aplicadas a la calidad del #[i software] son las siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Política de Seguridad
                  p.mb-0 Define las condiciones necesarias para proteger la información y controlar el acceso. Puede exigir credenciales individuales, restricciones para información sensible y mecanismos que impidan acciones ejecutadas por usuarios no autorizados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Política de roles y permisos
                  p.mb-0 Determina qué acciones corresponden a cada perfil. Una política puede establecer, por ejemplo, que únicamente un administrador elimine registros o que determinados usuarios solo tengan permisos de consulta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Política de datos
                  p.mb-0 Establece reglas para registrar, actualizar, conservar y proteger información. Puede exigir validación de campos obligatorios, integridad de registros, historial de modificaciones o controles frente a duplicidades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Política operativa
                  p.mb-0 Regula la manera en que se ejecutan los procesos de la organización. Una solicitud, por ejemplo, puede requerir documentos completos o aprobación previa antes de avanzar hacia otra etapa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Política de calidad
                  p.mb-0 Define condiciones mínimas para aceptar el producto. Puede establecer requisitos relacionados con confiabilidad de reportes, funcionamiento de procesos esenciales o cumplimiento de criterios previamente acordados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Política documental
                  p.mb-0 Determina qué registros deben conservarse como soporte. Entre ellos pueden encontrarse informes de revisión, evidencias de pruebas, actas, registros de cambios y documentos de aceptación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Para aplicar las políticas del cliente a la revisión de calidad, estas deben identificarse, documentarse y transformarse en condiciones verificables. Pueden provenir de manuales, procedimientos, contratos, requisitos o acuerdos con el cliente. Algunos ejemplos se presentan en la siguiente tabla:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Políticas del cliente y condiciones verificables en el #[i software]
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Política expresada por el cliente
                      th.texto-left Condición verificable en el #[i software]
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold No todos los usuarios pueden modificar información.
                      td.texto-left El sistema debe bloquear edición para perfiles sin permiso.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Los registros deben conservar historial.
                      td.texto-left El sistema debe guardar fecha, usuario y acción realizada.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Los reportes deben coincidir con la información registrada.
                      td.texto-left Los reportes deben generarse con datos actualizados y consistentes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Las solicitudes deben tener aprobación previa.
                      td.texto-left El sistema debe impedir avanzar sin aprobación del responsable.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Los datos sensibles deben protegerse.
                      td.texto-left El sistema debe controlar accesos y evitar exposición no autorizada.
          p.mb-5 El contexto de la organización permite determinar qué políticas requieren mayor atención y qué criterios de calidad deben priorizarse:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img24.png", alt="" style="width: 400px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Manejo de datos personales").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Política relevante: protección y acceso restringido a la información.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Criterio de calidad asociado: seguridad e integridad.
                .row(titulo="Procesos administrativos con aprobaciones").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Política relevante: flujo de autorización definido.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Criterio de calidad asociado: funcionalidad y trazabilidad.
                .row(titulo="Uso por personal operativo").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Política relevante: interfaz clara y sencilla.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Criterio de calidad asociado: usabilidad.
                .row(titulo="Reportes para toma de decisiones").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Política relevante: información precisa y actualizada.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Criterio de calidad asociado: confiabilidad y exactitud.
                .row(titulo="Cambios frecuentes").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Política relevante: posibilidad de ajuste controlado.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Criterio de calidad asociado: mantenibilidad y flexibilidad.
      p.mb-5 Cuando las políticas del cliente no se consideran, el #[i software] puede incumplir necesidades organizacionales y generar reprocesos. Para integrarlas en la revisión de calidad, se recomienda seguir este procedimiento:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar políticas
                p.mb-0 Reconocer reglas, condiciones y lineamientos del cliente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Documentar políticas
                p.mb-0 Convertir las políticas en criterios claros y verificables.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Relacionar con requisitos
                p.mb-0 Asociar cada política con requisitos funcionales o no funcionales.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definir criterios de revisión
                p.mb-0 Establecer cómo se comprobará el cumplimiento.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Registrar evidencias
                p.mb-0 Guardar resultados, hallazgos y observaciones de la revisión.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img29.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img30.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Proponer ajustes
                p.mb-0 Definir acciones cuando el #[i software] no cumpla la política.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img31.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En conclusión, las políticas del cliente son una base esencial para revisar la calidad del #[i software]. Permiten evaluar el producto desde las reglas reales de la organización y no solo desde el funcionamiento técnico. Cuando estas políticas se documentan y se convierten en criterios verificables, la revisión de calidad se vuelve más objetiva, útil y alineada con las necesidades del cliente.
      .bg___color_2
        .px-5
          Separador
          #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.3 Criterios para valorar el producto #[i software]
          .row.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Los criterios de valoración permiten comprobar si el #[i software] cumple los requisitos, las políticas del cliente y las condiciones de calidad esperadas. A continuación, se comparan criterios generales con condiciones verificables aplicables a la revisión del producto:
          .bg___color_1
            .px-5
              .row.justify-content-center.mb-5
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Tabla 2.
                    span Ejemplos de criterios generales y verificables
                  .tabla-a(data-aos="zoom-in")
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Criterio general
                          th.texto-left Criterio verificable
                      tbody
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser seguro.
                          td.texto-left El sistema debe permitir acceso solo mediante usuario y contraseña.
                        tr
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser rápido.
                          td.texto-left Las consultas principales deben responder en un tiempo aceptable para la operación.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser fácil de usar.
                          td.texto-left Los formularios deben generar campos claros, mensajes de validación y opciones ordenadas.
                        tr
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser confiable.
                          td.texto-left La información registrada debe guardarse sin pérdida ni alteración.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser mantenible.
                          td.texto-left Los módulos deben estar organizados y documentados para facilitar ajustes.
              p.mb-5 La formulación verificable reduce la ambigüedad y permite sustentar la revisión con evidencias concretas. Según el aspecto evaluado, los criterios pueden organizarse en los siguientes factores de calidad:
              .bg___carrusel
                .px-5
                  .row.align-items-center.mb-5
                    .col-xl-4(data-aos="fade-right")
                      figure.d-none.d-xl-block
                        img(src='@/assets/curso/temas/t1/img32.png', alt='' style="max-width: 400px").m-auto
                    .col-xl-8(data-aos="fade-left")
                      SlyderF(columnas="col-lg-6 col-xl-6")
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img33.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Funcionalidad
                          p.mb-0.text-center El criterio permite establecer si el sistema realiza las funciones solicitadas. Una evidencia puede corresponder a la relación de requisitos cumplidos.
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img34.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Confiabilidad
                          p.mb-0.text-center Permite determinar si el sistema conserva los datos y opera sin fallas frecuentes. Los resultados de pruebas pueden respaldar esta valoración.
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img35.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Usabilidad
                          p.mb-0.text-center Valora si las personas pueden utilizar el sistema con facilidad. Puede sustentarse mediante revisión de interfaz, observaciones de uso o resultados de aceptación.
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img36.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Eficiencia
                          p.mb-0.text-center Permite establecer si el sistema responde en tiempos adecuados para las operaciones definidas. Los tiempos de respuesta constituyen una evidencia relevante.
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img37.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Seguridad
                          p.mb-0.text-center Comprueba si el sistema protege la información y controla los accesos según los perfiles y permisos definidos.
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img38.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Mantenibilidad
                          p.mb-0.text-center Valora si el sistema puede corregirse o modificarse sin afectar innecesariamente otras partes de la solución.
                        .tarjeta.color-acento-botones.p-4
                          .row.justify-content-center.mb-3
                            .col-8
                              img(src='@/assets/curso/temas/t1/img39.svg' style="max-width: 90px").m-auto
                          h4.mb-3.estilo-text Portabilidad
                          p.mb-0.text-center Permite determinar si el sistema puede funcionar en los entornos, dispositivos o plataformas requeridos por el cliente.
                  p.mb-5 Los criterios deben relacionarse con los requisitos del cliente para mantener la trazabilidad y comprobar su cumplimiento. Esta relación puede establecerse mediante criterios de valoración y resultados esperados, como se presenta a continuación:
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Tabla 3.
                    span Relación entre requisitos, criterios de valoración y resultados esperados
                  .tabla-a(data-aos="zoom-in").mb-5
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Requisito del cliente
                          th.ajuste-border-tabla.texto-left Criterio de valoración
                          th.texto-left Resultado esperado
                      tbody
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe registrar usuarios.
                          td.ajuste-border-tabla.texto-left El formulario debe guardar usuarios con datos obligatorios completos.
                          td.texto-left Usuario creado correctamente.
                        tr
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe manejar roles.
                          td.ajuste-border-tabla.texto-left Cada rol debe visualizar únicamente las funciones permitidas.
                          td.texto-left Acceso diferenciado por perfil.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe generar reportes.
                          td.ajuste-border-tabla.texto-left El reporte debe reflejar información consistente con los datos registrados.
                          td.texto-left Reporte correcto y verificable.
                        tr
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe permitir consulta por fecha.
                          td.ajuste-border-tabla.texto-left El filtro de fecha debe retornar solo registros del periodo seleccionado.
                          td.texto-left Consulta precisa.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe evitar duplicados.
                          td.ajuste-border-tabla.texto-left No debe permitir registrar dos elementos con el mismo identificador.
                          td.texto-left Integridad de datos.
      p.mb-5 La valoración debe considerar la prioridad de cada criterio según su impacto en el funcionamiento, la seguridad y la aceptación del producto. Los principales niveles son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img40.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Crítico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta el funcionamiento esencial, la seguridad o la aceptación del sistema. Por ejemplo, el acceso de usuarios no autorizados.
            .row(titulo="Alto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta una funcionalidad importante o un proceso clave del cliente. Por ejemplo, un cálculo incorrecto en el total de una factura.
            .row(titulo="Medio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta parcialmente la operación, pero permite continuar con determinadas restricciones. Por ejemplo, la ausencia de un campo complementario en un reporte.
            .row(titulo="Bajo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a ajustes menores o mejoras de presentación que no comprometen funciones esenciales. Por ejemplo, un texto de ayuda que requiere mayor claridad.
      .bg___color_1
        .px-5
          p.mb-5 Los criterios deben redactarse de manera clara y verificable para evitar interpretaciones diferentes. A continuación, se comparan formulaciones ambiguas con criterios mejor definidos:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Ejemplos de criterios ambiguos y mejor formulados
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio ambiguo
                      th.texto-left Criterio mejor formulado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser moderno.
                      td.texto-left La interfaz debe utilizar una estructura visual clara, con menús organizados y diseño adaptable.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe funcionar bien.
                      td.texto-left Las funciones definidas en los requisitos deben ejecutarse sin errores durante las pruebas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El sistema debe ser seguro.
                      td.texto-left El sistema debe restringir el acceso según usuario, contraseña y rol asignado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El reporte debe ser bueno.
                      td.texto-left El reporte debe incluir fecha, usuario, registros filtrados y totales calculados correctamente.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img41.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p Los criterios permiten valorar el producto software de manera objetiva y organizada cuando se relacionan con los requisitos, las políticas del cliente y los factores de calidad. Su formulación clara, verificable y priorizada facilita identificar hallazgos y sustentar decisiones sobre la aceptación, corrección o ajuste del producto. 
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Evidencias de revisión de calidad del #[i software]
      .box___style_3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Las evidencias de revisión de calidad del #[i software] son documentos, registros, resultados o soportes que permiten demostrar que una revisión fue realizada y que los hallazgos identificados cuentan con respaldo. Su uso fortalece la objetividad, la trazabilidad y la toma de decisiones dentro del proceso de calidad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img42.png', alt='' style="width: 500px").m-auto
      p.mb-5 A continuación, se presentan aspectos esenciales sobre las evidencias utilizadas en la revisión de calidad del #[i software]:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Concepto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img43.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Concepto
              p.mb-0 Las evidencias de revisión corresponden a los soportes que permiten dejar constancia de lo revisado, los criterios aplicados, los resultados obtenidos y las decisiones derivadas del proceso. Su función es convertir la revisión en una actividad verificable y sustentada.
        .py-3.py-md-4(titulo="Utilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img44.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utilidad
              p.mb-0 Las evidencias permiten registrar hallazgos, respaldar conclusiones y facilitar decisiones sobre aceptación, corrección o mejora. También contribuyen a la comunicación entre cliente, equipo técnico y responsables de calidad, porque precisan qué ocurrió y qué acciones deben realizarse.
        .py-3.py-md-4(titulo="Tipos de evidencias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img45.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tipos de evidencias
              p.mb-0 Entre las evidencias más utilizadas se encuentran las listas de chequeo, matrices de trazabilidad, registros de incidencias, capturas de pantalla, resultados de pruebas, actas de validación e informes de revisión. Cada una cumple una función específica dentro del seguimiento de la calidad.
        .py-3.py-md-4(titulo="Características")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img46.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Características
              p.mb-0 Una evidencia de calidad debe ser clara, suficiente y pertinente. Esto significa que debe permitir identificar qué se revisó, cuál fue el hallazgo, en qué condición se presentó y qué resultado se obtuvo, de manera que el problema pueda comprenderse y atenderse adecuadamente.
        .py-3.py-md-4(titulo="Aporte al proceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img47.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Aporte al proceso
              p.mb-0 Las evidencias no solo sirven para registrar errores; también permiten demostrar cumplimiento. Cuando el #[i software] satisface un requisito, la evidencia respalda su aceptación; cuando no lo cumple, orienta la corrección y fortalece la trazabilidad del proceso.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img48.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las evidencias de revisión permiten sustentar los resultados de una valoración y mantener trazabilidad sobre los hallazgos identificados. Su adecuada documentación fortalece la objetividad del proceso y facilita el seguimiento de las acciones de ajuste.
      p.mb-5 Para profundizar en la estructura, utilidad y aplicación de estas evidencias, se dispone del siguiente documento complementario:
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img49.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Instrumentos y evidencias para la revisión de calidad del #[i software]
            p.mb-0 Consulte el documento “#[b Anexo 1. Instrumentos y evidencias para la revisión de calidad del #[i software]]” y profundice en los instrumentos utilizados para registrar y documentar la calidad del #[i software].
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Instrumentos_evidencias_software.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
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
