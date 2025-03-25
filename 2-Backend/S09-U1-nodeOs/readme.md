# Ejercicio de Node.js con Patrón de Diseño Modular

**Objetivo:** 
Crear un programa en Node.js que imprima información sobre el sistema operativo y las interfaces de red, utilizando el patrón de diseño modular.

## Paso 1: Estructura de Archivos

Crea tres archivos en tu proyecto:

   - `systemInfo.js`
   - `osModule.js`
   - `networkModule.js`

## Paso 2: Implementación de `osModule.js`

En el archivo `osModule.js` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

**Ejemplo de output:**
Nombre: darwin
Tipo: Darwin
Versión: Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64
Arquitectura: x64
CPUs: 12
MemoriaTotal: 16384.00 MB
MemoriaLibre: 370.71 MB

## Paso 3: Implementación de `networkModule.js`

En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

**Ejemplo de output:**
Interfaz lo0:
  Familia: IPv4
  Dirección: 127.0.0.1
  Interno: true
  Familia: IPv6
  Dirección: ::1
  Interno: true
  Familia: IPv6
  Dirección: fe80::1
  Interno: true

Interfaz en5:
  Familia: IPv6s
  Dirección: fe80::aede:48ff:fe00:1122
  Interno: false

## Paso 4: Ejecución del programa
Deberás "importar" o "requerir" `osModule.js` y `networkModule.js` en el archivo `systemInfo.js` Aquí es donde estará toda la información para imprimir en la terminal.

Abre la terminal, navega al directorio donde guardaste los archivos y ejecuta el programa con el siguiente comando:
`node systemInfo.js`

Desde node podemos abrir una nueva terminal en el sitio donde trabajamos:
Menú Terminal -> Nuevo Terminal -> Ejecutamos `node systemInfo.js` y vemos el resultado. Recuerda los `console.log()`

# Pistas:
- Completa el archivo `systemInfo.js` para imprimir la información. Puedes utilizar un bucle for...in, forEach, ... También Object.entries para recorrer los objetos e imprimir la información.
- Documentación `node:os` https://nodejs.org/api/os.html
- Algunos métodos os: version(), platform(), cpus(), totalmem(), networkInterfaces, freemem(), type(), arch()