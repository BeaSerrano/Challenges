// Deberás "importar" o "requerir" `osModule.js` y `networkModule.js` en el archivo `systemInfo.js` Aquí es donde estará toda la información para imprimir en la terminal.

import { getOsData } from "./osModule.mjs";
import { getInterfaceData } from "./networkModule.mjs";

getOsData()
getInterfaceData()