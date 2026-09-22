<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p La síntesis integra los conceptos principales desarrollados en el componente formativo.
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual presenta la relación entre las pruebas y la mejora del software a partir de seis ejes principales. Incluye la revisión de la calidad del software, orientada por los requisitos y políticas del cliente, los criterios de valoración y las evidencias de revisión; los factores de calidad asociados con la operación, revisión y transición del producto; y el plan de pruebas, que define qué se va a probar, los casos de prueba, los datos, el ambiente y los criterios de aceptación. También incorpora los tipos de pruebas funcionales, unitarias y de aceptación, junto con el registro de incidencias. Finalmente, aborda el análisis de resultados para identificar defectos, priorizar correcciones y elaborar informes, así como las acciones de ajuste y seguimiento que contribuyen a mejorar el proceso y obtener un producto de software más confiable.")
        .col-auto
          a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
