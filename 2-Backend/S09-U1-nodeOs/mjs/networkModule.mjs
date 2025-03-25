// - Interfaz
// - Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

import os from "node:os";

const getInterfaceData = () => {
    const interfaceData = os.networkInterfaces();

    for (const interfaceName in interfaceData){
        console.log(`Interfaz ${interfaceName}:`);

        interfaceData[interfaceName].forEach(data => {
            console.log(`Familia: ${data.family}`);
            console.log(`Dirección: ${data.address}`);
            console.log(`Interno: ${data.internal}`);
            console.log('-----------------');
        })
    }
}

export { getInterfaceData }