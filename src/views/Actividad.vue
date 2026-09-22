<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío de pruebas y mejora de la calidad del <i>software</i>',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos, criterios, tipos de pruebas y acciones de mejora relacionados con la revisión de la calidad del <i>software</i>, de acuerdo con los requisitos y las políticas del cliente.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué propósito cumple la revisión de calidad del <i>software</i>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir lenguajes de programación antes de recopilar los requisitos, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprobar si el producto cumple requisitos y condiciones de calidad, en la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar las políticas del cliente por decisiones del equipo técnico, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la evaluación del sistema a la apariencia de sus interfaces, en la evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Por qué deben considerarse las políticas del cliente al revisar el <i>software</i>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque determinan la marca de los equipos usados durante el desarrollo, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque eliminan la necesidad de verificar los requisitos funcionales, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque sustituyen las pruebas por la opinión personal del evaluador, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque establecen reglas y condiciones que el producto debe respetar, en la evaluación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica debe tener una evidencia de revisión de calidad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe ser verificable y demostrar la actividad o el resultado registrado, según lo previsto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Debe basarse únicamente en apreciaciones generales del equipo técnico, durante las pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe conservarse solo cuando el producto presenta defectos críticos, durante la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Debe reemplazar los requisitos y las políticas definidos por el cliente, según lo previsto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes corresponde a un factor de revisión del producto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La seguridad, relacionada con la protección y el control de los accesos, durante la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La portabilidad, relacionada con el uso del sistema en distintos entornos, durante las pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La mantenibilidad, relacionada con la facilidad para corregir el <i>software</i>, durante las pruebas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La eficiencia, relacionada con el uso adecuado del tiempo y los recursos, según los requisitos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué permite la relación entre requisitos y factores de calidad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la revisión a comprobar las funciones visibles del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Valorar cada requisito mediante condiciones de calidad observables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asignar el mismo nivel de prioridad a todas las fallas encontradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la documentación cuando una funcionalidad ya fue aprobada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el propósito principal de un plan de pruebas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir una ruta organizada para verificar el funcionamiento del <i>software</i>, según el plan.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Modificar los requisitos mientras se ejecutan las pruebas del sistema, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar solo los defectos que impiden completamente usar el producto, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir la validación del cliente por decisiones del equipo de calidad, en la revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué elemento del plan delimita los módulos o requisitos que serán probados?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El ambiente, porque especifica dónde se ejecutarán las actividades, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La evidencia, porque registra los resultados obtenidos en la prueba, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El responsable, porque establece quién ejecutará y revisará el caso, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El alcance, porque precisa qué partes del producto serán incluidas, en la revisión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuándo se considera aprobada una prueba de <i>software</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando el responsable ejecuta los pasos sin conservar ninguna evidencia, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando el sistema presenta una respuesta diferente a la especificada, según los requisitos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando el resultado obtenido coincide con el resultado esperado, conforme a los requisitos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cuando la prueba no puede ejecutarse por falta del ambiente requerido, durante las pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué debe orientar el diseño de los casos de prueba?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los requisitos, las reglas de negocio y el comportamiento esperado, conforme a los requisitos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las preferencias personales del evaluador y las funciones más visibles, durante la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los recursos disponibles, sin considerar las reglas propias del negocio, según los requisitos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La intuición del equipo, aunque no exista relación con el producto final, durante las pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Para qué se incluyen casos de prueba negativos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confirmar únicamente el funcionamiento del sistema con datos válidos y completos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar registros de mensajes, validaciones y resultados diferentes a lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los criterios de aceptación establecidos para verificar cada requisito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprobar cómo responde el sistema ante datos inválidos o acciones no permitidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué aporta una matriz de trazabilidad al proceso de pruebas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elimina los casos que presentan resultados diferentes a los esperados, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Define las tecnologías que se emplearán para construir nuevos módulos, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Relaciona requisitos, casos de prueba, resultados y estados de revisión, en la revisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplaza los registros de incidencias por conclusiones generales, según los requisitos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué comprueban principalmente las pruebas funcionales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El comportamiento aislado de una función interna escrita por el programador, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cumplimiento de las funciones y reglas de negocio solicitadas al sistema, en la revisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La satisfacción general del cliente frente a la solución que será entregada, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El desempeño exclusivo de la infraestructura donde está instalado el sistema, según el plan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es el propósito de una prueba unitaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confirmar la aceptación global del producto por parte del cliente final, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar todas las integraciones del sistema dentro del ambiente productivo, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar la prioridad comercial de cada requisito pendiente de ajuste, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar de manera aislada una función, método o componente específico, durante las pruebas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza una prueba de aceptación del cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprueba si el producto satisface necesidades y criterios acordados, durante la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La realiza únicamente el programador sobre componentes internos aislados, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se limita a medir el tiempo de respuesta de todas las consultas del sistema, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye las pruebas funcionales y unitarias efectuadas durante el proyecto, según el plan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué información debe contener el registro de una incidencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo el nombre del evaluador y la fecha prevista para entregar el producto, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente una opinión sobre la apariencia general de la interfaz evaluada, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Descripción, pasos, resultado, impacto, evidencia y estado del hallazgo, en la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente el requisito aprobado y la felicitación dirigida al equipo, en la revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cómo debe interpretarse el resultado general de las pruebas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contando solo las pruebas ejecutadas, sin revisar su impacto en el cliente, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparando resultados esperados y obtenidos para sustentar decisiones, durante la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Considerando todas las incidencias como defectos con la misma gravedad, según los requisitos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aceptando el producto cuando se completa el formato del plan de pruebas, durante las pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué criterio debe orientar la priorización de las correcciones?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El impacto del defecto sobre la operación, los datos y el cliente, durante la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El orden alfabético de los módulos incluidos en el plan de pruebas, según los requisitos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La preferencia del desarrollador que identificó primero la incidencia, según lo previsto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad de palabras usadas para describir cada hallazgo registrado, en la evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es la finalidad del informe de resultados de pruebas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar las evidencias por una conclusión breve sobre todo el sistema, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar únicamente el número total de pruebas ejecutadas por el equipo, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentar las tecnologías utilizadas para programar cada funcionalidad, en la revisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consolidar resultados, defectos y recomendaciones para tomar decisiones, en la revisión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué debe hacerse después de aplicar una acción correctiva?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cerrar la incidencia de inmediato sin comprobar el comportamiento final, en la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar el caso de prueba para evitar que el defecto vuelva a registrarse, según el plan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ejecutar nuevamente la prueba y registrar el resultado de la corrección, en la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Modificar los criterios de aceptación hasta que la prueba resulte aprobada, según el plan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando el hallazgo se asigna a la persona responsable de aplicar el ajuste, durante las pruebas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando la corrección fue verificada y el resultado obtenido fue aceptado, durante la evaluación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cuando se inicia el análisis de la causa que produjo la falla identificada, durante las pruebas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando se aplaza la prueba por ausencia de datos o del ambiente requerido, según los requisitos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
