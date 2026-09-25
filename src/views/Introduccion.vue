<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La calidad del #[i software] requiere revisar sistemáticamente si el producto cumple los requisitos, las políticas y las necesidades definidas por el cliente. Esta valoración comprende los factores relacionados con su operación, revisión y transición, así como las evidencias necesarias para sustentar el cumplimiento e identificar defectos, incidencias o no conformidades.
          .box___style_1(data-aos="fade-right")
            p.mb-0 El plan de pruebas organiza el alcance, los casos de prueba, los datos, los responsables, los resultados esperados y los criterios de aceptación. Mediante pruebas funcionales, unitarias y de aceptación, se compara el comportamiento obtenido con el esperado y se identifican hallazgos que deben registrarse, analizarse y priorizarse según su impacto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 500px").m-auto
      .box___style_2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 A partir de los resultados, se elaboran informes y se definen acciones correctivas y de mejora. Su seguimiento permite comprobar la eficacia de los ajustes, fortalecer la trazabilidad y actualizar el modelo de calidad implementado. De esta manera, el componente orienta la revisión, las pruebas y la mejora continua del #[i software] de acuerdo con las políticas y necesidades del cliente.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
