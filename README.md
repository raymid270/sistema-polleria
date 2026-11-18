# Brasa & Punto · Sistema de pollería

Aplicación web para el flujo de atención en sala: mesas, toma de pedidos, comandas de cocina, seguimiento, precuenta y caja. Está construida con React, TypeScript y Vite. Los datos de la demostración se guardan en el navegador para conservarlos al recargar.

## Ejecutar en Visual Studio Code

1. Abre la carpeta `sistema-polleria` en VS Code.
2. Abre la terminal integrada y ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre la dirección local que indique Vite.

Para generar la versión de producción: `npm run build`.

## Probar el flujo

- Selecciona una mesa libre, ajusta los comensales y pulsa **Iniciar atención**.
- Agrega productos desde la carta. Las cantidades, notas y subtotales aparecen en el resumen.
- Pulsa **Enviar a cocina** y abre **Cocina** en el menú lateral para avanzar la comanda por sus estados.
- Usa la pestaña **Consumo** al abrir una mesa para revisar las comandas y la precuenta.
- **Caja** permite cerrar las mesas cuando todas sus comandas están entregadas.

La primera ejecución usa mesas y comandas de muestra. Puedes limpiar los datos de esta demostración borrando el almacenamiento local del sitio.

## Firebase

El SDK de Firebase está instalado y [src/config/firebase.ts](src/config/firebase.ts) inicializa Authentication, Firestore y Storage cuando se proporcionan las variables de entorno. Copia `.env.example` a `.env.local` y completa los valores de la configuración web de Firebase.

La interfaz actual es una base de demostración con almacenamiento local. La conexión a Firebase, autenticación por roles, reglas de Firestore y transacciones/Cloud Functions todavía deben implementarse antes de usarla con datos reales o presentarla como sistema multiusuario. No despliegues credenciales de servicio en el frontend.
