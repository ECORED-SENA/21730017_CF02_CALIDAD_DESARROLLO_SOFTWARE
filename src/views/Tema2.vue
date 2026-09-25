<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Factores de calidad en la valoración del producto
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los factores de calidad permiten valorar el producto #[i software] mediante criterios que ayudan a determinar si responde adecuadamente a las necesidades, condiciones de uso y expectativas definidas para el proyecto. Su aplicación favorece una revisión objetiva y permite sustentar decisiones sobre aceptación, ajuste o mejora del producto.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Factores de operación del producto #[b software]
      p.mb-5 Los factores de operación permiten valorar cómo responde el #[i software] durante su uso, considerando aspectos como funcionamiento, estabilidad, facilidad de uso, seguridad y tiempos de respuesta. Los principales son los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Funcionalidad
                  p.mb-0 Permite determinar si el sistema realiza las funciones solicitadas por el cliente. Por ejemplo, en un sistema de inventario se comprueba si registra correctamente entradas y salidas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Confiabilidad
                  p.mb-0 Valora si el #[i software] funciona de manera estable y conserva la información correctamente. En un inventario, las existencias deben actualizarse sin pérdida ni alteración de datos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Usabilidad
                  p.mb-0 Permite establecer si el usuario puede comprender y utilizar las funciones disponibles con facilidad. Formularios claros, opciones organizadas y mensajes comprensibles favorecen esta condición.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Eficiencia
                  p.mb-0 Valora si el sistema responde en tiempos adecuados y utiliza apropiadamente los recursos disponibles. Las consultas y reportes deben ejecutarse sin demoras excesivas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Seguridad
                  p.mb-0 Permite comprobar si la información y las funciones están protegidas mediante controles de acceso y permisos acordes con los roles definidos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Integridad
                  p.mb-0 Valora si los datos se mantienen completos, coherentes y protegidos frente a modificaciones indebidas durante las operaciones del sistema.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La aplicación de estos factores puede comprenderse mediante una situación práctica relacionada con la operación de un sistema de inventario:
          .box___style_1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 En un sistema de inventario, la funcionalidad se evidencia en el registro correcto de productos, entradas y salidas; la confiabilidad, en la actualización adecuada de las existencias; la usabilidad, en formularios claros; la seguridad, en accesos según permisos; y la eficiencia, en consultas y reportes sin demoras excesivas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img8.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_1.color___1.fit___box_1(data-aos="fade-left")
            p La valoración de estos factores puede orientarse mediante preguntas que relacionan el funcionamiento esperado con condiciones verificables del producto:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿El sistema cumple las funciones definidas en los requisitos? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Los datos se registran, consultan y actualizan correctamente? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Las funciones pueden utilizarse con claridad? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Los mensajes de error o confirmación son comprensibles? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Los permisos corresponden con los roles establecidos? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿El sistema responde adecuadamente en las tareas principales?
      p.mb-0 La revisión de los factores de operación permite establecer si el producto responde adecuadamente durante su uso. Su valoración contribuye a identificar condiciones que pueden afectar el cumplimiento de los requisitos y la aceptación del #[i software] por parte del cliente.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Factores de revisión del producto #[b software]
      p.mb-5 Los factores de revisión permiten valorar la capacidad del software para corregirse, ajustarse y mejorarse de forma controlada, facilitando su mantenimiento y reduciendo reprocesos. Los principales son los siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img10.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mantenibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la facilidad para corregir errores o incorporar mejoras sin generar efectos innecesarios sobre otras partes del sistema. Una estructura organizada facilita localizar los componentes que deben modificarse.
            .row(titulo="Flexibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer la capacidad del producto para adaptarse cuando cambian requisitos, reglas de negocio o necesidades del cliente, procurando que los ajustes puedan realizarse de manera controlada.
            .row(titulo="Modularidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relaciona con la organización del sistema en partes con responsabilidades definidas. Esta separación ayuda a realizar cambios específicos sin afectar innecesariamente otros componentes.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Testabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la facilidad para comprobar de manera independiente el funcionamiento de componentes o funcionalidades. Favorece la identificación de fallas y la validación de correcciones realizadas.
            .row(titulo="Claridad técnica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite comprender la estructura interna del sistema, sus componentes y las relaciones existentes entre ellos. Esta claridad facilita identificar el origen de problemas y realizar modificaciones.
            .row(titulo="Documentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende la información relacionada con requisitos, diseño, funcionamiento y cambios realizados. Una documentación actualizada facilita el mantenimiento, la trazabilidad y la transferencia de conocimiento.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img11.png", alt="" style="width: 300px").m-auto
      p.mb-5 La aplicación de estos factores puede comprenderse mediante una situación relacionada con el mantenimiento de un sistema de facturación:
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img12.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p En un sistema de facturación, un cambio en el porcentaje de impuesto debería realizarse desde un punto controlado. Si el mismo cálculo está repetido en diferentes módulos, la modificación puede requerir múltiples ajustes y aumentar el riesgo de inconsistencias, lo que dificulta el mantenimiento del producto.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-3.fit___box_1(data-aos="fade-right")
            p La valoración de estos factores puede apoyarse en condiciones técnicas y documentales relacionadas con la estructura y mantenimiento del sistema:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Existencia de documentación técnica y funcional. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Separación entre interfaz, lógica de negocio y datos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilidad para identificar el origen de un error. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Organización del sistema por módulos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro de los cambios realizados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Claridad en la relación entre requisitos, diseño y funcionalidades. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Posibilidad de comprobar componentes de manera independiente.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img14.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Una baja calidad en los factores de revisión puede dificultar la corrección de errores, la incorporación de cambios y la trazabilidad, además de favorecer nuevos defectos. Por ello, estos factores permiten valorar si el #[i software] puede mantenerse, modificarse y mejorarse de forma controlada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Factores de transición del producto #[b software]
      p.mb-5 Los factores de transición permiten valorar la capacidad del #[i software] para adaptarse, integrarse y crecer frente a nuevos entornos, plataformas o necesidades del cliente. Los principales son los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Portabilidad
                  p.mb-0 Permite establecer si el #[i software] puede funcionar en diferentes entornos tecnológicos. Por ejemplo, puede requerirse su operación en distintos navegadores o plataformas definidas por el cliente.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Compatibilidad
                  p.mb-0 Valora el funcionamiento adecuado del sistema con diferentes navegadores, sistemas operativos, dispositivos o versiones requeridas dentro del proyecto.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Interoperabilidad
                  p.mb-0 Permite determinar si el #[i software] puede comunicarse o integrarse con otros sistemas. Por ejemplo, puede requerir conexión con una pasarela de pagos o una plataforma externa.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Reusabilidad
                  p.mb-0 Se relaciona con la posibilidad de utilizar componentes del #[i software] en otros módulos o proyectos sin necesidad de desarrollarlos nuevamente.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Adaptabilidad
                  p.mb-0 Permite establecer si el sistema puede ajustarse a nuevas condiciones de negocio, como incorporar sedes, áreas, reglas o funcionalidades diferentes.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Escalabilidad
                  p.mb-0 Valora la capacidad del sistema para crecer en número de usuarios, volumen de datos o funcionalidades sin perder estabilidad.
      p.mb-5 Estos factores deben valorarse según las necesidades futuras del cliente, especialmente cuando se prevén cambios, crecimiento o integración tecnológica. Su aplicación puede comprenderse mediante el siguiente ejemplo:
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br 
          br
          p Un sistema de inventario puede comenzar en una sola bodega y, con el crecimiento de la empresa, requerir varias sedes, consultas por ubicación o integración con compras y ventas. Si el producto cuenta con buenas condiciones de transición, estos cambios pueden incorporarse de forma controlada y con menor necesidad de rediseño.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.mb-0.fit___box_2(data-aos="fade-right")
            p La valoración de estos factores puede orientarse mediante preguntas relacionadas con la capacidad de adaptación y crecimiento del producto:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿El sistema puede funcionar en los entornos definidos por el cliente? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Puede utilizarse desde los dispositivos requeridos? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿La arquitectura permite incorporar nuevos módulos? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿El #[i software] puede integrarse con otros sistemas? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Los componentes pueden reutilizarse? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿El sistema puede crecer sin afectar su estabilidad? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Existen restricciones técnicas que limiten su evolución?
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 500px").m-auto
      .row.align-items-center
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img23.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 Los factores de transición permiten valorar si el #[i software] puede adaptarse y evolucionar frente a nuevas condiciones tecnológicas, organizacionales o funcionales. Su análisis contribuye a reducir limitaciones futuras y facilita la continuidad del producto.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Relación entre factores de calidad y requisitos del cliente
      p.mb-5 Los factores de calidad deben relacionarse con los requisitos del cliente para convertirlos en criterios concretos de valoración. Un mismo requisito puede asociarse con uno o varios factores, como se presenta a continuación:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 5.
        span Relación entre requisitos del cliente, factores de calidad y criterios de valoración
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Requisito del cliente
              th.ajuste-border-tabla.texto-left Factor de calidad relacionado
              th.texto-left Criterio de valoración
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Registrar usuarios con roles.
              td.ajuste-border-tabla.texto-left Funcionalidad y seguridad.
              td.texto-left Cada usuario debe acceder según su perfil.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Generar reportes mensuales.
              td.ajuste-border-tabla.texto-left Funcionalidad, eficiencia y confiabilidad.
              td.texto-left El reporte debe generar datos correctos en tiempo adecuado.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Evitar duplicidad de registros.
              td.ajuste-border-tabla.texto-left Integridad y confiabilidad.
              td.texto-left El sistema no debe permitir registros repetidos.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Permitir uso desde diferentes dispositivos.
              td.ajuste-border-tabla.texto-left Portabilidad y usabilidad.
              td.texto-left La interfaz debe adaptarse a los dispositivos definidos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Facilitar cambios futuros.
              td.ajuste-border-tabla.texto-left Mantenibilidad y flexibilidad.
              td.texto-left El sistema debe permitir ajustes sin afectar todo el producto.
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_4(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img23.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Esta relación fortalece la trazabilidad y facilita la priorización de hallazgos según su impacto. Para establecerla de manera organizada, se recomienda seguir los siguientes pasos:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar requisitos
                p.mb-0 Se reconocen los requisitos funcionales y no funcionales definidos para el producto.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Revisar políticas y expectativas
                p.mb-0 Se consideran las condiciones establecidas por el cliente que influyen en la calidad esperada.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Asociar factores de calidad
                p.mb-0 Cada requisito se relaciona con uno o varios factores según su propósito y condiciones de funcionamiento.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img26.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img27.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definir criterios
                p.mb-0 Se establecen condiciones verificables que permitan comprobar el cumplimiento del requisito.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Registrar evidencias
                p.mb-0 Se documentan los resultados obtenidos durante la revisión o las pruebas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img28.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img29.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Priorizar hallazgos
                p.mb-0 Los incumplimientos se clasifican de acuerdo con su impacto sobre el cliente y el producto.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La importancia de esta relación puede comprenderse mediante situaciones en las que un requisito se cumple solo de forma parcial:
          .box___style_1.mb-3.color___1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 Un sistema puede permitir iniciar sesión y, aun así, incumplir condiciones de seguridad si no diferencia permisos por rol. De igual manera, puede generar reportes, pero afectar la calidad si los datos son incorrectos o los tiempos de respuesta resultan inadecuados.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img23.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Los factores de calidad permiten valorar los requisitos del cliente de manera integral. Su relación con criterios verificables y evidencias facilita una revisión objetiva, trazable y orientada a las necesidades reales del producto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img30.png', alt='' style="width: 500px").m-auto

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
